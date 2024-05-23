/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import { API_URL } from '../../Constants/Constants';

const TOPS = [
  { display: 'XXS', value: 'XXS', type: 'Tops' },
  { display: 'XS', value: 'XS', type: 'Tops' },
  { display: 'S', value: 'S', type: 'Tops' },
  { display: 'M', value: 'M', type: 'Tops' },
  { display: 'L', value: 'L', type: 'Tops' },
  { display: 'XL', value: 'XL', type: 'Tops' },
  { display: '2X', value: 'XXL', type: 'Tops' },
  { display: '3X', value: 'XXXL', type: 'Tops' },
  { display: '00', value: '00', type: 'Tops' },
  { display: '02', value: '02', type: 'Tops' },
  { display: '04', value: '04', type: 'Tops' },
  { display: '06', value: '06', type: 'Tops' },
  { display: '08', value: '08', type: 'Tops' },
  { display: '10', value: '10', type: 'Tops' },
  { display: '12', value: '12', type: 'Tops' },
  { display: '14', value: '14', type: 'Tops' },
];
const DRESSES = [
  { display: 'XXS', value: 'XXS', type: 'Dresses' },
  { display: 'XS', value: 'XS', type: 'Dresses' },
  { display: 'S', value: 'S', type: 'Dresses' },
  { display: 'M', value: 'M', type: 'Dresses' },
  { display: 'L', value: 'L', type: 'Dresses' },
  { display: 'XL', value: 'XL', type: 'Dresses' },
  { display: '2X', value: 'XXL', type: 'Dresses' },
  { display: '3X', value: 'XXXL', type: 'Dresses' },
  { display: '00', value: '00', type: 'Dresses' },
  { display: '02', value: '02', type: 'Dresses' },
  { display: '04', value: '04', type: 'Dresses' },
  { display: '06', value: '06', type: 'Dresses' },
  { display: '08', value: '08', type: 'Dresses' },
  { display: '10', value: '10', type: 'Dresses' },
  { display: '12', value: '12', type: 'Dresses' },
  { display: '14', value: '14', type: 'Dresses' },
];
const BOTTOMS = [
  { display: 'XXS', value: 'XXS', type: 'Bottoms' },
  { display: 'XS', value: 'XS', type: 'Bottoms' },
  { display: 'S', value: 'S', type: 'Bottoms' },
  { display: 'M', value: 'M', type: 'Bottoms' },
  { display: 'L', value: 'L', type: 'Bottoms' },
  { display: 'XL', value: 'XL', type: 'Bottoms' },
  { display: '2X', value: 'XXL', type: 'Bottoms' },
  { display: '3X', value: 'XXXL', type: 'Bottoms' },
  { display: '00', value: '00', type: 'Bottoms' },
  { display: '02', value: '02', type: 'Bottoms' },
  { display: '04', value: '04', type: 'Bottoms' },
  { display: '06', value: '06', type: 'Bottoms' },
  { display: '08', value: '08', type: 'Bottoms' },
  { display: '10', value: '10', type: 'Bottoms' },
  { display: '12', value: '12', type: 'Bottoms' },
  { display: '14', value: '14', type: 'Bottoms' },
  { display: '25', value: '25', type: 'Bottoms' },
  { display: '26', value: '26', type: 'Bottoms' },
  { display: '28', value: '28', type: 'Bottoms' },
  { display: '30', value: '30', type: 'Bottoms' },
  { display: '32', value: '32', type: 'Bottoms' },
  { display: '34', value: '34', type: 'Bottoms' },
  { display: '36', value: '36', type: 'Bottoms' },
  { display: '38', value: '38', type: 'Bottoms' },
];

export default function SizeCollection(props) {
  const [sizePreferences, setSizePreferences] = useState([]);

  const fetchSizePreferences = () => {
    axios.get(`${API_URL}api/v1/users/${localStorage.getItem('user')}/size_preferences`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        type: 'SizePreference',
      },
    }).then((response) => {
      if (Array.isArray(response.data) && response.data.length > 0) {
        setSizePreferences(response.data);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchSizePreferences();
  }, []);

  return (
    <div>
      <div className="max-w-[445px] w-full h-[262px] md:w-[329px] md:h-[389px]
      border border-[#C4C4C4] px-[18px] pt-3 rounded-lg overflow-auto mb-1"
      >
        <p className="size_component_detail mb-2">TOPS</p>
        <div className="flex">
          <ul className="m-0 p-0 list-none">
            {TOPS.map((item) => (
              <ItemList
                item={item}
                count={props.topCount}
                setCount={props.setTopCount}
                currentUser={props.currentUser}
                sizePreferences={sizePreferences}
              />
            ))}
          </ul>
        </div>
        <p className="size_component_detail mb-2">BOTTOMS</p>
        <div className="flex">
          <ul className="m-0 p-0 list-none">
            {BOTTOMS.map((item) => (
              <ItemList
                item={item}
                count={props.bottomCount}
                setCount={props.setBottomCount}
                currentUser={props.currentUser}
                sizePreferences={sizePreferences}
              />
            ))}
          </ul>
        </div>
        <p className="size_component_detail mb-2">DRESSES</p>
        <div className="flex">
          <ul className="m-0 p-0 list-none">
            {DRESSES.map((item) => (
              <ItemList
                item={item}
                count={props.dressCount}
                setCount={props.setDressCount}
                currentUser={props.currentUser}
                sizePreferences={sizePreferences}
              />
            ))}
          </ul>
        </div>
      </div>
      <p className="signup_box_text mb-14 text-[#808080]">*select at least one size per category</p>
    </div>
  );
}
