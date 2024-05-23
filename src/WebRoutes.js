/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "./Components/Landingv2/Search";
import Collection from "./Components/Landingv2/Fundamentals/Collection";
import PersonalInfo from "./Components/Landingv2/Fundamentals/PersonalInfo";
import Bookmarks from "./Components/Landingv2/Fundamentals/Bookmarks";
import YourSearches from "./Components/Landingv2/Fundamentals/YourSearches";
import SavedWebsites from "./Components/Landingv2/Fundamentals/SavedWebsites";
import ProductDetails from "./Components/Landingv2/Collection/ProductDetails";
import ProductView from "./Components/Landingv2/Collection/ProductView";
import ProductDisplayViewmore from "./Components/Landingv2/ProductDisplayViewmore";
import ProductForYouViewmore from "./Components/Landingv2/ProductForYouViewmore";
import CollectionCartDisplay from "./Components/Landingv2/CollectionCartDisplay";
import SignupPage from "./Components/Signup_Page/SignupPage";
import AboutSignupPage from "./Components/Signup_Page/AboutSignupPage";
import StylePrefrence from "./Components/Signup_Page/StylePrefrence";
import SignupWelcome from "./Components/Signup_Page/SignupWelcome";
import SignupResult from "./Components/Signup_Page/SignupResult";
import Sustainability from "./Components/Signup_Page/Sustainability";
import Fit from "./Components/Signup_Page/Fit";
import Aesthetic from "./Components/Signup_Page/Aesthetic";
import StyleSuggestions from "./Components/Signup_Page/StyleSuggestions";
import StyleIdentification from "./Components/Signup_Page/StyleIdentification";
import SizeSelection from "./Components/Signup_Page/SizeSelection";
import WebsiteSelection from "./Components/Signup_Page/WebsiteSelection";
import ColorSelection from "./Components/Signup_Page/ColorSelection";
import LoginPage from "./Components/Signup_Page/LoginPage";
import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";
import ProfileBookmarkCollection from "./Components/Landingv2/Fundamentals/ProfileBookmarkCollection";
import CollectionProducts from "./Components/Landingv2/Fundamentals/CollectionProducts";
import CollectionShareProducts from "./Components/Landingv2/Fundamentals/CollectionShareProducts";

// import { logout } from './actions/auth';

const WebRoutes = (props) => {
  // const { user: currentUser } = useSelector((state) => state.auth);
  const currentUser = localStorage.getItem("user");
  const dispatch = useDispatch();
  // const logOut = () => {
  //   dispatch(logout());
  // };
  useEffect(() => {
    props.setCurrentUser(currentUser);
    history.listen(() => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch, currentUser]);
  return (
    <Routes history={history}>
      <Route
        path="/"
        element={
          <Search
            setSwitchNav={props.setSwitchNav}
            setFundamentalNav={props.setFundamentalNav}
            setSwitchSignup={props.setSwitchSignup}
          />
        }
      />
      {/* <Route path="/collection" element={<Collection setSwitchNav={props.setSwitchNav}
       headerInput={props.headerInput} />} /> */}
      <Route
        path="/products"
        element={
          <Collection
            setHeaderInput={props.setHeaderInput}
            setSwitchNav={props.setSwitchNav}
            headerInput={props.headerInput}
          />
        }
      />
      <Route
        path="/personalinfo"
        element={
          <PersonalInfo
            setFundamentalNav={props.setFundamentalNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/collections"
        element={
          <Bookmarks
            setFundamentalNav={props.setFundamentalNav}
            setSwitchNav={props.setSwitchNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/profile_collections"
        element={
          <ProfileBookmarkCollection
            setFundamentalNav={props.setFundamentalNav}
            setSwitchNav={props.setSwitchNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/collection_products"
        element={
          <CollectionProducts
            setFundamentalNav={props.setFundamentalNav}
            setSwitchNav={props.setSwitchNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      {/* Route Added For Sharing Functionality */}
      <Route
        path="/collections/:id"
        element={
          <CollectionShareProducts
            setFundamentalNav={props.setFundamentalNav}
            setSwitchNav={props.setSwitchNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />

      <Route
        path="/profile_collections"
        element={
          <ProfileBookmarkCollection
            setFundamentalNav={props.setFundamentalNav}
            setSwitchNav={props.setSwitchNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/searches"
        element={
          <YourSearches
            setFundamentalNav={props.setFundamentalNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/savedwebsites"
        element={
          <SavedWebsites
            setFundamentalNav={props.setFundamentalNav}
            setSelectSideNav={props.setSelectSideNav}
          />
        }
      />
      <Route
        path="/products/:id"
        element={<ProductDetails setSwitchNav={props.setSwitchNav} />}
      />
      <Route
        path="/collection/product-view"
        element={<ProductView setSwitchNav={props.setSwitchNav} />}
      />
      <Route
        path="/product_display_more"
        element={<ProductDisplayViewmore setSwitchNav={props.setSwitchNav} />}
      />
      <Route
        path="/foryou_display_more"
        element={<ProductForYouViewmore setSwitchNav={props.setSwitchNav} />}
      />
      <Route
        path="/collection_cart"
        element={<CollectionCartDisplay setSwitchNav={props.setSwitchNav} />}
      />
      <Route
        path="/aboutsignup"
        element={<AboutSignupPage setSwitchSignup={props.setSwitchSignup} />}
      />
      <Route
        path="/stylepref"
        element={<StylePrefrence setSwitchSignup={props.setSwitchSignup} />}
      />
      <Route
        path="/welcome"
        element={<SignupWelcome setSwitchSignup={props.setSwitchSignup} />}
      />
      <Route
        path="/result"
        element={<SignupResult setSwitchSignup={props.setSwitchSignup} />}
      />
      <Route
        path="/sustainability"
        element={
          <Sustainability
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser}
          />
        }
      />
      <Route
        path="/fit"
        element={
          <Fit
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser}
          />
        }
      />
      <Route
        path="/suggestions"
        element={<StyleSuggestions setSwitchSignup={props.setSwitchSignup} />}
      />
      <Route
        path="/styleidentity"
        element={
          <StyleIdentification
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser}
          />
        }
      />
      <Route
        path="/aesthetic"
        element={
          <Aesthetic
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser}
          />
        }
      />
      <Route
        path="/sizeselection"
        element={
          <SizeSelection
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser || ""}
          />
        }
      />
      <Route
        path="/websiteselection"
        element={
          <WebsiteSelection
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser || ""}
          />
        }
      />
      <Route
        path="/colorselection"
        element={
          <ColorSelection
            setSwitchSignup={props.setSwitchSignup}
            currentUser={currentUser}
          />
        }
      />
      <Route
        path="/signup"
        element={<SignupPage setSwitchSignup={props.setSwitchSignup} />}
      />

      <Route
        exact
        path="/login"
        element={
          <LoginPage
            setSwitchSignup={props.setSwitchSignup}
            setSwitchNav={props.setSwitchNav}
            setFundamentalNav={props.setFundamentalNav}
            currentUser={currentUser}
          />
        }
      />
      {/* <Route element={<LoginPage />} /> */}
    </Routes>
  );
};

export default WebRoutes;
