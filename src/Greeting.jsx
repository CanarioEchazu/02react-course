<<<<<<< HEAD
export function Greeting({ title, name = "user" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({name, amount, married, address, greet}) {
  return (
    <div>
      <h1> {name}</h1>
      <p> 💵{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Adress: {address.street}</li>
      </ul>
    </div>
  );
}
=======
export function Greeting({ title, name = "user" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({name, amount, married, address, greet}) {
  return (
    <div>
      <h1> {name}</h1>
      <p> 💵{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Adress: {address.street}</li>
      </ul>
    </div>
  );
}
>>>>>>> 01145ed62d9dd39019c948365c11496ed438d2c2
