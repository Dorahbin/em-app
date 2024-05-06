import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ResetPassword from './auth/ResetPassword';
import Home from './pages/Home.jsx';
import FriendProfile from './pages/FriendProfile.jsx';
import Profile from './pages/Profile.jsx';
import Error from './pages/Error.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/resetPassword' element={<ResetPassword />}></Route>
          <Route path='/friendProfile' element={<FriendProfile/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


