
const img = "border-radius"

function User({ work, name, img }) {
  return (
    <div className="white">
      <h2>{name}</h2>
      <p>{work}</p>
      <img  src= {img} alt="Ada"/>
      <button></button>
    </div>)
}


function App() {
  return (
    <>
      <User name="Dale Houston" work={"Software Engineer"} img="https://i.imgur.com/yXOvdOSs.jpg"/>
      <User name="Madge Merphy" work={"Product Designer"} img="https://i.imgur.com/yXOvdOSs.jpg"/>
      <User name="Margaret Garner" work={"Product Designer"} img="https://i.imgur.com/yXOvdOSs.jpg"/>
    </>
  );
}


export default App;