import React, { useEffect, useState } from "react";
import "../../../Styles/ProductModal.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../Constants/Constants";
import dummyImage from "../../../images/man.png";
import Spinner from "./Reusable/Spinner";
import Message from "./Reusable/Message";
import Profile from "./Reusable/CollectionCard";
import CollectionShareModal from "./CollectionShareModal";
import CollectionShareModal2 from "./CollectionShareModal2";
import ProductDisplayMoreCard from "../ProductDisplayMoreCard";
import { ToastContainer } from "react-toastify";

let array = [];

const CollectionProducts = (props) => {
  const userId = Number.parseInt(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { state } = useLocation();
  const [handleClick, setHandleClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [liked, setLiked] = useState(false);
  const [popup, setPopup] = useState(false);
  const [collection, setCollectionData] = useState({});
  const [shared, setShared] = useState(false);
  const [modalProduct, setModalProduct] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [productCollections, setProductCollections] = useState([]);
  const navigate = useNavigate();

  let { id } = useParams();
  if (id === undefined && state !== null) {
    id = state.data;
  }

  // This useEffect will handle Authorization stuff
  useEffect(() => {
    props.setSwitchNav(false);
    setToggle(false);
    // if (!localStorage.getItem("authorization") && location.href.split('/').at(-1).length != 6) {
    //   navigate("/login");
    // }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.setFundamentalNav(true);
    props.setSelectSideNav(2);
    setHandleClick(false);
  }, [handleClick]);

  useEffect(async () => {
    try {
      setLoading(true);
      let apiUrl = "";
      if (state !== null) {
        apiUrl = `${API_URL}api/v1/collections/${id}`;
      } else {
        apiUrl = `${API_URL}api/v1/collection/${id}`;
      }
      const { data } = await axios.get(apiUrl, {
        headers: { Authorization: localStorage.getItem("authorization") },
      });

      setCollectionData(data);
      setProducts(data.collection_product);
      setLiked(data.liked_by_user);
      setLoading(false);
      if (localStorage.getItem("authorization")) {
        setPopup(false);
      } else {
        setPopup(true);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setIsPrivate(true);
      }
      if (error.response.status === 422) {
        setIsDeleted(true);
      }
      setError(error);
      setLoading(false);
    }
  }, [modalProduct]);

  // This is a helper function which splits date into numeric and decimal parts
  const sperator = (price) => {
    const myprice = price.toString();
    array = myprice.split(".");
    if (typeof array[1] === "undefined") {
      array[1] = "00";
    }
  };

  // This helper function extracts domain name from url
  const returnDomain = (url) => {
    const domain = new URL(url);
    return domain.hostname.split(".com")[0];
  };

  // This function likes User COllection
  const addToFav = async (collectionId) => {
    if (!localStorage.getItem("authorization")) {
      setPopup(true);
      return;
    }
    try {
      if (!liked) {
        const { data } = await axios.put(
          `${API_URL}api/v1/collections/${collectionId}/like`,
          {},
          { headers: { Authorization: localStorage.getItem("authorization") } }
        );
        if (data) {
          setLiked(true);
        }
      } else {
        const { data } = await axios.put(
          `${API_URL}api/v1/collections/${collectionId}/unlike`,
          {},
          { headers: { Authorization: localStorage.getItem("authorization") } }
        );
        if (data) {
          setLiked(false);
        }
      }
    } catch (error) {
      if (error.status === 422) {
        setError("Failed");
        setLiked(false);
      }
    }
  };

  const deleteCollection = async (id) => {
    try {
      const { data } = await axios.delete(
        `${API_URL}/api/v1/collections/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      if (data) {
        navigate("/collections");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  This function responsibles for sharing collections
  const handleShareClick = () => {
    if (shared) {
      setShared((prevValue) => !prevValue);
    } else {
      setPopup((prevValue) => !prevValue);
    }
  };

  // This Function Updates Product
  const updateProduct = (product) => {
    const updatedProducts = products.map((obj) => {
      if (obj.id === product.id) {
        return { ...product };
      }
      return obj;
    });
    setProducts(updatedProducts);
  };

  // Fetch Product Collections

  const fetchProductCollections = () => {
    setLoading(true);
    axios
      .get(`${API_URL}api/v1/collections`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
        params: {
          record_type: "product",
        },
      })
      .then((response) => {
        if (
          response.data &&
          Array.isArray(response.data.collections) &&
          response.data.collections.length > 0
        ) {
          setProductCollections(response.data.collections);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  // UseEffect will be used for fetching collections
  useEffect(() => {
    fetchProductCollections();
  }, []);
  if (!localStorage.getItem("authorization")) {
    navigate("/login");
  }
  if (loading || collection === undefined) {
    return (
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  if (isPrivate) {
    return (
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            <Message message="Collection is Private" />
          </div>
        </div>
      </div>
    );
  }
  if (isDeleted) {
    return (
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            <Message message="Oops, Seems like the collection you are looking for does not exist anymore in the system. Please discuss with your provider. Thanks" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            {/* Displaying Collection Card here */}
            <Profile
              image={
                collection?.user?.image ? collection?.user?.image : dummyImage
              }
              collectionName={collection?.name}
              savedProducts={products?.length}
              collection={collection}
              addToFav={addToFav}
              deleteCollection={deleteCollection}
              handleShareClick={handleShareClick}
              shared={shared}
              setShared={setShared}
              liked={liked}
            />
          </div>
          {/* Displaying Products Here */}
          {products ? (
            products.length === 0 ? (
              <Message message="No Items Found" />
            ) : (
              <div className="flex w-full justify-center mt-4 overflowable-height2">
                <div className="grid collection_cart_colum gap-y-[30px] sm:gap-y-0 gap-x-[32px] mb-[60px] sm:mb-0">
                  {products.map((product) => (
                    <ProductDisplayMoreCard
                      product={product}
                      key={product.id}
                      updateProduct={updateProduct}
                      modalProduct={modalProduct}
                      setModalProduct={setModalProduct}
                      collectionName={collection?.name}
                      productCollections={productCollections}
                    />
                  ))}
                </div>
              </div>
            )
          ) : null}
          {/* Displaying Share Modal */}
          {shared && (
            <CollectionShareModal
              setPopup={setPopup}
              handleShareClick={handleShareClick}
              collection_token={collection.collection_token}
            />
          )}

          {popup && (
            <CollectionShareModal2
              setPopup={setPopup}
              handleShareClick={handleShareClick}
              collection_token={collection.collection_token}
            />
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default CollectionProducts;
