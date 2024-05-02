import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import editImg from '../assets/edit-img.svg';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile-pic.svg';
import '../styles/EditProfile.css';
import bioImg from '../assets/bio-img.svg';
import ageImg from '../assets/age-img.svg';
import genderImg from '../assets/gender-img.svg';
import locationImg from '../assets/location-input-img.svg';
import occupationImg from '../assets/occupation-input-img.svg';
import xImg from '../assets/twitter-input-img.svg';
import linkedinImg from '../assets/linkedin-input-img.svg';

function EditProfile() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link>
        <img src={editImg} alt='' onClick={() => setLgShow(true)} />
      </Link>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id='example-modal-sizes-title-lg'>
            Large Modal
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <section className='row justify-content-between'>
            {/* first div */}
            <div className='col-lg-5'>
              <h5>
                Hi, <span className='text-primary'>John Doe</span>
              </h5>
              <h3>Complete Your Profile</h3>
              <img src={profileImg} alt='' className='edit-profile-img' />
              <input
                type='file'
                name=''
                className='rounded w-100 select-img bg-white border-primary'
              />
            </div>

            {/* second div */}
            <div className='col-lg-5 d-lg-flex  align-items-center justify-content-center'>
              <div className='wrapper   '>
                <h5 className='mt-3 basic-h5'>Basic Information</h5>
                {/* form */}
                <form className='edit-form'>
                  {/* text area */}
                  <div className='position-relative'>
                    <textarea
                      name=''
                      className='rounded bio-input utils'
                      placeholder='Bio'
                      cols='30'
                      rows='5'
                    ></textarea>
                    <img
                      src={bioImg}
                      className='position-absolute top-0 start-0 ms-1 mt-1'
                      alt=''
                    />
                  </div>

                  {/* age and gender */}
                  <div className='position-relative  utils'>
                    <input
                      type='number'
                      className='age-input rounded me-1 '
                      placeholder='Age'
                    />
                    <input
                      type='text'
                      className='gender-input rounded'
                      placeholder='Gender'
                    />
                    <img
                      src={ageImg}
                      alt=''
                      className='position-absolute start-0 age-img ms-2'
                    />
                    <img
                      src={genderImg}
                      alt=''
                      className='position-absolute gender-img '
                    />
                  </div>

                  {/* location */}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded  utils location-input'
                      placeholder='Location'
                    />
                    <img
                      src={locationImg}
                      alt=''
                      className='position-absolute  start-0 location-input-img'
                    />
                  </div>

                  {/* occupation */}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded  utils occupation-input location-input'
                      placeholder='Occupation'
                    />
                    <img
                      src={occupationImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                  {/* socials */}
                  <h5 className='mt-3 socials-header'>Socials</h5>
                  {/*twitter*/}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded utils twitter-input location-input'
                      placeholder='X App'
                    />
                    <img
                      src={xImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                   {/*linkedin*/}
                   <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded utils twitter-input location-input'
                      placeholder='Linkedin'
                    />
                    <img
                      src={linkedinImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                  {/* submit */}
                  <button className="btn rounded-pill continue-btn btn-lg text-white utils mt-3 btn-primary">Continue</button>
                </form>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfile;
