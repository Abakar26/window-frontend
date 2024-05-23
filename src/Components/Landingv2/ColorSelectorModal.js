import ColorList from "./UI/ColorList";
import { useSelector } from "react-redux";
import { colorlist } from '../../Constants/Constants';

const ColorSelectorModal = (props) => {
  const colorsNames = useSelector((preferences) => { return (preferences.counter.preferences.colors) });
  const defaultColors = colorlist

  // const colorlist = [{ name: 'Beige', color: 'bg-[#D0BE97]' }, { name: 'Blue', color: 'bg-[#3773A7]' }, { name: 'Brown', color: 'bg-[#673F23]' },
  // { name: 'Ecru', color: 'bg-[#FFF6DF]' }, { name: 'Black', color: 'bg-[#000000]' }, { name: 'Green', color: 'bg-[#628733]' },
  // { name: 'Red', color: 'bg-[#E7352E]' }, { name: 'Orange', color: 'bg-[#EA8A54]' }, { name: 'Yellow', color: 'bg-[#F7DC63]' },
  // { name: 'White', color: 'bg-[#FFFFFF]' }, { name: 'Grey', color: 'bg-[#C4C4C4]' }, { name: 'Metallic', color: 'bg-[#82A6FF]' },
  // { name: 'Teal', color: 'bg-[#A8C4D9]' },];

  return (
    <div className={`w-full bg-[#FFFFFF] pt-4 flex flex-col pb-[23px] bottom-0 max-w-none rounded-t-[18px] rounded-[0px]`}>
      <p className='color_selector font-medium pb-3 pt-1'>SELECT COLORS</p>
      <span className='border border-[#000000] opacity-10  mb-3  w-full'></span>
      <div className='flex flex-wrap'>
        <ul className='flex flex-wrap m-0 p-0 list-none color-list w-full justify-start'>
          {colorsNames.map((color) => {
            return <ColorList color={color} count={props.count} setCount={props.setCount} setColorToggle={props.setColorToggle}
              arrayColor={props.arrayColor} setArrayColor={props.setArrayColor} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default ColorSelectorModal;