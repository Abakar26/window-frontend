import WebsitesList from "./UI/WebsitesList";

export default function WebsiteDropdown({ websites, onClick }) {
  return (
    <div className='ml-4'>
      {window.innerWidth > 700 ?
        <div className='flex justify-center'>
          {[...Array(3)].map(() => {
            return <WebsitesList websites={websites} onClick={onClick} />
          })}
        </div>
        :
        <div className='flex justify-around'>
          {[...Array(2)].map(() => {
            return <WebsitesList websites={websites} onClick={onClick} />
          })}
        </div>}
    </div>
  );
}