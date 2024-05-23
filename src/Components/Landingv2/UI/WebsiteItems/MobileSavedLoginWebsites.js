import Nike from '../../../../images/nike.png';
import Adidas from '../../../../images/adidas.png';
import EBrand from '../../../../images/ebrand.png';

const MobileSavedLoginWebsites = () => {
  const savedWebsites = ['athleisure', 'formals', 'clubby', 'PJs', 'essentials'];
  return (
    <div className='mt-5 mb-5'>
      <p className='text-xs font-normal'>YOUR SAVED WEBSITES </p>
      <div className='flex m-auto justify-evenly text-sm'>
        {savedWebsites.map(value => (
          <div>
            <div className='m-auto flex justify-evenly'>
              <div className='flex mt-3'>
                <img className='h-10 w-10 rounded-full border relative' src={EBrand} alt='ebrand' />
                <img className='h-10 w-10 rounded-full border relative -ml-7' src={Adidas} alt='adidas' />
                <img className='h-10 w-10 rounded-full border relative -ml-7' src={Nike} alt='nike' />
              </div>
            </div>
            <div className='mt-3 flex justify-center'>{value}</div>
          </div>
        ))}
      </div>
      <span className='border-gray-200 border mt-6 flex w-72 ml-8'></span>
    </div>
  )
}

export default MobileSavedLoginWebsites;