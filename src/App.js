import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Table from './Pages/Table/Table';
import Billing from './Pages/Billing/Billing';
import Profile from './Pages/Profile/Profile';
import Notification from './Pages/Notification/Notification';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/table" element={<Table />}/>
          <Route path="/billing" element={<Billing />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/notification" element={<Notification />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
