import React, { useState } from 'react'
import savedimgrad from '../../../images/svg/websavedrandom.svg';
import savedwebimg from '../../../images/svg/savedwebimg.svg';
import adidas from '../../../images/svg/websavedadidad.svg';
const profile = [
  { name: 'nike.com', image: savedwebimg },
  { name: 'randomwebsite.com', image: savedimgrad },
  { name: 'adidas.com', image: adidas },
  { name: 'asics.com', image: savedimgrad },
  { name: 'gymshark.com', image: savedwebimg },
  { name: 'lululemon.com', image: adidas },
]

const SavedWebsiteListDown = (props) => {

  const [show, setSHow] = useState(true);
  const [enable, setEnable] = useState(false);
  const [buttonvisible, setButtonVisibile] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const checkenable = () => {
    setEnable(!enable);
  }
  const checkConfirm = () => {
    setConfirm(!confirm);
  }
  const buttonvisiblity = () => {
    setButtonVisibile(true);
  }
  const buttonUnvisiblity = () => {
    setButtonVisibile(false);
  }
  const [list, setList] = useState(profile);
  const [value, setValue] = useState('');
  const addToList = () => {
    let tempArr = list;
    setEnable(!enable);
    if (value.length > 0) {
      tempArr.push({ name: value, image: adidas });
      setList(tempArr);
      setValue('');
    }
  };
  return (
    <div className={show ? '' : 'hidden'}>
      <div className={!enable ? 'saved_web_conatiner rounded-[8px] border  border-[#999999] w-[250px] max-h-[295px] overflow-auto remove_scroll mb-[24px] relative bg-[#ffffff]'
        : 'saved_web_conatiner rounded-[8px] border border-[#999999] w-[284px] h-[353px] mb-[-17px] ml-[-17px] mt-[-27px] overflow-auto z-10 remove_scroll relative bg-[#ffffff]'}    >
        <div className='flex justify-between  mb-[10px] '>
          <p className='saved_web_items_txt'>{props.value.items}</p>
          <button className={!enable ? 'saved_web_edit_txt' : 'hidden'} onClick={checkenable}>Edit</button>
          {enable && <button className='saved_web_edit_txt  ' onClick={addToList}>Done</button>}
        </div>
        <div className={enable ? 'pb-[8px] flex items-center ' : 'hidden'}>
          <img className='' src={savedimgrad} alt='' />
          <div className='ml-[8px]'>
            <input type='text' className=' w-[155px] focus:outline outline-[#C4C4C4] text-[14px] leading-[17px] font-[700] p-[2px]'
              onFocus={buttonvisiblity} onBlur={buttonUnvisiblity} placeholder='Add website'
              value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        </div>
        <ul>  {list.length > 0 && list.map((item, i) => <li key={i} >
          <div className='flex  items-center mb-[8px] '>
            <img src={item.image} alt='' className='mr-[10px] ' />
            <p className=' saved_web_img_txt'>{item.name}</p>
          </div>
        </li>)}
        </ul>
        <div className='flex sticky bottom-[10px] w-[268px] ml-[-11px] '>
          <button
            className={!confirm && enable && !buttonvisible ? 'saved_web_del_button ' : ' hidden'}
            onClick={checkConfirm}   >Delete Collection</button>
        </div>
        {confirm &&
          < div className='flex sticky bottom-[10px] w-[268px] ml-[-11px] '>
            <button
              className={enable && !buttonvisible ? 'saved_web_cancel_button border border-[#808080] mr-[8px]' : ' hidden'}
              onClick={checkenable}  >Cancel</button>
            <button
              className={enable && !buttonvisible ? 'saved_web_confirm_button mr-[8px] ' : ' hidden'}
              onClick={() => setSHow(!show)}>Confirm Delete</button>
          </div>}
      </div>

    </div >
  )
}
export default SavedWebsiteListDown;