/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import bookmarkimginner from "../../../../images/svg/bookmarkinnerimg.svg";
import bookmarktick from "../../../../images/svg/bookmarktick.svg";
import { API_URL } from "../../../../Constants/Constants";
import "react-toastify/dist/ReactToastify.css";

const BookmarkInnerModal = (props) => {
  const [style, setStyle] = useState(false);
  const [customCollectionName, setCustomCollectionName] = useState([]);
  const [selectCollectionId, setSelectCollectionId] = useState();
  const [remove, setRemove] = useState(false);
  function userExists(arr, username) {
    return arr.some((el) => el.name === username);
  }

  useEffect(() => {
    if (selectCollectionId) {
      setCustomCollectionName(
        customCollectionName.filter(
          (value) => value.name !== selectCollectionId
        )
      );
      props.setCollectionList((old) =>
        old.filter((value) => value.id !== selectCollectionId)
      );
    }
  }, [selectCollectionId]);

  useEffect(() => {
    if (customCollectionName) {
      if (!customCollectionName.some((value) => value.id === props.item.id)) {
        props.setCollectionList(customCollectionName);
      } else {
        props.setCollectionList((old) => [
          ...old,
          customCollectionName.filter((value) => value.id === props.item.id),
        ]);
      }
    } else {
      props.setCollectionList(
        props.collectionList.slice(
          props.collectionList.indexOf(props.item.id, 1)
        )
      );
    }
    if (props.collection_names.length) {
      if (userExists(props.collection_names, props.item.name)) {
        setStyle(true);
      } else {
        setStyle(false);
      }
    }
  }, [style, remove]);

  useEffect(() => {
    setCustomCollectionName([...props.collection_names]);
    props.setCollectionList([]);
  }, [props.collection_names]);

  const handleDeletion = () => {
    if (!props.display) {
      axios
        .delete(`${API_URL}api/v1/record_collections`, {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
          data: {
            collection_id: props.item.id,
            recordable_id: props.product_id,
            recordable_type: "Product",
            attach_product: true,
          },
        })
        .then((response) => {
          props.updateProduct(response.data);
          toast.success("Product removed from collection successfully");
          setRemove(!remove);
          if (
            location.pathname.includes("/collection") &&
            location.pathname !== "/collection_cart"
          )
            props.setModalProduct(!props.modalProduct);
          setStyle(false);
        })
        .catch(() => {
          toast.error("Something went wrong. Please try again later.");
        });
      setCustomCollectionName(
        customCollectionName.filter((value) => value.name !== props.item.name)
      );
      setSelectCollectionId(props.item.id);
    }
  };

  const handleCollectionSelection = () => {
    if (
      !customCollectionName.some((value) => value.name === props.item.name) &&
      props.display
    ) {
      setCustomCollectionName([
        ...customCollectionName,
        { name: props.item.name, id: props.item.id },
      ]);
      setStyle(!style);
    } else if (props.display) {
      setCustomCollectionName(
        customCollectionName.filter((value) => value.name !== props.item.name)
      );
      setStyle(!style);
    }
  };

  // if (props.collection_names.some((value) => value.name === props.item.name) && props.display) {
  //   console.log('i am getting call');
  //   console.log(props.collection_names[0].name);
  //   console.log(props.item.name);
  //   console.log(props.display);
  //   // return;
  // }

  return (
    <li
      className="list-none"
      key={props.item.id}
      onClick={handleCollectionSelection}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <div className="md:w-full">
          <div
            className={
              customCollectionName.some(
                (value) => value.name === props.item.name
              )
                ? "w-[144px] flex items-center mt-[5px] rounded-[8px] p-[5px] border bg-[#F5E7EC] md:w-full"
                : " w-[144px] flex items-center mt-[5px] p-[5px] md:w-full"
            }
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={bookmarkimginner}
                    alt=""
                    className={
                      customCollectionName.some(
                        (value) => value.name === props.item.name
                      )
                        ? " mr-[8px] w-[20px] md:w-[45px] border-[2px] border-[#9C0E43]"
                        : "mr-[8px] w-[20px] md:w-[45px]"
                    }
                  />
                  <img
                    src={bookmarktick}
                    alt=""
                    className={
                      customCollectionName.some(
                        (value) => value.name === props.item.name
                      )
                        ? "absolute top-[4px] left-[6px] md:w-[30px]"
                        : "hidden"
                    }
                  />
                </div>
                <p className="inner_text_bookmarks_inner md:text-[16px] md:leading-[20px]">
                  {props.item.name.length >= 10
                    ? props.item.name.substring(0, 7) + "..."
                    : props.item.name}
                </p>
              </div>
              <div>
                {customCollectionName.some(
                  (value) => value.name === props.item.name
                ) &&
                  !props.display && (
                    <p
                      className="text-[#EB6D66] font-[700] leading-[12px] md:leading-[20px]
                      text-[10px] md:text-[16px] ml-[8px]"
                      onClick={() => {
                        handleDeletion();
                      }}
                    >
                      Remove
                    </p>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BookmarkInnerModal;
