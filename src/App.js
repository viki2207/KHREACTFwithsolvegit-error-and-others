import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// redux import statements
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      navigate("/");
      // send the user to landing page.
    }
    store.dispatch(loadUser());
  }, []); // we are not accessing any props.
  const appName = "UpgradeConnector";
  return (
    <>
      <Provider store={store}>
        <Header appName={appName}></Header>

        <Routers></Routers>
        <Footer appName={appName}></Footer>
      </Provider>
    </>
  );
}

export default App;
