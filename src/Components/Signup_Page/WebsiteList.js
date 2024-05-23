/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import WebsiteSelectionList from './WebsiteSelctionList';

const WebsiteList = (props) => (
  <ul className="w-full">
    {props.websites.map((website, i) => (
      <WebsiteSelectionList
        website={website}
        search={props.search}
        count={props.count}
        setCount={props.setCount}
        i={i + (props.i * 7)}
        currentUser={props.currentUser}
      />
    ))}
  </ul>
);
export default WebsiteList;
