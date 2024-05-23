import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.png';
import img8 from '../../../images/img8.png';
import img9 from '../../../images/img9.png';
import img6 from '../../../images/img6.png';
import img5 from '../../../images/img5.png';

const data = [img2, img3, img4, img8, img9, img6, img5, img2, img3, img9,];

const Carousel = () => {
  return (
    <>
      <div>
        <p className='popular_heading mb-2'>TRENDING</p>
      </div>
      <div className='bg-white overflow-auto remove_scroll'>
        <ul className='flex p-0 m-0 trending-list'>
          {data.map((data) => {
            return <li className="mr-6">
              <div className="flex flex-col">
                <div className='w-[70px] h-[90px] border-[0.5px] border-[#999999] mb-2 rounded-md'>
                  <img className='' src={data} alt='snaker' />
                </div>
                <p className="text-block">Floral Maxi Dress</p>
              </div>
            </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
