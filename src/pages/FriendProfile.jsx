import NavSection from '../components/NavSection';
import profileImg from '../assets/yuji-img.svg';
import locationImg from '../assets/location.svg';
import realtorImg from '../assets/realtor.svg';
import linkedinImg from '../assets/linkedin.svg';
import twitterImg from '../assets/twitter.svg';
import '../styles/Home.css';
import likeImg from '../assets/like-img.svg';
import shareImg from '../assets/share-img.svg';
import Comment from '../components/Comment';
import followersImg from '../assets/followers.svg';
import likesImg from '../assets/likes.svg';
import followingImg from '../assets/following.svg';
import { friendProfile } from '../../databases/db';
import '../styles/FriendProfile.css';
import FriendNavBar from '../layouts/FriendNavBar';
const FriendProfile = () => {
  return (
    <>
      {/* friend nav */}
      <FriendNavBar />

      {/* main content */}
      <div className='home-wrapper'>
        <div className='container'>
          <main className=' row home-main gap-2 pt-3'>
            {/* profile col */}
            <section className='col-lg-4 d-none d-lg-block p-2 rounded-2  border profile-section '>
              {/* profile div */}
              <div className='sticky-div-fp '>
                <div className='d-flex align-items-center gap-2'>
                  <img src={profileImg} alt='' className='profile-img' />
                  <div className='d-flex flex-column '>
                    <span className=''>Yuji Itadori</span>
                    <span className=''>0 friends</span>
                  </div>
                </div>
                <hr />

                {/* bio div */}
                <div>
                  <h4>Bio</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Mi nec turpis
                    vulputate sed. Tellus quisque pharetra facilisi nisl nisi
                    consectetur. Sed in nisi convallis vitae tortor rhoncus.
                  </p>
                </div>
                <hr />

                {/* activities */}
                <div>
                  <h4>Activities</h4>
                  <div className='d-flex align-items-center gap-2'>
                    <img src={followersImg} alt='' /> <span>Followers</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <img src={followingImg} alt='' /> <span>Following</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <img src={likesImg} alt='' /> <span>Likes</span>
                  </div>
                </div>
                <hr />

                {/* information */}
                <div>
                  <h4>Info</h4>
                  <div className='d-flex align-items-center gap-2'>
                    <img src={locationImg} alt='' /> <span>Location</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <img src={realtorImg} alt='' /> <span>Realtor</span>
                  </div>
                </div>
                <hr />
                {/* socials */}
                <div>
                  <h4>Socials</h4>
                  <div className='d-flex align-items-center gap-2'>
                    <a href='http://' target='_blank' rel=''>
                      <img src={twitterImg} alt='' />
                    </a>{' '}
                    <span>Twitter</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <a href='http://' target='_blank' rel=''>
                      <img src={linkedinImg} alt='' />
                    </a>{' '}
                    <span>Linkedin</span>
                  </div>
                </div>
              </div>
            </section>

            {/* news-field col */}

            <section className='col-lg'>
              {/* top div */}

              <div className='mb-5'>
                {friendProfile.map((person) => {
                  const { id, name, time, post, profileImg, postImg, follow } =
                    person;
                  return (
                    <div key={id} className='p-2 mb-3 rounded-2 scroll-page'>
                      {/* top div */}
                      <div className='d-flex justify-content-between align-items-center '>
                        {/* img and time */}
                        <div className='d-flex gap-2 align-items-center'>
                          <img src={profileImg} alt='' className='' />
                          <span className='d-flex flex-column justify-content-center '>
                            <h5 className='pt-3'>{name}</h5>
                            <p>{time}</p>
                          </span>
                        </div>

                        {/* btn-div */}
                        <div>
                          <button className='btn btn-white btn-sm rounded-pill border px-4'>
                            {follow}
                          </button>
                        </div>
                      </div>

                      {/* post */}
                      <p>{post}</p>

                      {/* post-img */}
                      <img src={postImg} className='w-100' alt='' />

                      {/* reactions */}
                      <main className='d-flex pt-2 justify-content-between align-items-center'>
                        {/* like and comment */}

                        <div className='d-flex gap-2'>
                          <img src={likeImg} alt='' role='button' />
                          <Comment />
                        </div>

                        {/* share */}
                        <div>
                          <img src={shareImg} alt='' role='button' />
                        </div>
                      </main>
                    </div>
                  );
                })}
              </div>

            </section>
          </main>
        </div>
      </div>
      {/* fixed section */}
      <NavSection />
    </>
  );
};

export default FriendProfile;
