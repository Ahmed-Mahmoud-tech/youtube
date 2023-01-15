import { store } from "../store/store";
import { Provider } from "react-redux";
import MyWrapper from "../components/MyWrapper.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <MyWrapper />
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
