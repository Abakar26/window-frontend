const CollectionList = (props) => {
  return (
    <div>
      <button
        className='flex bg-none border-none cursor-pointer p-0 outline-inherit font-inherit color-inherit'
        type='submit'
        onClick={props.onClick}
      >
        <b>{props.collection}</b>
        <div className='rotate-180 ml-2.5'>^</div>
      </button>
      {props.open ? <div>
        {props.openBool ? props.openList() : null}
      </div> : null}
      <div className="border"></div>
    </div>
  );
}
export default CollectionList;