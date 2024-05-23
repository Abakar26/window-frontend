/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from 'react';

const Timeline = (props) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);

  useEffect(() => {
    if (first || second || third || forth) {
      props.setChecked(true);
    } else {
      props.setChecked(false);
    }
    if (props.rating === 1) {
      setFirst(true);
    }
    if (props.rating === 2) {
      setSecond(true);
    }
    if (props.rating === 3) {
      setThird(true);
    }
    if (props.rating === 4) {
      setForth(true);
    }
  }, [first, second, third, forth]);

  const firstClick = () => {
    if (first || second || third || forth) {
      props.onButtonUpdate(1);
    } else {
      props.onButtonPressed(1);
    }
    props.setRating(1);
    setFirst(!first);
    setSecond(false);
    setThird(false);
    setForth(false);
  };
  const secondClick = () => {
    if (first || second || third || forth) {
      props.onButtonUpdate(2);
    } else {
      props.onButtonPressed(2);
    }
    props.setRating(2);
    setFirst(false);
    setSecond(!second);
    setThird(false);
    setForth(false);
  };
  const thirdClick = () => {
    if (first || second || third || forth) {
      props.onButtonUpdate(3);
    } else {
      props.onButtonPressed(3);
    }
    props.setRating(3);
    setFirst(false);
    setSecond(false);
    setThird(!third);
    setForth(false);
  };
  const forthClick = () => {
    if (first || second || third || forth) {
      props.onButtonUpdate(4);
    } else {
      props.onButtonPressed(4);
    }
    props.setRating(4);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setForth(!forth);
  };
  return (
    <ul className="timeline">
      <button
        type="button"
        onClick={() => { firstClick(); }}
      >
        <li className={first
          ? 'w-[18px] h-[18px] ml-2 mt-[3px] mb-[3px] bg-[#9c0e43]'
          : 'w-3 h-3 ml-3 bg-[#F8E6EC]'}
        />
      </button>
      <button
        type="button"
        onClick={() => { secondClick(); }}
      >
        <li className={second
          ? 'w-[18px] h-[18px] mt-[3px] mb-[3px] bg-[#9c0e43]'
          : 'w-3 h-3 bg-[#F8E6EC]'}
        />
      </button>
      <button
        type="button"
        onClick={() => { thirdClick(); }}
      >
        <li className={third
          ? 'w-[18px] h-[18px] mt-[3px] mb-[3px] bg-[#9c0e43]'
          : 'w-3 h-3 bg-[#F8E6EC]'}
        />
      </button>
      <button
        type="button"
        onClick={() => { forthClick(); }}
      >
        <li className={forth
          ? 'w-[18px] h-[18px] mr-1 mt-[3px] mb-[3px] bg-[#9c0e43]'
          : 'w-3 h-3 mr-2 bg-[#F8E6EC]'}
        />
      </button>
    </ul>
  );
};
export default Timeline;
