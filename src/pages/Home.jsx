import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Mohamed Ziada");
  function changeName() {
    if (name == "Mohamed Ziada") return setName("Mohamed Eldawly");
    else return setName("Mohamed Ziada");
  }
  return (
    <div className="h-screen bg-amber-800 ">
      {/* HomaPage */}
      <p className="text-7xl text-center items-center"> {name}</p>

      <button
        onClick={changeName}
        className="px-5 py-3 rounded-xl  mt-10
  bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600
  text-white font-bold text-lg tracking-wide
  shadow-lg shadow-indigo-500/40
  hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700
  hover:shadow-xl hover:shadow-indigo-500/60
  hover:-translate-y-1 hover:scale-105
  active:scale-95
  transition-all duration-300 ease-in-out
  cursor-pointer"
      >
        Change Name
      </button>
    </div>
  );
}
