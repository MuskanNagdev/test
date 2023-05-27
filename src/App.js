// // import './App.css';
// import Button from './Components/Button';
// import MyButton from './Components/ClassBased';
// import Class1 from './Components/w3Class';
// import FetchData from './FetchData';
// import Greet from './Greet';
// import { UseReducer } from './UseReducer';
// import UseReducerClass from './UserReducerClass';
// import ConditionalRenderClass from './ConditionalRenderClass';

import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
// import { Navbar } from './Router/Navbar';
// import About from './Router/About';
// import Home from './Router/Home';
// import Users from './Router/Users';
// import ComponentDidMount from './Components/ComponentDidMount';
// import Forms from './C/Forms';
import Forms from './Components/Forms';
// import Showdata from './CRUD/Showdata'
import Showdata from './Components/Showdata'
import { useEffect, useState } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const addDataToArr = (obj) => {
    setArray(prevArray => [...prevArray, obj]);
  }

  return (
    // <>
    //   {/* <ComponentDidMount initial={1} min={1} max={10}/> */}

    // </>
    // <>
    // <Navbar/>
    //   <Routes>
    //     <Route path="home" element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path='users' element={<Users/>}>
    //       <Route path=':value' element={<h1>User details</h1>}></Route>
    //       <Route index element={<h2>Select any student from above</h2>}/>
    //       {/* <Route path='2' element={<h1>User 2</h1>}/> */}
    //     </Route>
    //     <Route path='*' element={<h1>Page not found 404</h1>}/>
    //   </Routes>
    // </>
    <>
    <Router>
    <Routes>
      <Route index path='/' element={<Forms arr={addDataToArr}/>} />
      <Route path='showpage' element={<Showdata arr={array}/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;