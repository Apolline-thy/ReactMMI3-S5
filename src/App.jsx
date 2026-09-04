
function User({ age, name, img }) {
  return (
    <div className="bg-Amber-900">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <img  src= {img}/>
    </div>)
}


function App() {
  return (
    <>
      <User name="Hedy Lamarr" age={101}/>
      <User name="Ada Loveplace" age={201} />
    </>
  );
}


export default App;