// import React ,{Component} from 'react'
// import './App.css'
// import Wano from './wano'
// import Dayone from "./Component/Dayone"
// import Daytwo from './Component/Daytwo'
// import Listui from './Component/Listui';


// function App() {

//   return (
//     <>
//       {/* <Wano name="sai"age="33" id="12"/>
//       <Wano name="sai"age="33" />
//       <Wano name="sai"age="33" />
//       <Wano name="sai"age="33" />
//        */}
      
//     </>
    
//   )
  
// }

// class App extends Component{
//   state={
//     count:0
//   };
//   handlebot=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   render(){
//     return(

      <>
      {/* <h1>total count={this.state.count}</h1> */}
      
      {/* <Dayone/> */}
      {/* <Daytwo name={"spartan"} function1={this.handlebot}/>
      <Daytwo name={"spartan"}  function1={this.handlebot}/>
      <Daytwo name={"spartan"} function1={this.handlebot}/>
      <Daytwo name={"spartan"} function1={this.handlebot}/> */}
{/* <Listui/> */}
      </>
//     )
//   }
// }
// export default App

import React from 'react';
// import Classone from './Functioncomponent/Classone';
// import Formone from './Functioncomponent/Formone';
// import Reacthookform from './Functioncomponent/Reacthookform';
// import Todolist from './Functioncomponent/Todolist';
// import Axios from './Functioncomponent/axios';
// import Bootstrap from './common/Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Provider from './common/Provider';
import Countercomponent from './Redux/Countercomponent';
// import Headcomponent from './common/Headcomponent';
// import Countcomponent from './common/Countcomponent';
// import Compprovider from './common/Compprovider';
// import Fetchcomponent from './Customhook/Fetchcomponent';
import { Route,Routes,Link } from 'react-router-dom';
import Pageone from './Router/pageone';
import Pagetwo from './Router/Pagetwo';
import Pagethree from './Router/Pagethree';
import { Provider } from 'react-redux';
import { Store } from './Redux/Reduxcom/Store';

const App = () => {
  return (
  <>
      {/* <Classone/> */}
      {/* <Formone/> */}
      {/* <Reacthookform/> */}
      {/* <Todolist/> */}
{/* <Axios/> */}
{/* <Bootstrap/> */}

 {/* <Provider/> */}
{/* <Compprovider>
<Headcomponent/>
<Countcomponent/>
</Compprovider> */}
{/* <Fetchcomponent/> */}

<div>
      <Link to="one">Pageone</Link>
      <Link to="two">Pagetwo</Link>
      <Link to="three">Pagethree</Link>
</div>





<Routes>
<Route path='one' element={<Pageone/>}/>
<Route path='two' element={<Pagetwo/>}/>
<Route path='three' element={<Pagethree/>}/>
</Routes>

{/* <Provider store={Store}>
<Countercomponent/>
</Provider> */}


</>
  );
}

export default App;
