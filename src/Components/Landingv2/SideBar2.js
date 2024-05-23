import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userPreferences } from '../../reducers/preferences';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SideBar2(props) {
  const userPref = useSelector(userPreferences);
  const navigate = useNavigate();
  const currentHoveredSubCats = props.hoveredSubCategoryData.subCategory;
  const currentHoveredCat = props.hoveredSubCategoryData.category;

  const handleLeaving = () => {
    props.setSidebar(false);
  };

  useEffect(() => () => {
    props.setHoveredSubCategoryData([]);
  }, []);

  const handleClick = (currentHoveredSubCat) => {
    navigate('/products',
      {
        state:
        {
          isMainPageSearch: true,
          searchText: currentHoveredSubCat === 'Wedding Guest' ? 'Wedding' : currentHoveredSubCat,
          // category: [currentHoveredCat],
          selectedWebsites: userPref.websites,
          selectedSize: userPref.sizes,
        },
      });
  };

  return (
    <div className="h-full flex duration-700 bg-[#ffffff]">
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 flex z-40 left-[288px]">
          <div className="relative flex-1 flex flex-col max-w-[287px] w-full bg-[#ffffff] h-full focus:outline-none shadow-[5px_0px_10px_0px_#0000000D]" onMouseLeave={handleLeaving}>
            <div className="flex-1 h-0 pt-[57px] pb-4 overflow-y-auto">
              <nav aria-label="Sidebar" className="mt-5 pt-[2rem]">
                {currentHoveredSubCats?.map((item) => (
                  <a
                    key={item}
                    // href='/products'
                    onClick={() => handleClick(item)}
                    className={classNames(
                      'text-[#9C0E43] hover:bg-[#E8C6D3] hover:font-bold',
                      'cursor-pointer group flex items-center px-2 py-2 text-base font-medium h-[51px] pr-2 pl-[64px] outline-none',
                    )}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
