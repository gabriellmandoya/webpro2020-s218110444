import "./App.css";
//Pertemuan 20: Basic React
import Header from "./components/Header";
import Hello from "./components/Hello";
import Content from "./components/Content";
//Pertemuan 21: Props
import Card from "./components/Card";
import {person} from "./utils/person";
//Pertemuan 22: State, Lifecycle & Event, and Hooks
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* Pertemuan 20 */}
      {/* <Header />
      <Hello />
      <Content /> */}

      {/* Pertemuan 21, 22 (Props and State) */}
      {/* {person.map((item) => {
        return (
          <Card 
            name={item.name}
            institution={item.institution}
            address={item.address}
            phoneNumber={item.phoneNumber}
          />
        );
      })} */}

      {/* Pertemuan 22 (Lifecycle & Event and Functional Components (Hooks))*/}
      <Counter title = "Counter Component" />
    </>
  );
}

export default App;