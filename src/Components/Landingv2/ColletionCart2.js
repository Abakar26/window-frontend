import { useNavigate } from 'react-router-dom';
import cartimg from '../../images/cartimg2.png'
const CollectionCart2 = () => {
  const navigate = useNavigate();
  return (
    <div className='max-w-[93.75%] md:max-w-[358px] w-full border bg-[#ffffff] border-[#999999] rounded-[18px] pr-[60px] md:pr-3 flex justify-between'>
      <div className='max-w-[600px] max-h-[380px] w-full h-full md:max-w-[171px] md:max-h-[228px]'>
        <img className=' rounded-l-[18px]' src={cartimg} alt='cart' />
      </div>
      <div className='flex flex-col pt-[76px] pb-[32px] justify-between md:pt-[18px] md:pb-[18px]'>
        <span className='cart_header max-w-[325px] md:max-w-[142px] w-full'>The Normcore Edi<span className=' text-gray-400'>t</span><span className='text-[#9C0E43]'>|</span></span>
        <button className='border border-[#9C0E43] cursor-pointer rounded-[30px] max-w-[245px] w-full py-[17px] md:max-w-[126px] md:py-[12px] cart_button_text'
          onClick={() => { navigate('/collection_cart') }}>
          View Collection
        </button>
      </div>
    </div>
  );
}
export default CollectionCart2;