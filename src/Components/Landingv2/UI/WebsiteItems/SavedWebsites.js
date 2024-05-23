import { useState } from "react";
import SavedWebsitesList from "./SavedWebsitesList";
const SavedWebsites = (props) => {
  const recentSearch = ['skinny jeans', 'skinny jeans', 'skinny jeans'];

  return (
    <>
      <p className='recent_header mt-2 mb-1'>SAVED</p>
      {recentSearch.map((value) => {
        return <SavedWebsitesList value={value} setSearchBarState={props.setSearchBarState} inputEl={props.inputEl} />
      })}
    </>
  );
}

export default SavedWebsites;
