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

import Button from "./components/Button"
import User from "./components/User"

function App() {
  return (
    <section>
      <User img="https://i.imgur.com/7vQD0fPs.jpg" alt="Dale" name="Dale Houston" work="Software Engineer" />
      <Button/>
    </section>

  );
}
export default App;
