import './App.css';
import React  from 'react';
import Car from './Css/Car'
import Component1 from './component/Component1';
import ClassComponent from './component/ClassComponent';
import Lenovo from './props/Lenovo';
import Cashcounter from './Hooks/Usestat'
import List from './Hooks/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './bootstrap/BasicExample';
import TextCounter from './component/TextCounter';

function App() {
  return (
    // <></> both are work react fragment is a parent tag
      <>
      {/* <BasicExample/> */}
      {/* <List/>\ */}
  {/* <Cashcounter/> */}
  
      {/* <Lenovo/> */}
        {/* <Car/> */}
      {/* <ClassComponent/>  */}
       {/* <Component1/> */}
      {/* <Component1/> */}


      <TextCounter/>

      </>
  );
}

export default App;
