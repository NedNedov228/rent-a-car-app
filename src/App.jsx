
// import './App.css'
// import { Routes, Route } from 'react-router-dom/dist/umd/react-router-dom.development'
// import Homepage from './components/Homepage'
// import Header from './components/Header'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
// import { isAuth }  from './api/Service'
// import PersonalCabinet from './components/PersonalCabinet'

// function App() {

// console.log('isAuth', isAuth)
//   return (
//     <>
//     <Header />
//     <main className='main'>
//         <div className='container'>
//           <Routes>
//             <Route path="/" element={isAuth ? <PersonalCabinet/> : <Homepage />} />
//             <Route path="/login" element={ <LoginPage />} />
//             <Route path="/reg" element={<RegisterPage />} />
//           </Routes>
//         </div>
//       </main>
      
//     </>
//   )
// намик пейсяр ебаный}

// export default App


// import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/home'
import React from "react";
import Header from './components/Header/header';
import LoginPage from './components/LoginPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PersonalCabinet from './components/PersonalCabinet';
import Tarifs from './components/Tarifs';


function App() {
  return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/reg' element={<Register />}/>
          <Route path='/cab' element={<PersonalCabinet/>}/>
          <Route path='/tarifs' element={<Tarifs/>}/>
        </Routes>
      </div>
  );
}

export default App;




