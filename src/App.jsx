// App.jsx
// import User from "./components/User";

// function App() {
//   return (
//     <div>
//       <User
//         name="John Do"
//         avatar="https://i.imgur.com/7vQD0fPs.jpg"
//         age={30}
//         favoriteFood="Fruits"
//       />
//     </div>
//   );
// }

import Button from "./components/Button";
import User from "./components/User";
import data from "./data/data"


function App() {
  return (
    <section>
      <h1 className="font-bold ">Room</h1>
      <h2>5 people are around right now</h2>

      <User
        name="Dale Houston"
        work="Software Engineer"
        avatar="https://thispersondoesnotexist.com/random-person.jpeg"
        alt="pk,ijk"
      />

      <User
        name="Dale Houston"
        work="Software Engineer"
        avatar="https://thispersondoesnotexist.com/random-person.jpeg"
        alt="pk,ijk"
      />
      {data.map((person) => (
        <User connected key={person.id} name={person.name} work={person.work} avatar={person.avatar} alt={person.alt} />
      ))}
  
    </section>
  );
}
export default App;
