// ------------------------------------------------------------------
//    Pertemuan 20: Basic React
// import Header from "./components/Header";
// import Hello from "./components/Hello";
// import Content from "./components/Content";
// import "./App.css";
//    Pertemuan 21: Props
// import Card from "./components/Card";
// import {person} from "./utils/person";
// import "./App.css";
//    Pertemuan 22: State, Lifecycle & Event, and Hooks
// import Counter from "./components/Counter";
// import "./App.css";

// function App() {
//   return (
//     <>
//       {/* Pertemuan 20 */}
//       {/* <Header />
//       <Hello />
//       <Content /> */}


//       {/* Pertemuan 21, 22 (Props and State) */}
//       {/* {person.map((item) => {
//         return (
//           <Card 
//             name={item.name}
//             institution={item.institution}
//             address={item.address}
//             phoneNumber={item.phoneNumber}
//           />
//         );
//       })} */}


//       {/* Pertemuan 22 (Lifecycle & Event and Functional Components (Hooks))*/}
//       {/* <Counter title = "Counter Component" /> */}
//     </>
//   );
// }

// export default App;



// ------------------------------------------------------------------



// PERTEMUAN 24

// //Class Component
// import React, { Component } from "react";
// import Card2 from "./components/Card2";
// import "./App.css";
// import axios from "axios";

// class App extends Component {
//   state = {
//     users: [],
//   };

//   componentDidMount() {
//     // Using Fetch
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     //   .then((response) => response.json())
//     //   .then((json) => this.setState({ users: json}));

//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => this.setState({ users: response.data}));
//     }

//   render() {
//     return (
//       <>
//         {this.state.users.map((item) => {
//           return (
//             <Card2
//               name={item.name}
//               username={item.username} 
//               email={item.email}
//               phone={item.phone}
//             />
//           );
//         })}
//       </>
//     );
//   }
// }

// export default App;

// P24 (Cont.)........................................................


// //Function Component
// import React, { useEffect, useState } from "react";
// import Card2 from "./components/Card2";
// import "./App.css";
// import axios from "axios";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setUsers(response.data));
//   }, []);

//   return(
//     <>
//       {users.map((item) => {
//         return (
//           <Card2
//             name={item.name}
//             username={item.username}
//             email={item.email}
//             phone={item.phone}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default App;



// ------------------------------------------------------------------



//  PERTEMUAN 25

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Home, Login, Register } from "./pages";
import Button from "./components/Button";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/" component={()=> <Button title="Home"/>}>Home</Link>
            </li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
