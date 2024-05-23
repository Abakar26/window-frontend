/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useState } from 'react';
import MySideBar from './MySideBar';
import Header from './Header';

const Fundamental = (props) => {
  const { selectSideNav, currentUser } = props;
  const [selected, setSelected] = useState(selectSideNav);
  const [show, setShow] = useState(false);
  const handleSidebar = () => {
    setShow(!show);
  };
  return (
    <>
      <Header
        handleSidebar={handleSidebar}
        currentUser={currentUser}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="border border-[#EDEDED] w-full" />
      {localStorage.getItem('user')
        && (
          <aside
            className={show
              ? 'absolute bg-[#FFFFFF] w-[274px] pt-11 nav_sidebar h-screen z-30'
              : ' bg-[#FFFFFF] w-[274px] pt-11 nav_sidebar h-screen absolute xlg:hidden'}
          >
            <MySideBar selected={selected} setSelected={setSelected} />
          </aside>
        )}
    </>
  );
};
export default Fundamental;
