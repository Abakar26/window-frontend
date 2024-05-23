import LengthList from "./UI/LengthList"
const LengthSelector = (props) => {
  const bottoms = ['Maxi', 'Midi/Midaxi', 'Mini', 'Capri', 'Ankle']
  const tops = ['Sleeveless', 'Short Sleeves', 'Midi Sleeves', 'Long Sleeves', 'Cap Sleeves', 'Tank Sleeves']

  return (
    <div className={`${props.origin ? 'h-2/4 overflow-auto': 'flex flex-col'} max-w-[200px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3  pb-[23px] slector_border
    sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      <div className={`${props.origin ? 'overflow-auto h-[100%] flex flex-col' : ''} `}>
        {props.origin
          ? <p className='font-medium pb-3 pt-1 sm:hidden text-[0.625rem] font-[500] text-[#000000]' >
              <b>SELECT BOTTOMS</b>
            </p>
          : <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>
              SELECT BOTTOMS
            </p>
        }
        <hr className='border border-[#000000] opacity-10 mb-3 w-full h-[2px]'></hr>
        <div className='flex sm:pr-0'>
          <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
            {bottoms.map((length) => {
              return <LengthList length={length} count={props.count} setCount={props.setCount} setArrayLength={props.setArrayLength} arrayLength={props.arrayLength} />
            })}
            <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
            {props.origin
              ? <p className='font-medium pb-3 pt-1 sm:hidden text-[0.625rem] font-[500] text-[#000000] text-start' >
                  <b>SELECT TOPS</b>
                </p>
              : <p className='color_selector font-medium pb-3 pt-1 sm:hidden text-start'>
                  SELECT TOPS
                </p>
  }            <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
            {tops.map((length) => {
              return <LengthList length={length} count={props.count} setCount={props.setCount} setArrayLength={props.setArrayLength} arrayLength={props.arrayLength} />
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default LengthSelector;
