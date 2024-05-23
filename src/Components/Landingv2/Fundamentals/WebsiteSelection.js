import WebsiteCollection from "./WebsiteCollection";
import { useSelector } from "react-redux";
const WebsiteSelection = (props) => {
  const websites_names = [{ name: '24s' }, { name: 'attirethestudio' }, { name: 'bershka' }, { name: 'bodenusa' }, { name: 'boohoo' },
  { name: 'brandymelville' }, { name: 'chicandcurvy' }, { name: 'ciaolucia' }, { name: 'cuyana' }, { name: 'everlane' },
  { name: 'express' }, { name: 'farfetch' }, { name: 'forloveandlemons' }, { name: 'freepeople' }, { name: 'hm' }, { name: 'levi' },
  { name: 'loft' }, { name: 'madewell' }, { name: 'massimodutti' }, { name: 'mytheresa' }, { name: 'net-a-porter' }, { name: 'newlook' },
  { name: 'pangaia' }, { name: 'philosophyofficial' }, { name: 'sezane' }, { name: 'storets' }, { name: 'stories' }, { name: 'superdown' },
  { name: 'thelinedot' }, { name: 'theraggedpriest' }, { name: 'uniqlo' }, { name: 'whitehouseblackmarket' }, { name: 'yearofours' }];
  const websitessNames = useSelector((preferences) => { return (preferences.counter.preferences.websites) });

  return (<>
    {< WebsiteCollection websites={websitessNames} count={props.count} setCount={props.setCount} setOpenBool={props.setOpenBool} mstyle={props.mstyle}
      arrayWebsite={props.arrayWebsite} setArrayWebsite={props.setArrayWebsite} />}
  </>
  );
}
export default WebsiteSelection;