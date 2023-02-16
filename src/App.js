import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginIn from './Pages/LoginIn';
import Register from './Pages/Register';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>Register
          <Route path='/login' element={<LoginIn/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 