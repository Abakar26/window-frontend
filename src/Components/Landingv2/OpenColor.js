import MobileColorDrop from './UI/ColorItems/MobileColorDrop';
import ColorDrop from './UI/ColorItems/ColorDrop';

const OpenColor = (props) => {
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

export default OpenColor;