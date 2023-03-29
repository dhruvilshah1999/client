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
import CreateUser from './Pages/CreateUser';
import AddAppointment from './Pages/AddAppointment';
import NotificationPage from './Pages/NotificationPage';
import DisplayEmployee from './Pages/Admin/DisplayEmployee';
import DisplayUsers from './Pages/Admin/DisplayUsers';

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

          <Route path='/create-users' element={
            <ProtectedRoute>
              <CreateUser/>
            </ProtectedRoute>
          }/>

          <Route path='/appointments' element={
            <ProtectedRoute>
              <AddAppointment/>
            </ProtectedRoute>
          }/>

          <Route path='/notification' element={
            <ProtectedRoute>
              <NotificationPage/>
            </ProtectedRoute>
          }/>

          <Route path='/employees' element={
            <ProtectedRoute>
              <DisplayEmployee/>
            </ProtectedRoute>
          }/>

          <Route path='/users' element={
            <ProtectedRoute>
              <DisplayUsers/>
            </ProtectedRoute>
          }/>

        </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
 