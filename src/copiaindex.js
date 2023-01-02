<<<<<<< HEAD
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Dario Echazu",
    image: "https://robohash.org/canario",
  },
  {
    id: 2,
    name: "Daniela Fabbroni",
    image: "https://robohash.org/bunny",
  },
  {
    id: 3,
    name: "Ignacio Echazu",
    image: "https://robohash.org/roblox",
  },
];

function Counter (){

  const [counter, setCounter] = useState(10)
  return (
    <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => {setCounter (counter+2)}}>
      Sumar
    </button>

    <button onClick = {() => {
      setCounter (counter-2)
    }}>
      Restar
    </button>

    <button onClick = {() => {
      setCounter(10)
    }}>
      Reiniciar
    </button>

  </div>
  

  )
}

root.render(
  <>
  <Counter/>

    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
=======
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Dario Echazu",
    image: "https://robohash.org/canario",
  },
  {
    id: 2,
    name: "Daniela Fabbroni",
    image: "https://robohash.org/bunny",
  },
  {
    id: 3,
    name: "Ignacio Echazu",
    image: "https://robohash.org/roblox",
  },
];

function Counter (){

  const [counter, setCounter] = useState(10)
  return (
    <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => {setCounter (counter+2)}}>
      Sumar
    </button>

    <button onClick = {() => {
      setCounter (counter-2)
    }}>
      Restar
    </button>

    <button onClick = {() => {
      setCounter(10)
    }}>
      Reiniciar
    </button>

  </div>
  

  )
}

root.render(
  <>
  <Counter/>

    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
>>>>>>> 01145ed62d9dd39019c948365c11496ed438d2c2
