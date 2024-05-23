import React from 'react';
import Menu from '../../images/svg/menu.svg';

const Nav = () => {
  return (
    <div className='text-4xl font-bold p-10 font-sans m-auto'>
      {window.innerWidth > 700 ?
        <div>
          <a className='text-black' href='/'>window</a>
          <div className='float-right mr-3.5'>
            <span className='border rounded-full w-10 h-10 bg-gray-500 flex'></span>
          </div>
        </div>
        :
        <div className='flex items-center text-5xl font-bold font-serif m-auto'>
          <img className='-ml-6 mt-3.5' src={Menu} alt='menu' />
          <a className='text-black ml-3' href='/'>window</a>
        </div>
      }
    </div>
  );
}

export default Nav;