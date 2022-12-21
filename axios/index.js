import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeAuth } from "../store/slices/UserSlice";
import Preloader from "../component/Preloader/Preloader";

let axiosObject = {
  baseURL: "https://connect4-control.clpdcgit.clpdc.local/api/v1",
};

const mainInstance = axios.create(axiosObject);

const Request = () => {
  const dispatch = useDispatch();

  // let navigate = useNavigate();
  const [preloader, setPreloader] = useState(false);
  useEffect(() => {
    mainInstance.interceptors.request.use(
      function (config) {
        setPreloader(true);
        //check if iam not in login page
        if (config.url != "/login") {
          const localStorageToken = localStorage.getItem("token");
          config.headers.Authorization = localStorageToken
            ? `Bearer ${localStorageToken}`
            : "";
        }
        //return the request with the token
        return config;
      },
      (error) => {
        //if err don't do any thing and i will handel it in my global handel error
        return Promise.reject(error);
      }
    );

    mainInstance.interceptors.response.use(
      (res) => {
        setPreloader(false);
        return res;
      },
      async (err) => {
        setPreloader(false);
        if (err.response) {
          //when the Access Token is expired
          if (err.response.status === 401) {
            // if the refresh token expired clear the local storage and navigate to login
            toast.error(err.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
            dispatch(removeAuth());

            return Promise.reject(err);
          }
          // with validations errors show toasters
          if (err.response.status === 422) {
            for (const key in err.response.data.errors) {
              const element = err.response.data.errors[key];
              toast.error(element, {
                position: toast.POSITION.TOP_CENTER,
                toastId: "uniqueId",
              });
              for (const errMessage of element) {
                console.log(errMessage, "errMessage");
                toast.error(errMessage, {
                  position: toast.POSITION.TOP_CENTER,
                  toastId: "uniqueId",
                });
              }
            }
          }
          // else just show error message with
          // validations errors
          if (err.response.status === 403) {
            toast.error(err.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
          }
          if (err.response.status === 429) {
            toast.error(err.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
          }
          // servers error
          if (err.response.status === 404 || err.response.status === 500) {
            toast.error("something went wrong", {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
          }
          //internet and fire wall errors
          if (err.response.status === 0) {
            toast.error("no Internet connection", {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
          } else {
            toast.error("something went wrong", {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
          }
        }
        return Promise.reject(err);
      }
    );
  }, []);
  return <>{preloader && <Preloader />}</>;
  // return <></>;
};

export default Request;
