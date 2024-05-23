import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductDisplayMoreCard from "./ProductDisplayMoreCard";
import axios from "axios";
import { API_URL } from "../../Constants/Constants";
import { ToastContainer } from "react-toastify";
import pdvm from "../../images/pdvm.png";
const ProductDisplayViewmore = (props) => {
  const [productCollections, setProductCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [products, setProducts] = useState(state?.products);
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
    <>
      <div className="w-full flex justify-center bg-[#FAFAFA] horizontal-padding-aesthetics-section">
        <div className="w-full flex justify-between items-center">
          <div
            className="flex flex-col py-[50px] pl-[152px] sm:py-0
          justify-between md:pt-0 md:pb-0 w-[86%]"
          >
            <span className="cart_header max-w-[325px] md:max-w-[142px] w-full">
              State Of
              <br />
              Fashio
              <span className=" text-gray-400">n</span>
              <span className="text-[#9C0E43]">|</span>
            </span>
            <p className="max-w-[322px] w-full aesthtic_paragraph mt-9 sm:mb-4 sm:hidden">
              It’s hot, it’s trending. Check out this roundup of this week’s
              popular searches.
            </p>
          </div>
          <div className="w-[23.8889%] aesthetic-products-section">
            <img
              src={pdvm}
              alt="cart"
              className={`object-cover max-h-[319px] h-full`}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-[152px] pt-10 lg:px-[100px] paddding_grid sm:px-4">
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
    </>
  );
};
export default ProductDisplayViewmore;
