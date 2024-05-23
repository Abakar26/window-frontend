const TabsShimmer = ({ websites }) => {

  return (
    <div className='flex tabs_div'>
      <ul className='flex flex-row pt-0 pl-0' role='tablist'>
        {
          websites.map((web, index) => (
            <p
              className='mr-4 shimmer_bg_color set_color h-3'
              key={`${web}-${index}`}
            >
              {web}
            </p>
          ))
        }
      </ul>
    </div>
  )
}

export default TabsShimmer;