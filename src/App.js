import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import HomePage from './Pages/HomePage';
import HomePage from './Pages/Dashboard';
import LoginIn from './Pages/LoginIn';
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import '../src/App.css'; 
import AddNewEmployee from './Pages/AddNewEmployee';
import { useSelector } from "react-redux";
import Spinner from "./NewComponents/Spinner";
import ProtectedRoute from './NewComponents/ProtectedRoute';
import PublicRoute from './NewComponents/PublicRoute';
import CreateEmployee from './Pages/CreateEmployee';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
      {loading ? (
          <Spinner />
        ) : (
        <Routes>

          {/* Register Page Route with Protection */}
          <Route path='/' element={
            <PublicRoute>
              <Register/>
            </PublicRoute>}/>

          {/* Login Page Route with Protection */}
          <Route path='/login' element={
            <PublicRoute>
              <LoginIn/>
            </PublicRoute>}/>

          {/* Forgot Password Route with Protection */}
          <Route path='/ForgetPassword' element={
            <PublicRoute>
              <ForgetPassword/>
            </PublicRoute>}/>

          {/* Home Page Route with Protection */}
          <Route path='/homepage' element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }/>

          <Route path='/create-employee' element={
            <ProtectedRoute>
              <CreateEmployee/>
            </ProtectedRoute>
          }/>

          <Route path='/employee' element={<AddNewEmployee/>}/>
        </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
 