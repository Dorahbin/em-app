import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ResetPassword from './auth/ResetPassword';
import Home from './pages/Home.jsx';
import FriendProfile from './pages/FriendProfile.jsx';
import Profile from './pages/Profile.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/ResetPassword' element={<ResetPassword />}></Route>
          <Route path='/FriendProfile' element={<FriendProfile/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


