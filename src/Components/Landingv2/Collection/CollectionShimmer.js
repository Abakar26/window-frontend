/* eslint-disable react/prop-types */
import React from 'react';
// import { WEBSITES } from './Constants';

const WINDOW_FACTS = [
  `Short and sweet. THe Irwin is a mini dress with quarter length,
  puff sleeves and a back cutout detail. It features a fitted waist with an adjustable back..`,
  `The T-shirt is one of the most popular items of clothing in the world,
  and around two billion of them are sold every single year.`,
  `Historically, purple clothes were only worn by magistrates,
  emperors and other aristocracy in Rome, Italy.`,
  `While lots of things are increasing in price, clothing is actually decreasing.
  Since 1992, the price of clothes has gone down by 8.5%.`,
  `Bras have been through different styles over the years,
  but you can now purchase a bra that can also be used as a gas mask.`,
  `Levi’s jeans are one of the most popular brands of jeans.
  Although you might pay a hefty price for a pair now, the first pair sold for $6 worth of gold dust back in 1853.`,
  `Up until the beginning of the 19th century, models were not used to showcase clothes.
  Fashion companies would use dolls instead.`,
  `An unlikely person to be associated with the fashion world,
  Napoleon invented the buttons for sleeves after his soldiers kept wiping their
   noses on their button-free clothes. Ew!`,
  `Queen Victoria was the first person to wear a white wedding dress.
  Prior to this, white had been used as a color of mourning.`,
  `The most common materials for manufacturing clothing are linen,
   cotton and polyester.`,
];

const getRandomWindowFact = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return [randomNumber, WINDOW_FACTS[randomNumber]];
};

const WINDOW_FACT = getRandomWindowFact();

const CollectionShimmer = ({ products }) => {
  // const [websites, setWebsites] = useState(WEBSITES);

  // const openWebsites = () => {
  //   return (
  //     <ul className='p-0'>
  //       {
  //         websites.map((web, index) => (
  //           <div key={`${web}-${index}`} className='shimmer_bg_color filters_dropdown h-3'>{web}</div>
  //         ))
  //       }
  //     </ul>
  //   );
  // }
  const FactModal = () => (
    <div className="flex justify-center fixed inset-0 z-50 modal_margin">
      <div className="relative h-full">
        <div className="relative modal_dim bg-white">
          <div className="p-6 px-10 space-y-3">
            <p className="fact_header">
              {`Window Fact #${WINDOW_FACT[0] + 1}`}
            </p>
            <p className="fact_paragraph">
              {WINDOW_FACT[1].length >= 140 ? `${WINDOW_FACT[1].substring(0, 140)}...` : WINDOW_FACT[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {FactModal()}
      <div className="animate-pulse" id="root">
        {/* <div className='filter_sort'>
          <div>
            <div className='filter_text shimmer_bg_color xs:h-2.5 md:w-0 xs:w-4 float-left my-2'></div>
            <div className='filter_text shimmer_bg_color h-2.5 xs:w-12 md:w-0 float-right my-2 ml-1'></div>
          </div>
          <div>
            <div className='filter_text shimmer_bg_color h-2.5 w-12 float-left my-2'></div>
            <div className='filter_text shimmer_bg_color h-2.5 md:w-24 xs:w-16 float-right my-2 ml-4'></div>
          </div>
        </div> */}
        {/* <hr className='hr_line' /> */}
        <div className="relative min-h-screen px-[98px] sm:px-4">
          {/* <div className={`sidebar absolute inset-y-0
          left-0 transform -translate-x-full md:relative md:translate-x-0`}>
            <div>
              <div className='filter_btn_div'>
                <div className='sidebar_filter_btn_dropdown'>
                  <div className='shimmer_bg_color filter_btn_text w-20 h-5'></div>
                  <div className='shimmer_bg_color filter_btn_text w-5 h-5'></div>
                </div>
                <div>
                  {openWebsites()}
                </div>
              </div>
              <hr className='line_margin' />
              <div className='filter_btn_div'>
                <div className='sidebar_filter_btn_dropdown'>
                  <div className='shimmer_bg_color filter_btn_text w-20 h-5'></div>
                  <div className='shimmer_bg_color filter_btn_text w-5 h-5'></div>
                </div>
              </div>
              <hr className='line_margin' />
              <div className='filter_btn_div'>
                <div className='sidebar_filter_btn_dropdown'>
                  <div className='shimmer_bg_color filter_btn_text w-20 h-5'></div>
                  <div className='shimmer_bg_color filter_btn_text w-5 h-5'></div>
                </div>
              </div>
              <hr className='line_margin' />
              <div className='filter_btn_div'>
                <div className='sidebar_filter_btn_dropdown'>
                  <div className='shimmer_bg_color filter_btn_text w-20 h-5'></div>
                  <div className='shimmer_bg_color filter_btn_text w-5 h-5'></div>
                </div>
              </div>
              <hr className='line_margin' />
            </div>
          </div> */}
          <div className="flex-1 mt-[90px]">
            <div className="grid auto-cols-auto gap-y-[64px] gap-x-[36px] grid_auto_fill mb-20">
              {([...Array(20 + products?.length)]).map(() => (
                <div className="flex justify-center items-center relative w-full flex-col max-w-[220px]">
                  <div className="w-[220px]  h-[300px] rounded-[16px] bg-[#EDEDED]" />
                  <div className="flex justify-between flex-row mt-2.5 w-full">
                    <div className="w-[89px] h-[13px] bg-[#EDEDED]" />
                    <div className="w-[61px] h-[13px] bg-[#EDEDED]" />
                  </div>
                  <div className="flex justify-start w-full mt-2">
                    <div className="w-[163px] h-[13px] bg-[#EDEDED]" />
                  </div>
                  <div className="flex justify-between flex-row w-full mt-2">
                    <div className="w-[41px] h-[15px] bg-[#EDEDED]" />
                    <div className="w-[75px] h-[9px] bg-[#EDEDED]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionShimmer;
