/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import cartimg from "../../images/cartimage3.png";
import GridImages from "./UI/GridImages";
import { API_URL } from "../../Constants/Constants";
import Spinner from "./Spinner";
import { preferencesText } from "../../helpers/history";

const CollectionCartDisplay = (props) => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [productCollections, setProductCollections] = useState([]);
  const aestheticKeyword = state.keyword;
  const websitePreference = state?.websitePreference;
  const userId = localStorage.getItem("user");
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("authorization")) {
      navigate("/login");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.setSwitchNav(true);
  });

  // Fetching products based on aesthetic keyword
  useEffect(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}api/v1/users/${userId}/aesthetic_edits`,
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          params: {
            aesthetic: aestheticKeyword,
          },
        }
      );

      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  // This Function Updates Product
  const updateProduct = (product) => {
    const updatedProducts = products.map((obj) => {
      if (obj.id === product.id) {
        return { ...product };
      }
      return obj;
    });
    setModalProduct(product);
    setProducts(updatedProducts);
  };
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
        }
        // setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  // UseEffect will be used for fetching collections
  useEffect(() => {
    fetchProductCollections();
    const timeId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  if (products.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="font-bold text-[28px]">No Items found</p>
      </div>
    );
  }
  return (
    <>
      <div className="w-full flex justify-center bg-[#FAFAFA] horizontal-padding-aesthetics-section">
        <div className="w-full flex justify-between items-center">
          <div
            className="flex flex-col py-[50px] padding_collection_cart sm:py-0
          justify-between md:pt-0 md:pb-0 w-[60%]"
          >
            <span className="cart_header max-w-[325px] md:max-w-[142px] w-full">
              Your{" "}
              {aestheticKeyword === "E-GIRL/SKATER/GRUNGE"
                ? "E-Girl"
                : capitalizeFirstLetter(aestheticKeyword)}{" "}
              Edi
              <span className=" text-gray-400">t</span>
              <span className="text-[#9C0E43]">|</span>
            </span>
            <p className="max-w-[322px] w-full aesthtic_paragraph mt-9 sm:mb-4 sm:hidden">
              {`${preferencesText[aestheticKeyword?.toLowerCase()]?.P1}
              ${capitalizeFirstLetter(
                websitePreference[0] ? websitePreference[0] : "Zara"
              )},
          ${capitalizeFirstLetter(
                websitePreference[1] ? websitePreference[1] : "24s"
              )} and
          ${capitalizeFirstLetter(
                websitePreference[2] ? websitePreference[2] : "Cider"
              )}`}
            </p>
          </div>
          <div className="w-[40%] aesthetic-products-section">
            <img
              src={state?.image ? state.image : cartimg}
              alt="cart"
              className={`object-cover max-h-[319px] h-full ${aestheticKeyword?.toLowerCase() === "normcore" ||
                aestheticKeyword?.toLowerCase() === "academia" ||
                aestheticKeyword?.toLowerCase() === "e-girl/skater/grunge" ||
                aestheticKeyword?.toLowerCase() === "soft girl"
                ? " object-top"
                : " object-center"
                }`}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col mt-[72px] sm:mt-0 collection_cart_padding mb-8">
        <GridImages
          products={products.slice(0, 4)}
          updateProduct={updateProduct}
          productCollections={productCollections}
        />
        <div className="flex justify-center mb-16 sm:m-[25px]">
          <p className="max-w-[528px] collection_cart_text">
            {preferencesText[aestheticKeyword?.toLowerCase()]?.P2}
          </p>
        </div>
        {products?.length > 4 && (
          <>
            <GridImages
              products={products.slice(4, 8)}
              updateProduct={updateProduct}
              productCollections={productCollections}
            />
            <div className="flex justify-center mb-16 sm:m-[25px]">
              <p className="max-w-[528px] collection_cart_text">
                {preferencesText[aestheticKeyword?.toLowerCase()]?.P3}
              </p>
            </div>
          </>
        )}

        <GridImages
          products={products.slice(8, 12)}
          updateProduct={updateProduct}
          productCollections={productCollections}
        />
        <ToastContainer />
      </div>
    </>
  );
};
export default CollectionCartDisplay;
