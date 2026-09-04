function User({ name, avatar, work }) {
  return (
    <section className="nb-2 nl-4 flex items-center space-x-4 rounded-lg border-2 border-gray-300 bg-gray-100 p-4 shadow-nd">
      <div>
        <img className="h-16 w-16 rounded-full" src={avatar} alt={name} />
      </div>
      <div>
        <h1 className="">{name}</h1>
        <p>{work}</p>
      </div>
    </section>
  );
}

export default User;