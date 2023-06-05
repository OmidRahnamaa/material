import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
