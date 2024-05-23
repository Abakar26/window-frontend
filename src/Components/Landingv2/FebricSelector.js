import FabricList from "./UI/FabricList"
const FabricSelector = (props) => {
  const fabriclist = ['Velvet', 'Silk', 'Satin', 'Cotton', 'Chiffon', 'Organza', 'Spandex',
    'Polyester', 'Linen', 'Nylon', 'Viscose', 'Georgette', 'Ponte', 'Smooked,Shirred', 'Rayon', 'Bamboo', 'Knit', 'Crepe', 'Leather']
  return (
    <div className={`${props.origin ? 'h-2/4 overflow-auto': ''} max-w-[200px] w-full bg-[#FFFFFF] rounded-t-none rounded-b-[18px] pt-4 pl-3 pr-3 flex flex-col pb-[23px] slector_border
     sm:bottom-0 sm:max-w-none sm:rounded-t-[18px] rounded-[0px] absolute z-30 h-auto`}>
      {props.origin
        ? <p className='font-medium pb-3 pt-1 sm:hidden text-[0.625rem] font-[500] text-[#000000]'>
            <b>SELECT FABRIC</b>
          </p>
        : <p className='color_selector font-medium pb-3 pt-1 sm:hidden'>
          SELECT FABRIC
          </p>
        }
      <span className='border border-[#000000] opacity-10 mb-3 w-full'></span>
      <div className='flex sm:pr-0'>
        <ul className='flex flex-col m-0 p-0 list-none color-list w-full justify-start'>
          {fabriclist.map((fabric) => {
            return <FabricList fabric={fabric} count={props.count} setCount={props.setCount} setArrayFabric={props.setArrayFabric} arrayFabric={props.arrayFabric} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default FabricSelector;
