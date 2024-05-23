import React, { useState, useEffect, useRef } from 'react';
import WebsiteDrop from './UI/WebsiteItems/WebsiteDrop';

const OpenWebsite = (props) => {
  const { websiteRef, arrayWebsites, setArrayWebsites, websitePreference } = props

  return (
    <div className='flex w-full justify-end' style={{ display: props.showWebsites ? 'block' : 'none' }}>
      <div ref={websiteRef}>
        <WebsiteDrop onClick={props.onClick} arrayWebsites={arrayWebsites} websitePreference={websitePreference} setArrayWebsites={setArrayWebsites} count={props.count} setcount={props.setcount} setWebsiteToggle={props.setWebsiteToggle} mstyle={'p-2.5 slector_border mt-2 float-right w-website_drop_down_width'} />
      </div>
    </div>
  );
}

export default OpenWebsite;
