import { store } from "../store/store";
import { Provider } from "react-redux";
import MyWrapper from "../components/MyWrapper.jsx";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <MyWrapper />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
