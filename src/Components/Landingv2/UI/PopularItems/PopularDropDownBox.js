import Hat from '../../../../images/hat.png';

const PopularDropDownBox = (props) => {
  const popular = ['uperhat', 'hatter', 'hatss', 'hata', 'hat'];
  return (
    <div className={`${props.marginleft}`}>
      <div className={`bg-white p-0.5 rounded mt-1.5 overflow-auto ${props.value} `}>
        <div>
          <p className={`text-sm ml-5 opacity-100 ${props.ptrend}`}>Popular Results</p>
        </div>
        <div className='p-1 mb-12'>
          <ul className='flex -mt-3'>
            {popular.filter((val) => {
              return val.toLowerCase().includes(props.input.toString().toLowerCase())
            }).map(trend => (
              <button className='mx-2.5 p-0 border-none cursor-pointer bg-none outline-inherit font-inherit'>
                <img className='w-full h-full rounded-md object-contain'
                  src={Hat} alt='hat' />
                <li className={`mb-2.5 mr-2.5 ${props.trendstyle}`}>{trend}</li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PopularDropDownBox;