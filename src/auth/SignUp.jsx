import loginImg from '../assets/login-img.svg';
import logoImg from '../assets/logo.svg';
import userImg from '../assets/user-name.svg';
import { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import emailImg from '../assets/email-img.svg';
import passWordImg from '../assets/password-img.svg';
import '../styles/SignUp.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup
    .string()
    .required('Username is required')
    .matches(/^[A-Za-z]+$/, 'Username must contain only letters'),

  email: yup.string().email('invalid email').required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
  const [isReveal, setReveal] = useState(false);

  function handleToggle() {
    !isReveal ? setReveal(true) : setReveal(false);
  }

  const [isReveal2, setReveal2] = useState(false);

  function handleToggle2() {
    !isReveal2 ? setReveal2(true) : setReveal2(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = 'Signup | page';
  });
  return (
    <>
      <div className='wrapper'>
        <main className='row align-items-center justify-contents-between'>
          {/* img section */}
          <section className='col-lg-6 d-none d-lg-block d-flex flex-column align-items-center justify-content-center img-section'>
            <div className='text-center login-img-box'>
              <img src={loginImg} alt='' className='w-75 my-5 login-img-box' />
            </div>
          </section>

          {/* form-section */}
          <section className='col-lg-6 d-flex align-items-center justify-content-center form-section'>
            <div className='text-center header-div'>
              {/* header div */}
              <div>
                <img src={logoImg} alt='' />
                <h3 className='fw-bold'>Welcome back to EM</h3>
                <p className='fw-bold'>Sign up for free</p>
              </div>

              {/* form div */}
              <div className='form-div'>
                <form
                  className='d-flex flex-column gap-3'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* email */}
                  <div className='position-relative'>
                    <input
                      type='email'
                      className='rounded-2 w-100 ps-5'
                      placeholder='Email'
                      {...register('email')}
                    />
                    <img
                      src={emailImg}
                      alt=''
                      className='position-absolute start-0 ms-2 email-input-img'
                    />
                    {errors.email && (
                      <span className='text-danger d-flex fw-bold'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* username */}
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='rounded-2 w-100 ps-5'
                      placeholder='Username'
                      {...register('userName')}
                    />

                    <img
                      src={userImg}
                      alt=''
                      className='position-absolute start-0 ms-2 email-input-img'
                    />
                    {errors.userName && (
                      <span className='text-danger d-flex fw-bold'>
                        {errors.userName.message}
                      </span>
                    )}
                  </div>

                  {/* password */}
                  <div className='position-relative'>
                    <input
                      type={isReveal ? 'text' : 'password'}
                      className='rounded-2 w-100 ps-5'
                      placeholder='Password'
                      {...register('password')}
                    />
                    <img
                      src={passWordImg}
                      alt=''
                      className='position-absolute start-0 ms-2 email-input-img'
                    />
                    {/* reveal password */}
                    <p
                      className='position-absolute end-0 bottom-50 me-2 sign-up-eye-img'
                      role='button'
                      onClick={handleToggle}
                    >
                      {isReveal ? <FiEye /> : <FiEyeOff />}
                    </p>
                    {errors.password && (
                      <span className='text-danger d-flex fw-bold'>
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* confirm password */}
                  <div className='position-relative'>
                    <input
                      type={isReveal2 ? 'text' : 'password'}
                      className='rounded-2 w-100 ps-5'
                      placeholder='Confirm Password'
                      {...register('confirmPassword')}
                    />
                    <img
                      src={passWordImg}
                      alt=''
                      className='position-absolute start-0 ms-2 email-input-img'
                    />
                    {/* reveal password */}
                    <p
                      className='position-absolute end-0 me-2 sign-up-eye-img '
                      role='button'
                      onClick={handleToggle2}
                    >
                      {isReveal2 ? <FiEye /> : <FiEyeOff />}
                    </p>
                    {errors.confirmPassword && (
                      <span className='text-danger d-flex fw-bold'>
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

                  {/* button */}

                  <button className='btn btn-lg fw-light btn-primary rounded-pill'>
                    Sign Up
                  </button>

                  {/* have account ? */}
                  <span className='d-flex gap-1 '>
                    <span className='fw-light'> Already have an account?</span>
                    <Link to='signIn' className='text-decoration-none fw-bolder'>
                      Sign in
                    </Link>
                  </span>
                  <p className='fw-light'>
                    By signing up you accept our Privacy Policy, Terms &
                    Licensing Agreement. Protected by reCAPTCHA. Google Privacy
                    Policy & Terms apply.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SignUp;
