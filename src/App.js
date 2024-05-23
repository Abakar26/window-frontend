/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./Styles/App.css";
import Nav from "./Components/Landingv2/Nav";
import WebRoutes from "./WebRoutes";
import Header from "./Components/Landingv2/Fundamentals/Header";
import Fundamental from "./Components/Landingv2/Fundamentals/Fundamental";
import Nav2 from "./Components/Nav";
import store from "./store";

const App = () => {
  const [switchNav, setSwitchNav] = useState(false);
  const [fundamentalNav, setFundamentalNav] = useState(false);
  const [headerInput, setHeaderInput] = useState("");
  const [switchSignup, setSwitchSignup] = useState(false);
  const [selectSideNav, setSelectSideNav] = useState(0);
  const [currentUser, setCurrentUser] = useState("");
  const { innerWidth } = window;

  useEffect(() => {
    setSelectSideNav(selectSideNav);
    if (innerWidth < 1280) {
      document.body.style.zoom = "85%";
    }
  }, [selectSideNav]);
  return (
    <Provider store={store}>
      <div>
        {switchNav ? (
          <Header
            setHeaderInput={setHeaderInput}
            headerInput={headerInput}
            setFundamentalNav={setFundamentalNav}
            currentUser={currentUser}
          />
        ) : fundamentalNav ? (
          <Fundamental
            currentUser={currentUser}
            selectSideNav={selectSideNav}
          />
        ) : switchSignup ? (
          <Nav2 currentUser={currentUser} />
        ) : (
          <Nav
            setSwitchNav={setSwitchNav}
            setFundamentalNav={setFundamentalNav}
            currentUser={currentUser}
          />
        )}
        <WebRoutes
          setHeaderInput={setHeaderInput}
          setSwitchNav={setSwitchNav}
          setFundamentalNav={setFundamentalNav}
          setSelectSideNav={setSelectSideNav}
          headerInput={headerInput}
          setSwitchSignup={setSwitchSignup}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </Provider>
  );
};

export default App;
