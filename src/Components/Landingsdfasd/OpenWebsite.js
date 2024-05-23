import MobileWebsiteDrop from './UI/WebsiteItems/MobileWebsiteDrop';
import WebsiteDrop from './UI/WebsiteItems/WebsiteDrop';

const OpenWebsite = (props) => {
  return (
    <div>
      {window.innerWidth > 700 ?
        <ColorDrop onClick={props.onClick} />
        :
        <MobileColorDrop onClick={props.onClick} />
      }
    </div>
  );
}

export default OpenWebsite;