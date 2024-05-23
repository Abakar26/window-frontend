/* eslint-disable react/jsx-boolean-value */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import cross from "../../images/svg/cross.svg";

export default function NewArrivalModal(props) {
  const { setModal } = props;
  return (
    <div className="absolute z-10 inset-0 opacity-1"
      onMouseEnter={() => { setModal(true); }}
    >
      <div className="flex items-center justify-center h-full w-full p-4 text-center">
        <div
          className="relative bg-white max-w-[486px] w-full h-[178px] rounded-xl px-4 pt-3 pb-4 text-left
                transform transition-all sm:relative sm:w-full
                 notify_modal_shadow top-[-34%] overflow-auto"
        >
          <div>
            {/* <div
              className="flex w-full justify-start cursor-pointer"
              onClick={() => {
                setModal(false);
              }}
            >
              <img src={cross} alt="cross" aria-hidden="true" />
            </div> */}
            <div className="mt-[40px] pl-4 sm:flex sm:flex-col">
              <label className="modal_label">More Features Coming Soon!</label>
              <p className="notify_modal_paragraph mt-2 mb-3 max-w-[368px]">
                Some features are still under construction, you’ll be notified
                when they become available!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
