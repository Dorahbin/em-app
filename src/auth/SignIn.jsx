import loginImg from '../assets/login-img.svg';
import logoImg from '../assets/logo.svg';
import { useState } from 'react';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import emailImg from '../assets/email-img.svg';
import passWordImg from '../assets/password-img.svg';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('invalid email').required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one letter, one number, and one special character'
    ),
});

const SignIn = () => {
  const [isReveal, setReveal] = useState(false);

  function handleToggle() {
    !isReveal ? setReveal(true) : setReveal(false);
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
    document.title = 'Login | page';
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
                <h3 className='fw-bold'>Welcome to EM</h3>
                <p className='fw-bold'>Sign in to your account</p>
              </div>

              {/* form div */}
              <div className='form-div'>
                <form
                  className='d-flex flex-column gap-3 '
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                      className='email-input-img position-absolute'
                    />
                    {errors.email && (
                      <span className='text-danger d-flex fw-bold'>
                        {errors.email.message}
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
                    {/* password img */}
                    <img
                      src={passWordImg}
                      alt=''
                      className='position-absolute start-0 ms-2 email-input-img'
                    />

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
                  {/* checkbox */}
                  <div className='d-flex justify-content-between '>
                    {['checkbox'].map((type) => (
                      <div key={`default-${type}`} className='mb-2'>
                        <Form.Check // prettier-ignore
                          type={type}
                          id={`default-${type}`}
                          label={'Keep me signed in'}
                          className='fs-6'
                        />
                      </div>
                    ))}
                    <Link className='text-dark' to='/ResetPassword'>
                      Forgot Password?
                    </Link>
                  </div>

                  {/* btn */}
                    <button className='btn btn-lg w-100 fw-light btn-primary rounded-pill'>
                      Sign In
                    </button>
                  {/* have an acc ? */}
                  <span className='d-flex gap-1 '>
                    <span className='fw-light'> Dont have an account yet?</span>
                    <Link
                      to='/SignUp'
                      className='text-decoration-none fw-bolder'
                    >
                      Sign Up
                    </Link>
                  </span>

                  <p className='fw-light'>
                    By signing in you accept our Privacy Policy, Terms &
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

export default SignIn;
