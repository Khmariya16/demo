
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom';
import EventHandling from './components/EventHandling';
import StateManagment from './components/StateManagment';
import TodoList from './components/TodoList';
import ChatApp from './components/ChatApp';
import ProductList from './components/ProductList';
import ProductList1 from './components/ProductList1';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { AnimatePresence } from 'framer-motion';
import { UserProvider } from './UserContext';
import Profile from './components/Profile';



function App() {
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
      <UserProvider>
      <AnimatePresence>

      {/* <Link to="/home">Home</Link> */}
      {/* <Link to="/signup">Signup</Link> */}
     {/*  { <Link to="/login">Login</Link> } */}

      <Navbar />



      <Routes>
        <Route  element={ <Home /> } path='/' />
        <Route  element={ <Home /> } path='home'/>
        <Route  element={ <Login /> } path='login'/>
        <Route  element={ <Signup /> } path='signup'/>
        <Route  element={ <EventHandling /> } path='event'/>
        <Route  element={ <StateManagment /> } path='state'/>
        <Route  element={ <TodoList /> } path='todo'/>
        <Route  element={ <ChatApp /> } path='app'/>
        <Route  element={ <ProductList /> } path='list'/>
        <Route  element={ <ProductList1 /> } path='list1'/>
        <Route  element={ <ManageUser /> } path='user'/>
        <Route element={<UpdateUser />} path="updateuser/:id" />
        <Route element={<Profile />} path="profile" />
      </Routes>
      </AnimatePresence>
      </UserProvider >
      </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
