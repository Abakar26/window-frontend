/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserAvatar from 'react-user-avatar';
import FollowerProfile from './FollowerProfile';
import { API_URL } from '../../../Constants/Constants';
import SearchBar from './Reusable/SearchBar';
import 'react-toastify/dist/ReactToastify.css';
import dummyImage from '../../../images/man.png';
import Spinner from './Reusable/Spinner';
import Message from './Reusable/Message';

const ProfileBookmarkCollection = (props) => {
  // getting useId from localstorage
  const currentUserId = Number.parseInt(localStorage.getItem('user'));
  const navigate = useNavigate();
  const { state } = useLocation();
  const follower = state?.data;
  const followerId = follower?.id;
  const [handleClick, setHandleClick] = useState(false);
  const [select, setSelected] = useState(false);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [followerStats, setFollowerStats] = useState({});
  const [followed, setFollowed] = useState(false);
  const name = `${follower?.first_name} ${follower?.last_name}`;

  // This useEffect will fetch all collections of a user that was clicked
  useEffect(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}api/v1/users/${currentUserId}/follow/${follower.id}`,
        {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
        },
      );
      setCollections(data.collections);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  // This useEffect will fetch followerStats for user
  useEffect(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}api/v1/users/${followerId}/follow_stats`,
        {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
        },
      );

      setFollowerStats(data.follow_count);
      setFollowed(data.follow_count.followers.includes(currentUserId));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [followed]);

  // This useEffect handles authorization and Navigation Logic
  useEffect(() => {
    props.setSwitchNav(false);

    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setFundamentalNav(true);
    props.setSelectSideNav(2);
    setHandleClick(false);
    // fetchCollection();
  }, [handleClick]);

  // this function takes care of searching
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // This function helps in following user
  const follow = async (id) => {
    try {
      if (!followed) {
        const { data } = await axios.post(
          `${API_URL}api/v1/users/${id}/follow`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem('authorization'),
            },
          },
        );
        if (data.success) {
          setFollowed(true);
        } else {
          setError(data.error);
        }
      } else {
        const { data } = await axios.delete(
          `${API_URL}api/v1/users/${currentUserId}/follow/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem('authorization'),
            },
          },
        );
        if (data.success) {
          setFollowed(false);
        } else {
          setError(data.error);
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  if (!localStorage.getItem('authorization')) {
    navigate('/login');
  }
  if (localStorage.getItem('authorization') && follower === undefined) {
    navigate('/collections');
  }
  if (error) {
    return (
      <div className="sm:p-4 flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
        <div className="flex w-full flex-col pt-11 bg-[#ffffff] p-8">
          <div className="flex w-full justify-between items-center">
            <Message message={error.message} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {follower !== undefined && (
        <div className="sm:p-4 flex sm:flex-col flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
          <div className="flex w-full flex-col pt-11 bg-[#ffffff]">
            <div className="flex w-full justify-center">
              <div className="flex w-full justify-between max-w-[812px] items-center">
                {/* <img
                  className="w-[100px] h-[100px] sm:w-[50px] sm:h-[50px] rounded-full"
                  src={follower.image ? follower.image : dummyImage}
                  alt="avtar"
                /> */}
                {follower.image
                  ? (
                    <img
                      className="w-[100px] h-[100px] sm:w-[50px] sm:h-[50px] rounded-full"
                      src={follower.image}
                      alt="avtar"
                    />
                  )
                  : (
                    <UserAvatar
                      className="h-[100px] w-[100px] text-[30px] leading-[100px] sm:h-[50px] sm:w-[50px] 
                      sm:leading-[50px] sm:text-[18px]"
                      name={`${localStorage
                        .getItem('first-name')
                        .toUpperCase()} ${localStorage
                          .getItem('last-name')
                          .toUpperCase()}`}
                      colors={['grey']}
                    />
                  )}

                <div className="relative">
                  <p className="flex justify-center text-center fundamental_header">
                    {name.split(' ')[0]}
                    's Collections
                  </p>
                  {!select && (
                    <div className="absolute w-full">
                      <p className="new_fundamental_paragraph text-center">
                        {`${followerStats && followerStats.followers
                          ? followerStats.followers.length
                          : 0
                          } Followers - ${followerStats && followerStats.following
                            ? followerStats.following.length
                            : 0
                          } Following`}
                      </p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="max-w-[116px] h-[33px] bg-[#9C0E43]
              rounded-[20px] w-full bookmark_button_text"
                  onClick={() => {
                    follow(follower.id);
                  }}
                >
                  {followed ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            </div>

            {/* Search Bar Here */}
            <div className="flex w-full justify-center sm:mt-4">
              <SearchBar search={search} handleChange={handleChange} />
            </div>
            {/* Now Display collections of selected user */}
            <div className="flex justify-center w-full mb-[72px] overflowable-height">
              <div className="grid gap-9 grid-cols-2 md:grid-cols-1">
                {loading ? (
                  <Spinner />
                ) : (
                  collections
                    ?.filter((lst) => lst.name.toLowerCase().includes(search.toLowerCase()))
                    .map((collection, index) => (
                      <FollowerProfile key={index} collection={collection} />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ProfileBookmarkCollection;
