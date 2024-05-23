import React, { useState } from 'react';

const Tabs = ({ websites }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <div className='flex tabs_div'>
      <ul className='flex flex-row pt-0 pl-0' role='tablist'>
        {
          websites.map((web, index) => (
            <p
              className={`mr-4 ${activeTab === index ? 'font-bold' : ''}`}
              onClick={(e) => handleTabChange(e, index)}
              data-toggle='tab'
              role='tablist'
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

export default Tabs;