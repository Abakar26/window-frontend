/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import cartimg from "../../images/cartimg.png";
import { preferencesText } from "../../helpers/history";

const CollectionCart = ({ keyword, reverse, image, websitePreference }) => {
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <div
      className={`w-full py-[18px] border bg-[#ffffff] border-[#999999]
      rounded-[18px] ${reverse ? "pl-[18px]" : "pl-[60px]"} lg:px-[18px] pr-[${reverse ? "60px" : "18px"
        }] flex justify-between items-center ${reverse ? "flex-row-reverse" : ""
        }`}
    >
      <div
        className={`flex flex-col pt-[36px] pb-[32px] justify-between md:pt-0 md:pb-0 aesthetic_section-height  ${reverse ? "pl-[18px] pr-4" : "pr-[18px]"
          }`}
      >
        <span className="cart_header max-w-[325px] md:max-w-[142px] w-full">
          Your {keyword === 'E-GIRL/SKATER/GRUNGE' ? 'E-Girl' : capitalizeFirstLetter(keyword ? keyword : "")} Edi
          <span className=" text-gray-400">t</span>
          <span className="text-[#9C0E43]">|</span>
        </span>
        <p className="max-w-[322px] w-full aesthtic_paragraph mb-8 mt-4 sm:mb-4 sm:mt-2">
          {`${preferencesText[keyword?.toLowerCase()]?.P1} ${capitalizeFirstLetter(websitePreference[0] ? websitePreference[0] : 'Zara')},
          ${capitalizeFirstLetter(websitePreference[1] ? websitePreference[1] : '24s')} and 
          ${capitalizeFirstLetter(websitePreference[2] ? websitePreference[2] : 'Cider')}`}
        </p>
        <button
          type="button"
          className="border border-[#9C0E43] cursor-pointer rounded-[30px] max-w-[245px] w-full py-[17px]
          md:max-w-[126px] md:py-[7px] cart_button_text"
          onClick={() => {
            navigate("/collection_cart", {
              state: {
                keyword,
                image: preferencesText[keyword?.toLowerCase()]?.image,
                websitePreference: websitePreference,
              },
            });
          }}
        >
          View Collection
        </button>
      </div>

      <div className="w-[40%]">
        <img
          src={preferencesText[keyword?.toLowerCase()]?.image}
          alt="cart"
          className={`object-cover rounded-xl aesthetic_image max-h-[344px] h-full ${keyword?.toLowerCase() === 'normcore'
            || keyword?.toLowerCase() === 'academia' || keyword?.toLowerCase() === 'e-girl/skater/grunge' || keyword?.toLowerCase() === 'soft girl'
            ? ' object-top' : ' object-center'}`}
        />
      </div>
    </div>
  );
};
export default CollectionCart;
