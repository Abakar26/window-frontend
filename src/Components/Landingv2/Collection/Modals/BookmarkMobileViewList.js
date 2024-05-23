/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import bookmarkimginner from '../../../../images/svg/bookmarkinnerimg.svg';
import bookmarktickbig from '../../../../images/svg/bookmarktickbig.svg';

const BookMarkMobileView = (props) => {
  // const [enable, setEnable] = useState(false);
  const [select, setSelected] = useState(false);
  // const checking = () => {
  //   console.log(props.list.length)
  //   console.log(props.i)
  // }
  return (
    <div
      className={select
        ? 'flex justify-between items-center cursor-pointer w-full bg-[#F8E6EC] rounded-lg border'
        : 'flex justify-between items-center cursor-pointer w-full'}
    >
      <div
        className={!props.display
          ? '' : ''}
        onClick={props.setDisplayText}
      >
        <div
          className={select
            ? ' w-[320px] flex items-center mt-[5px] rounded-[8px] p-[5px] '
            : 'w-[320px]  flex items-center mt-[5px] p-[5px] '}
          onClick={() => { setSelected(true); }}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={bookmarkimginner}
                  alt=""
                  className={props.reff
                    && props.list.length === props.i + 1
                    ? ' mr-[8px] w-[35px] border-[2px] border-[#9C0E43]'
                    : 'mr-[8px] w-[35px]'}
                />
                <img
                  src={bookmarktickbig}
                  alt=""
                  className={props.reff
                    && props.list.length === props.i + 1
                    ? 'absolute top-[7px] left-[6px] '
                    : 'hidden'}
                />
              </div>
              <p className="inner_text_bookmarks">{props.item}</p>
            </div>
            <div>
              {props.reff
                && props.list.length === props.i + 1
                && (
                  <p
                    className="text-[#EB6D66] text-[16px] leading-[20px] font-[700] ml-[8px]"
                    onClick={props.removeToList}
                  >
                    Remove
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkMobileView;
