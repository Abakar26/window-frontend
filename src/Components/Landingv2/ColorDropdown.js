import ColorList from "./UI/ColorList";

export default function ColorDropdown({ color, onClick }) {
  return (
    <div className='ml-4'>
      {window.innerWidth > 700 ?
        <div className='flex justify-center'>
          {[...Array(3)].map(() => {
            return <ColorList color={color} onClick={onClick} />
          })}
        </div>
        :
        <div className='flex justify-around'>
          {[...Array(2)].map(() => {
            return <ColorList color={color} onClick={onClick} />
          })}
        </div>}
    </div>
  );
}