import WebsiteSelectionList from "./WebsiteSelectionList";
const WebsiteList = (props) => {

  return (
    <ul className='w-[118px] sm:w-full sm:py-0 sm:px-4'>
      {props.websites.map((website, i) => (
        <WebsiteSelectionList website={website} search={props.search} count={props.count} setCount={props.setCount} i={i} />
      ))}
    </ul>
  );
};
export default WebsiteList;
