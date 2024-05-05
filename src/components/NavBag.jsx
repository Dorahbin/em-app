import notImg from '../assets/notification-img.svg';
import logOutImg from '../assets/logout-img.svg';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
const NavBag = () => {
  return (
    <>
      <section className=' rounded-2 bg-white border p-2'>
        {/* Edit */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <EditProfile />
            <span className='fw-lighter'>Edit Profile</span>
          </div>
          <hr />
        </div>

        {/* Notification */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <Link to='#'>
              <img src={notImg} alt='' />
            </Link>
            <span className='fw-lighter'>Notifications</span>
          </div>
          <hr />
        </div>

        {/* Logout */}
        <div>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start '>
            <Link to='/signIn'>
              <img src={logOutImg} alt='' />
            </Link>
            <span className='fw-lighter'>Log Out</span>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default NavBag;
