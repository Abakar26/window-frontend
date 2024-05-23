import CategoryList from "./UI/categoryList";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// import cross from '../../images/svg/cross.svg'
const CategorySelector = (props) => {
  const categoryData = useSelector((preferences) => { return (preferences.counter.preferences.categories) });
  const [dynamicCategories, setDynamicCategories] = useState([]);

  useEffect(() => {
    if (categoryData && dynamicCategories.length === 0) {
      for (var i = 0; i < categoryData.length; i++) {
        const key = Object.keys(categoryData[i])[0];
        setDynamicCategories(current => [...current, key])
      }
    }
  }, [categoryData])
  
  // const categorylist = ['Co-ords', 'Coats & Jackets', 'Dresses', 'Hoodies & Sweatshirts', 'Jeans', 'Jumpsuits & Rompers', 'Lingerie & Sleepwear',
  //   'Loungewear', 'Bottoms', 'Suits & Tailoring', 'Sweaters & Cardigans', 'Swimwear & Beachwear', 'Tops', 'Tracksuits']
  return (
    <div className={`max-w-[200px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>SELECT CATEGORY</p>
      {/* <div className='hidden sm:block p-4'>
        <div className='flex flex-row'>
          <img src={cross} alt='' className='mr-5' />
          <label className='nav_input font-bold text-[#9C0E43]'>Color</label>
        </div>
      </div> */}
      <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
      <div className='flex sm:pr-0'>
        <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
          {dynamicCategories.map((category) => {
            return <CategoryList category={category} count={props.count} setCount={props.setCount} setFilter={props.setFilter} arrayCategory={props.arrayCategory} setArrayCategory={props.setArrayCategory} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default CategorySelector;