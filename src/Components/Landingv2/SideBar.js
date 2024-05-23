import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import menu from '../../images/svg/menu.svg'
import SideBar2 from './SideBar2'
import SideBarList from './SideBarList'
import '../../Styles/Appv2.css';
import { useSelector } from "react-redux";


// const navigation = [{ category: 'Co-ords', subCategory: ['Bikini Bottoms', 'Bikini Tops', 'Blazers', 'Blouses', 'Bodysuits', 'Bralets', 'Camis', 'Cardigans', 'Hoodies', 'Jackets', 'Pajamas', 'Sweatpants', 'Sweatshirts', 'Tank Tops', 'Tracksuits'] },
// { category: 'Coats & Jackets', subCategory: ['Capes', 'Cardigans', 'Coats', 'Jackets', 'Ponchos', 'Ski Suits', 'Vests'] },
// { category: 'Swimwear & Beachwear', subCategory: ['Bikinis', 'Blouses', 'Cover Ups', 'Crop Tops', 'Pants', 'Shirts', 'Shorts', 'Skirts', 'Swim Briefs', 'Swimsuits', 'Two-piece'] },
// { category: 'Bottoms', subCategory: ['Pants & Leggings', 'Chinos', 'Leggings', 'Pants', 'Suit Pants', 'Sweatpants', 'Tracksuits', 'Shorts', 'Skirts', 'Trousers'] },
// { category: 'Loungewear', subCategory: ['Lounge', 'Activewear', 'Outerwear', 'Hoodies', 'Leggings', 'Overalls', 'Pajamas', 'Sweatpants', 'Sweatshirts', 'Tracksuits', 'T-Shirts'] },
// { category: 'Dresses', subCategory: ['Bridesmaids Dresses', 'Casual Dresses', 'Going Out Dresses', 'Occasion Dresses', 'Other Dresses', 'Summer Dresses', 'Work Dresses', 'Formal', 'Sets', 'Suiting', 'Ceremonial'] },
// { category: 'Hoodies & Sweatshirts', subCategory: ['Fleeces', 'Hoodies', 'Sweatshirts'] },
// { category: 'Tops', subCategory: ['Blouses', 'Bodysuits', 'Bralets', 'Camis', 'Corset Tops', 'Crop Tops', 'Shirts', 'Sweaters', 'Tank Tops', 'T-Shirts', 'Tunics'] },
// { category: 'Jumpsuits & Rompers', subCategory: ['Boiler Suits', 'Jumpsuits', 'Overalls', 'Rompers', 'Unitards'] },
// { category: 'Lingerie & Sleepwear', subCategory: ['Intimates', 'Bras', 'Briefs', 'Corsets', 'Bralets', 'Night gowns', 'Pajamas', 'Shapewear', 'Slips', 'Teddies', 'Thongs', 'Tights', 'Bodysuits', 'Camis'] },
// { category: 'Tracksuits', subCategory: ['Hoodies', 'Sweatpants'] },
// { category: 'Accessories', subCategory: ['Aprons', 'Backpacks', 'Bandanas', 'Hats', 'Polos', 'Scarves', 'Socks', 'Belts'] },
// { category: 'Jeans', subCategory: ['Jeggings'] },
// { category: 'Suits & Tailoring', subCategory: ['Blazers', 'Suit Jackets', 'Suit Pants', 'Suit vests'] },
// ]


export default function SideBar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [hoveredSubCategoryData, setHoveredSubCategoryData] = useState([])
  const navigationData = useSelector((preferences) => { return (preferences.counter.preferences.categories) });
  const [dynamicCategories, setDynamicCategories] = useState([]);
  
  useEffect(() => {
    if (navigationData && dynamicCategories.length === 0) {
      for (var i = 0; i < navigationData.length; i++) {
        const key = Object.keys(navigationData[i])[0];
        let value = navigationData[i][key]
        setDynamicCategories(current => [...current, {'category': key, 'subCategory': value}])
      }
    }  
  }, [navigationData])



  useEffect(() => {    
  
    return () => {
    }
  }, [])
  
  

  const handleclosing = () => {
    setSidebarOpen(false);
  }
  useEffect(() => {
    if (props.sidebarOpen) {
      setSidebarOpen(true);
      props.setSidebarOpen(false)
    }
  })
  return (
    <>
      <div className="h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden max-w-[574px] w-full" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="" />
            </Transition.Child>
            <div className="fixed inset-0 left-0 flex z-40 max-w-[574px] w-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className={sidebar ? "relative flex-1 max-w-[287px] flex flex-col w-full bg-[#F5E7EC] focus:outline-none" : "relative flex-1 flex flex-col max-w-[287px] w-full bg-[#F5E7EC] focus:outline-none"}>
                  <div className="flex-1 h-0 pt-[52px] pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center pr-4 pl-[55px] mb-[2rem] cursor-pointer"
                      onClick={handleclosing}>
                      <img src={menu} className="menu-icon" alt='' width={25} height={25} />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <ul onMouseLeave={() => { setSidebar(false) }}>
                        {dynamicCategories?.map((item, i) => (
                          <li key={i}>
                            <SideBarList item={item} setSidebar={setSidebar} sidebar={sidebar} hoveredSubCategoryData={hoveredSubCategoryData} setHoveredSubCategoryData={setHoveredSubCategoryData} />
                          </li>
                        ))}
                        {sidebar && <SideBar2 setSidebar={setSidebar} hoveredSubCategoryData={hoveredSubCategoryData} setHoveredSubCategoryData={setHoveredSubCategoryData} />}
                      </ul>
                    </nav>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  )
}
