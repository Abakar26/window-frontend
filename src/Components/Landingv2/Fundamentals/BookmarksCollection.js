/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import "../../../Styles/ProductModal.css";
import axios from "axios";
import BookmarksModal from "./BookmarksModal";
import { API_URL } from "../../../Constants/Constants";
import ProductDisplayMoreCard from "../ProductDisplayMoreCard";
import Message from "./Reusable/Message";
import Spinner from "./Reusable/Spinner";
const BookmarksCollection = (props) => {
  const [popup, setPopup] = useState(false);
  const [myCollection, setMyCollection] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [productCollections, setProductCollections] = useState([]);
  let loadPage = 1;
  let array = [];
  const fetchCollection = () => {
    // setLoading(true);
    axios
      .get(`${API_URL}api/v1/record_collections?page=${loadPage}`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
        params: {
          collection_id: props.collectionId,
          recordable_type: "Product",
        },
      })
      .then((response) => {
        const mydata = response.data;
        setMyCollection((old) => [...old, ...mydata]);
        // setLoading(false);
      })
      .catch((error) => {
        // setLoading(false);
        // setError(error);
      });
    loadPage += 1;
  };
  useEffect(() => {
    if (loadPage === 1) {
      fetchCollection();
    }
    const onScroll = (e) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
      ) {
        fetchCollection();
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [loadPage]);
  useEffect(() => {
    setTimeout(() => setShow(false), 10000);
  }, []);
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
  const sperator = (price) => {
    const myprice = price.toString();
    array = myprice.split(".");
    if (typeof array[1] === "undefined") {
      array[1] = "00";
    }
  };

  if (loading || myCollection === undefined) {
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
  if (error)
    return (
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            <Message message={error.message} />
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex justify-end w-full">
      <div className="bg-white p-11 flex w-[calc(100%-290px)] justify-center flex-col xlg:w-full">
        <div className="flex flex-row w-full justify-between items-center">
          <button
            type="button"
            className="collection_delete flex justify-start text-center whitespace-nowrap"
            onClick={() => {
              props.setToggle(false);
            }}
          >
            Back
          </button>
          <div className="relative w-[50%] mx-auto">
            <p
              className={`fundamental_header text-center break-words${
                props.selectedCollection.name === "default" ? "w-full" : ""
              }`}
            >
              {props.name}
            </p>
          </div>

          {props.selectedCollection.name !== "default" && (
            <button
              type="button"
              className="collection_delete flex justify-end text-center"
              onClick={() => {
                setPopup(true);
              }}
            >
              Delete Collection
            </button>
          )}
        </div>

        <div className="flex w-full justify-center">
          {myCollection && myCollection.length === 0 ? (
            show ? (
              <Spinner />
            ) : (
              <Message message="No Items Found" />
            )
          ) : (
            <div className="flex w-full justify-center p-8 mt-4">
              <div className="grid collection_cart_colum gap-y-[30px] sm:gap-y-0 gap-x-[32px] mb-[60px] sm:mb-0">
                {myCollection.map((product) => (
                  <ProductDisplayMoreCard
                    product={product}
                    key={product.id}
                    productCollections={productCollections}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {popup && (
        <BookmarksModal
          setPopup={setPopup}
          handleDeletion={props.handleDeletion}
        />
      )}
    </div>
  );
};
export default BookmarksCollection;
