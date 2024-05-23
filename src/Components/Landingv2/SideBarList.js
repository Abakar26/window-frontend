import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userPreferences } from '../../reducers/preferences';

const SideBarList = (props) => {
  const userPref = useSelector(userPreferences);
  const navigate = useNavigate();
  const handleFocus = () => {
    props.setSidebar(true);
    props.setHoveredSubCategoryData(props.item);
  };
  const handleClick = () => {
    navigate('/products', {
      state: {
        isMainPageSearch: true,
        // , category: [props.item.category],
        selectedWebsites: userPref.websites,
        selectedSize: userPref.sizes,
      },
    });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const hovered = props.item.category === props.hoveredSubCategoryData?.category;

  return (
    <a
      onMouseEnter={handleFocus}
      onClick={handleClick}
      key={props.item.category}
      // href='/collection'
      className={`${hovered && 'bg-[#E8C6D3]'} text-[#9C0E43] hover:bg-[#E8C6D3] hover:font-bold group flex items-center px-2 py-2 text-base font-medium h-[51px] pr-2 pl-[55px] cursor-pointer outline-none`}
    >
      {props.item.category}
    </a>
  );
};
export default SideBarList;
