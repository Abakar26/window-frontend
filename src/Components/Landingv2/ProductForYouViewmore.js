import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cartSearch from "../../images/svg/cartsearch.svg";
import PDM from "../../images/pdm.png";
import ProductDisplayMoreCard from "./ProductDisplayMoreCard";
import axios from "axios";
import { API_URL } from "../../Constants/Constants";
import { ToastContainer } from "react-toastify";

const ProductForYouViewmore = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [products, setProducts] = useState(state?.products);
  const [productCollections, setProductCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("authorization")) {
      navigate("/login");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.setSwitchNav(true);
  }, []);

  // This Function Updates Product
  const updateProduct = (product) => {
    const updatedProducts = products.map((obj) => {
      if (obj.id === product.id) {
        return { ...product };
      }
      return obj;
    });
    // setModalProduct(product);
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

  return (
    <div className="w-full px-[152px] pt-10 lg:px-[100px] paddding_grid sm:px-4">
      <div className="flex flex-col prodcut_display_more_header mb-[60px] sm:mb-9">
        <span className="flex w-full items-end">
          <span>{`Made for ${state?.userName}`}</span>
        </span>
        <span className="flex w-full items-end">
          <span>Inspired by the</span>
          <img alt="" />
          <div className="relative border border-[#999999] rounded-[28px] max-w-[100px] sm:max-w-[41px] w-full h-[31px] sm:h-[16px] flex flex-row bg-white pr-6 pointer-events-none ml-1">
            <img
              className="absolute ml-[2px] left top-[10%] mr-1 sm:w-3 sm:h-3"
              src={cartSearch}
              alt=""
            />
          </div>
        </span>
        <span>
          Pieces you lov
          <span className=" text-gray-400">e</span>
          <span className="text-[#9C0E43]">|</span>
        </span>
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-5 lg:grid-cols-3 gap-y-[30px] gap-x-[32px] grid_mobile2 grid_mobile3 mb-4">
          {products?.map((product, index) => (
            <ProductDisplayMoreCard
              index={index}
              product={product}
              updateProduct={updateProduct}
              key={index}
              productCollections={productCollections}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ProductForYouViewmore;
