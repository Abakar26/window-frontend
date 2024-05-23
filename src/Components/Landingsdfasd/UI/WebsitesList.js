const WebsitesList = (props) => {
  return (
    <ul className='-mt-2.5'>
      {props.websites.map((website, i) => (
        <li key={i} className='mr-2.5 mb-2.5'>
          <button data-id={i} onClick={props.onClick} className='bg-none border-none outline-inherit p-0 font-inherit cursor-pointer'>{website}</button>
        </li>
      ))}
    </ul>
  );
}
export default WebsitesList;