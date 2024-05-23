import bookmarkimg2 from '../../../images/wdummy.jpeg';
const PopularProduct = (props) => {
  return (
    <div className='bg-white shadow-md dropdown-inner p-4 rounded-lg overflow-auto remove_scroll w-full'>
      <div>
        <p className='popular_heading mb-2'>POPULAR RESULTS</p>
      </div>
      <ul className='flex p-0 m-0 trending-list'>
        {props.products.map((product) => {
          return <li className="mr-6">
            { }
            <div className="flex flex-col">
              {product.images[0] === 'undefined' || typeof product.images[0] === 'undefined' ?
                <img className='w-[70px] h-[90px] rounded-lg mb-[10px] object-contain' src={bookmarkimg2} alt='' />
                :
                <img className='w-[70px] h-[90px] rounded-lg mb-[10px] object-contain' src={product.images[0]} alt='' />

              }
              <p className='popular_results_text w-[10ch] mb-[2px] whitespace-nowrap overflow-hidden text-ellipsis'>{product.title}</p>
            </div>
          </li>
        })}
      </ul>
    </div>
  );
}
export default PopularProduct;