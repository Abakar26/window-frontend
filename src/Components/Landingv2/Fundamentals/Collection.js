import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CollectionV2 from "../Collection/Collection";
import Filter from "./Filter";

const Collection = (props) => {
  const [arrayColor, setArrayColor] = useState([]);
  const [arraySize, setArraySize] = useState([]);
  const [arrayCategory, setArrayCategory] = useState([]);
  const [arrayWebsite, setArrayWebsite] = useState([]);
  const [arrayFabric, setArrayFabric] = useState([]);
  const [arrayOccasion, setArrayOccasion] = useState([]);
  const [arrayFit, setArrayFit] = useState([]);
  const [arrayLength, setArrayLength] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const location = useLocation();
  const [subCategory, setSubCategory] = useState([]);
  const [exploreWebsites, setExploreWebsites] = useState([]);
  const [select, setSelected] = useState(false);
  const [filter, setFilter] = useState("");
  const [isMainPageSearch] = useState(
    location?.state?.isMainPageSearch
      ? location?.state?.isMainPageSearch
      : false
  );
  const navigate = useNavigate();
  const { headerInput, setHeaderInput, setSwitchNav } = props;

  useEffect(() => {
    navigate(".", {
      replace: true,
      state: {
        min,
        max,
        selectedColors: arrayColor,
        searchText: headerInput,
        selectedOccasion: arrayOccasion,
        selectedFit: arrayFit,
        selectedLength: arrayLength,
        selectedFabric: arrayFabric,
        selectedWebsites: arrayWebsite,
        category: arrayCategory,
        selectedSize: arraySize,
        isMainPageSearch: isMainPageSearch,
      },
    });
  }, [
    min,
    max,
    arrayColor,
    arrayOccasion,
    arrayFit,
    arrayLength,
    arrayFabric,
    arrayWebsite,
    arrayCategory,
    arraySize,
    headerInput,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (!localStorage.getItem("authorization")) {
      navigate("/login");
    }
    if (location.state) {
      setSubCategory(location.state.category ? location.state.category : []);
      setArrayCategory(location.state.category ? location.state.category : []);
      setArrayColor(
        location.state.selectedColors ? location.state.selectedColors : []
      );
      setMin(location.state.min ? location.state.min : "");
      setMax(location.state.max ? location.state.max : "");
      setHeaderInput(location.state.searchText && location.state.searchText);
      setArrayOccasion(
        location.state.selectedOccasion ? location.state.selectedOccasion : []
      );
      setArrayFit(location.state.selectedFit ? location.state.selectedFit : []);
      setArrayLength(
        location.state.selectedLength ? location.state.selectedLength : []
      );
      setArrayFabric(
        location.state.selectedFabric ? location.state.selectedFabric : []
      );
      setArrayWebsite(
        location.state.selectedWebsites ? location.state.selectedWebsites : []
      );
      setExploreWebsites(
        location.state.selectedWebsites ? location.state.selectedWebsites : []
      );
      setArraySize(
        location.state.selectedSize ? location.state.selectedSize : []
      );
    }
    setSwitchNav(true);
  }, []);

  useEffect(() => {
    if (!select) {
      setExploreWebsites(arrayWebsite);
    }
  }, [arrayWebsite]);

  const handleMyResult = () => {
    setArrayWebsite(exploreWebsites);
    setSelected(false);
  };

  const handleExplore = () => {
    setArrayWebsite([]);
    setSelected(true);
  };

  return (
    <div className="relative">
      <Filter
        select={select}
        setSelected={setSelected}
        handleExplore={handleExplore}
        handleMyResult={handleMyResult}
        subCategory={subCategory}
        arrayColor={arrayColor}
        arrayCategory={arrayCategory}
        arraySize={arraySize}
        setArrayCategory={setArrayCategory}
        setArrayColor={setArrayColor}
        setArraySize={setArraySize}
        arrayWebsite={arrayWebsite}
        min={min}
        setMin={setMin}
        setMax={setMax}
        max={max}
        setArrayWebsite={setArrayWebsite}
        setArrayFabric={setArrayFabric}
        arrayFabric={arrayFabric}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        setArrayOccasion={setArrayOccasion}
        arrayOccasion={arrayOccasion}
        arrayFit={arrayFit}
        setArrayFit={setArrayFit}
        setFilter={setFilter}
      />
      <CollectionV2
        navigate={navigate}
        isMainPageSearch={isMainPageSearch}
        filters={{
          searchText: headerInput,
          websites: arrayWebsite,
          minPrice: min,
          maxPrice: max,
          colors: arrayColor,
          lengths: arrayLength,
          fabrics: arrayFabric,
          categories: arrayCategory,
          sizes: arraySize,
          occasions: arrayOccasion,
          fits: arrayFit,
        }}
      />
    </div>
  );
};

Collection.propTypes = {
  headerInput: PropTypes.string.isRequired,
  setHeaderInput: PropTypes.func.isRequired,
  setSwitchNav: PropTypes.func.isRequired,
};

export default Collection;
