import { useSelector } from "react-redux";
import SizeList from "./UI/SizeList";

// import cross from '../../images/svg/cross.svg'
const SizeSelector = (props) => {
  // const sizeList = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  const sizeList = useSelector((preferences) => {return (preferences.counter.preferences.sizes)});

  return (
    <div className={`max-w-[161px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>SELECT SIZE</p>
      {/* <div className='hidden sm:block p-4'>
        <div className='flex flex-row'>
          <img src={cross} alt='' className='mr-5' />
          <label className='nav_input font-bold text-[#9C0E43]'>Color</label>
        </div>
      </div> */}
      <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
      <div className='flex sm:pr-0'>
        <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
          {sizeList.map((size) => {
            return <SizeList size={size} count={props.count} setCount={props.setCount} setFilter={props.setFilter} setArraySize={props.setArraySize} arraySize={props.arraySize} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default SizeSelector;