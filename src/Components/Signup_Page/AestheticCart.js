/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from './Timeline';
import AestheticCarasuoal from './AestheticCarasuoal';
import { API_URL } from '../../Constants/Constants';

const aestheticMapping = {
  NORMCORE: 'Normcore',
  ACADEMIA: 'Academia',
  'SOFT GIRL': 'Soft Girl',
  BADDIE: 'Baddie',
  'ART COLLECTOR': 'Art Collector',
  'COTTAGE CORE': 'Cottage Core',
  'E-GIRL/SKATER/GRUNGE': 'Grunge',
  WFH: 'WFH Dress',
};

const AestheticCart = (props) => {
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(props.val.rating);

  const onButtonPressed = (value) => {
    axios.post(`${API_URL}/api/v1/users/${props.currentUser}/aesthetic_preferences`, {
      preferences: {
        title: props.val.title,
        description: props.val.description,
        rating: value,
        user_id: props.currentUser,
        type: 'AestheticPreference',
      },
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    });
  };
  const onButtonUpdate = (value) => {
    axios.put(`${API_URL}/api/v1/users/${props.currentUser}/aesthetic_preferences`, null, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        title: props.val.title,
        description: props.val.description,
        rating: value,
        user_id: props.currentUser,
        type: 'AestheticPreference',
      },
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    console.log(props.val.rating);
  }, []);

  useEffect(() => {
    if (checked) {
      props.setCount(props.count + 1);
    } else {
      props.setCount(props.count - 1);
    }
  }, [checked]);
  return (
    <div className="flex flex-col max-w-[250px] w-full">
      <div className="mb-[12px] flex items-center">
        <AestheticCarasuoal iter={props.iter} />
      </div>
      <div className="aesthetic_paragraph mb-[15px] window_font">
        <p>
          <span className="font-bold ">{aestheticMapping[props.val.title]}</span>
          {props.val.description}
        </p>
      </div>
      <Timeline
        setChecked={setChecked}
        setRating={setRating}
        rating={rating}
        onButtonPressed={onButtonPressed}
        onButtonUpdate={onButtonUpdate}
      />
      <div className="mt-[7px] aesthetic_timeline_paragraph flex justify-between">
        <p>Never</p>
        <p>Very Likely</p>
      </div>
    </div>

  );
};
export default AestheticCart;
