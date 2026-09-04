import Button from "./Button";
function User({ name, avatar, work, connected }) {
  const statusColor = connected ? "bg-green-500" : "bg-red-500";
  return (
    <section className="nb-2 nl-4 shadow-nd flex items-center space-x-4 rounded-lg border-2 border-gray-300 bg-gray-100 p-4">
      <div>
        <img className="h-16 w-16 rounded-full" src={avatar} alt={name}
       />
       <spam className={'absolute right-0 bottom-0 block h-3 w-3 rounded full ${statusColor}'}></spam>
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="color-gray-300 font-extralight">{work}</p>
      </div>
      <Button className="nl - auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </Button>
    </section>
  );
}

export default User;
