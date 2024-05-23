import { occasionArray } from "../../helpers/history"
import OccasionList from "./UI/OccasionList"
const OccasionSelector = (props) => {
  return (
    <div className={`max-w-[200px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>SELECT OCCASION</p>
      <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
      <div className='flex sm:pr-0'>
        <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
          {occasionArray.map((fabric) => {
            return <OccasionList fabric={fabric} count={props.count} setCount={props.setCount} arrayOccasion={props.arrayOccasion} setArrayOccasion={props.setArrayOccasion} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default OccasionSelector;
