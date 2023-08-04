
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom';
import EventHandling from './components/EventHandling';
import StateManagment from './components/StateManagment';
import TodoList from './components/TodoList';



function App() {
  return (
    <div>
      <BrowserRouter>

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
      </Routes>
      </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
