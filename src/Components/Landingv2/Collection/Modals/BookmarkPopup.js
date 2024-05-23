/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { API_URL } from "../../../../Constants/Constants";
import BookmarkInnerModal from "./BookmarkInnerModal";

export const BookmarkPopup = (props) => {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("");
  const [collectionNames, setCollectionNames] = useState([]);
  const [collectionList, setCollectionList] = useState([]);

  const fetchProductCollection = () => {
    axios
      .get(`${API_URL}api/v1/record_collections`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
        params: {
          recordable_id: props.product_id,
          recordable_type: "Product",
        },
      })
      .then((response) => {
        if (response.data.length !== 0) {
          setCollectionNames(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductCollection();
  }, [display]);

  const addToCollections = () => {
    setValue("");
    let i = 0;
    let collectionIDs = [];
    while (i !== collectionList.length) {
      if (collectionList[i].length) {
        collectionIDs.push(collectionList[i][0].id);
      }
      i += 1;
    }
    collectionIDs = [...new Set(collectionIDs)];

    if (collectionIDs.length) {
      axios
        .post(
          `${API_URL}api/v1/record_collections`,
          {
            record_collections: {
              collection_ids: collectionIDs,
              recordable_id: props.product_id,
              recordable_type: "Product",
              attach_product: true,
            },
          },
          {
            headers: {
              Authorization: localStorage.getItem("authorization"),
            },
          }
        )
        .then((response) => {
          props.updateProduct(response.data.product);
          toast.success("Product added to collections successfully");
        })
        .catch((response) => {
          props.updateProduct(response.data.product);
          toast.error("Something went wrong. Please try again later.");
        })
        .finally(() => {
          setDisplay(false);
        });
    } else {
      setDisplay(false);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div
        className={`absolute shadow-lg w-[165px] h-[177px] overflow-auto
      remove_scroll pr-[12px] flex flex-col bg-[#ffffff]
      rounded-[8px] pl-[9px] pt-[10px] ${props.mystyle} z-10 md:w-full
      md:h-full md:shadow-none md:pr-0 md:pl-0 md:pt-0 md:relative`}
      >
        <span className="flex justify-end md:hidden">
          <button
            className="right-0"
            onClick={() => {
              props.setBox(false);
            }}
            type="button"
          >
            <IoIosCloseCircleOutline />
          </button>
        </span>
        {!display && (
          <div className="flex items-center justify-between">
            <p
              className="text-[12px] md:text-[24px] md:leading-[30px] font-[500]
              leading-[14px] pl-[5px] text-center window_font items-center"
            >
              Collections
            </p>
            <div onClick={() => setDisplay(true)}>
              <button
                type="button"
                className="text-[#9C0E43] text-[12px] leading-[14px] md:text-[24px] md:leading-[30px]"
              >
                +
              </button>
            </div>
          </div>
        )}
        {display && (
          <div className="pb-[0px] flex items-center justify-between">
            <div>
              <input
                type="text"
                className="w-[90px] md:w-[190px] focus:outline outline-[#C4C4C4] text-[14px]
                  leading-[17px] font-[700] p-[2px] border-2"
                placeholder=""
                value={value}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between pr-[0px] ">
              <button
                className="text-[#9C0E43] text-[12px] md:text-[18px] font-[500] leading-[14px] md:leading-[23px]"
                type="button"
                onClick={addToCollections}
              >
                Save
              </button>
            </div>
          </div>
        )}
        <ul className="p-0">
          {props.productCollections
            ?.filter((collection) =>
              collection.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((item, i) => (
              <BookmarkInnerModal
                key={i}
                item={item}
                i={i}
                display={display}
                setDisplay={setDisplay}
                collection_names={collectionNames}
                setCollectionList={setCollectionList}
                product={props.product}
                updateProduct={props.updateProduct}
                collectionList={collectionList}
                product_id={props.product_id}
                modalProduct={props.modalProduct}
                setModalProduct={props.setModalProduct}
                // setRemove={setRemove}
                // remove={remove}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default BookmarkPopup;
