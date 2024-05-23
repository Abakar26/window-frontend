/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import BookmarksCollection from './BookmarksCollection';
import BookmarksList from './BookmarksList';
import FollowersCollectionCard from './FollowersCollectionCard';
import InputBookmarksModal from './InputBookmarksModal';
import { API_URL } from '../../../Constants/Constants';
import 'react-toastify/dist/ReactToastify.css';
import UserProfileCard from './UserProfileCard';
import SearchBar from './Reusable/SearchBar';
import Spinner from './Reusable/Spinner';
import Message from './Reusable/Message';

const Bookmarks = (props) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [popup, setPopup] = useState(false);
  const [remove, setRemove] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [name, setName] = useState(null);
  const [collections, setCollection] = useState([]);
  const [collectionProduct, setCollectionProduct] = useState([]);
  const [collectionId, setCollectionId] = useState(null);
  const [handleClick, setHandleClick] = useState(false);
  const [select, setSelected] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [otherUsersCollections, setOtherUsersCollections] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [followStats, setFollowStats] = useState({});
  const userId = localStorage.getItem('user');

  // This function fetches user collections from database
  const fetchCollection = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}api/v1/collections`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
      });
      setCollection(data.collections);
      setFollowStats(data.follow_count);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // This function toggles between MyCollections and explore collections
  const handleMyResult = () => {
    setSelected(false);
    setSearchText('');
  };

  const handleExplore = () => {
    setSearchText('');
    setSelected(true);
  };

  // In useEffect we will call our fetchCollection function and also handles authorization

  useEffect(() => {
    props.setSwitchNav(false);
    setToggle(false);
    if (!localStorage.getItem('authorization')) {
      navigate('/login');
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    props.setFundamentalNav(true);
    props.setSelectSideNav(2);
    setHandleClick(false);
    fetchCollection();
  }, [handleClick]);

  // These below functions handles collections crud
  const handleDeletion = () => {
    axios
      .delete(`${API_URL}api/v1/collections/${remove}`, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
      })
      .then(() => {
        toast.success('Collection Deleted Successfully');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setToggle(false);
        setHandleClick(true);
      });
  };

  const updateCollection = (id, visibility) => {
    axios
      .put(`${API_URL}api/v1/collections/${id}`, null, {
        headers: {
          Authorization: localStorage.getItem('authorization'),
        },
        collections: {
          visibility,
        },
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        // fetchCollection();
      });
  };

  const handleAddition = (value) => {
    axios
      .post(
        `${API_URL}api/v1/collections`,
        {
          collections: {
            name: value,
            kind: 'product',
          },
        },
        {
          headers: {
            Authorization: localStorage.getItem('authorization'),
          },
        },
      )
      .then(() => {
        toast.success('Collection Created Successfully');
      })
      .catch((res) => {
        if (res.response) {
          toast.error(res.response.data.message[0]);
        }
      })
      .finally(() => {
        setHandleClick(true);
      });
  };

  // This function handles search events
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  // This use effect will run for fetching users and their collections
  useEffect(async () => {
    if (select) {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}api/v1/users/${userId}/follow`,
          {
            headers: {
              Authorization: localStorage.getItem('authorization'),
            },
          },
        );
        setLoading(false);
        setUsers(data.users);
        setOtherUsersCollections(data.collections);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
  }, [select]);

  if (error) {
    return <Message message={error.message} />;
  }
  return (
    <>
      {!toggle && (
        <div className="flex flex-row w-[calc(100%-290px)] absolute right-0 xlg:w-full xlg:justify-center">
          <div className="flex w-full flex-col pt-4 bg-[#ffffff]">
            <span
              className={`flex justify-center fundamental_header ${!select ? 'mb-[5px]' : 'mb-[15px]'
                }`}
            >
              {`${select ? 'Explore' : 'Collections'}`}
            </span>
            {!select && (
              <p className="text-center mb-[25px] font-bold text-[12px]">
                {!loading
                  && `${followStats && followStats.followers
                    ? followStats.followers.length
                    : 0
                  } Followers - ${followStats && followStats.following
                    ? followStats.following.length
                    : 0
                  } Following`}
              </p>
            )}

            <div className="relative flex justify-center">
              <SearchBar search={searchText} handleChange={handleChange} />
            </div>
            <div className="flex justify-center w-full mb-[72px] overflowable-height">
              {loading ? (
                <Spinner />
              ) : select && otherUsersCollections.length === 0 ? (
                <Message message="No Items Found" />
              ) : (
                <div className="grid gap-9 grid-layout-collections">
                  {select
                    ? otherUsersCollections.length > 0
                    && otherUsersCollections
                      .filter((userCollection) => (
                        userCollection.name
                          .toLowerCase()
                          .includes(searchText.toLocaleLowerCase())
                        && userCollection
                      ))
                      .map((collection, index) => (
                        <FollowersCollectionCard
                          key={index}
                          collection={collection}
                        />
                      ))
                    : collections
                    && collections
                      .filter((userCollection) => (
                        userCollection.name
                          .toLowerCase()
                          .includes(searchText.toLocaleLowerCase())
                        && userCollection
                      ))
                      .map((collection, index) => (
                        <BookmarksList
                          key={index}
                          setSelectedCollection={setSelectedCollection}
                          collection={collection}
                          setToggle={setToggle}
                          setName={setName}
                          setRemove={setRemove}
                          toggle={toggle}
                          handleDeletion={handleDeletion}
                          setCollectionProduct={setCollectionProduct}
                          setCollectionId={setCollectionId}
                          updateCollection={updateCollection}
                        />
                      ))}
                  {!select && (
                    <div
                      className="border border-[#999999] rounded-[18px] bg-[#ffffff] w-[388px] h-[265px]
               flex justify-center items-center bookmarks_modal_button_text text-[#9C0E43]"
                    >
                      <button
                        type="button"
                        className="outline-none"
                        onClick={() => {
                          setPopup(true);
                        }}
                      >
                        New Collection
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="h-screen pt-4 pr-11 w-full max-w-[290px] lg:hidden">
            <div className="h-[40px] max-w-[242px] flex flex-row w-full mb-[90px]">
              <button
                type="button"
                className={
                  !select
                    ? `text-[#9C0E43] h-[40px] w-[131px] border border-[#9C0E43]
              bg-[#F5E7EC] rounded-[30px] product_filter_text_bolder mr-2`
                    : `text-[#9C0E43] h-[40px] w-[131px] border border-[#999999]
               rounded-l-[30px] border-r-0 product_filter_text_bold mr-2`
                }
                onClick={handleMyResult}
              >
                My Collections
              </button>
              <button
                type="button"
                className={
                  select
                    ? `text-[#9C0E43] h-[40px] w-[106px] border border-[#9C0E43]
               bg-[#F5E7EC] rounded-[30px] -ml-5 product_filter_text_bolder`
                    : `text-[#9C0E43] h-[40px] w-[131px] -ml-5 border border-[#999999]
               rounded-r-[30px] border-l-0 product_filter_text_bold`
                }
                onClick={handleExplore}
              >
                Explore
              </button>
            </div>
            <div className="h-[580px] overflow-y-auto w-full pl-4">
              {loading ? (
                <Spinner />
              ) : (
                select
                && users.map((follower, index) => (
                  <UserProfileCard key={index} follower={follower} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
      {popup && (
        <InputBookmarksModal
          setPopup={setPopup}
          handleAddition={handleAddition}
        />
      )}
      {toggle && (
        <BookmarksCollection
          selectedCollection={selectedCollection}
          collection={remove}
          collectionId={collectionId}
          setToggle={setToggle}
          handleDeletion={handleDeletion}
          name={name}
          collection_product={collectionProduct}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Bookmarks;
