import { fitArray } from "../../helpers/history"
import FitList from "./UI/FitList";
const FitSelector = (props) => {
  return (
    <div className={`max-w-[150px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>SELECT FIT</p>
      <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
      <div className='flex sm:pr-0'>
        <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
          {fitArray.map((fabric) => {
            return <FitList fit={fabric} count={props.count} setCount={props.setCount} arrayFit={props.arrayFit} setArrayFit={props.setArrayFit} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default FitSelector;
