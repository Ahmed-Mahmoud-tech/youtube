import { useState } from "react";
import Wrapper from "./Auth.styled";
import useRequest from "../../../../axios/apis/useRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUserData } from "../../../../store/slices/user";
import { changePop } from "../../../../store/slices/style";
const Auth = () => {
  const dispatch = useDispatch();
  const { signIn, signUp } = useRequest();
  const [login, setLogin] = useState(true);

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    pwd: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
  });

  return (
    <Wrapper>
      <div className="title"> {login ? "singIn" : "singUp"} </div>

      <Formik
        initialValues={{ user: "", pwd: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          if (login) {
            const res = await signIn(values);
            if (res) {
              localStorage.setItem("token", res.data.userInfo.accessToken);
              dispatch(addUserData(res.data.userInfo));
              dispatch(changePop(""));
            }
          } else {
            signUp(values);
          }
        }}>
        {() => (
          <Form action="">
            <Field name="user" placeholder="User Name" />
            <span className="ValidationErrorMessage">
              <ErrorMessage name="user" />
            </span>
            <Field type="password" name="pwd" placeholder="password" />
            <span className="ValidationErrorMessage">
              <ErrorMessage name="pwd" />
            </span>

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <div className="switchSec">
        <span style={{ opacity: login ? "1" : "0.5" }}>singIn</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setLogin(!login);
            }}
          />
          <div className="slider round"></div>
        </label>
        <span style={{ opacity: login ? "0.5" : "1" }}>singUp</span>
      </div>
    </Wrapper>
  );
};

export default Auth;
