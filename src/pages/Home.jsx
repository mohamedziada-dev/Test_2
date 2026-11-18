import { useState } from "react"

export default function Home() {
  const [name, setName] =   useState("Mohamed Ziada");
  function changeName()
  {
    if(name == "Mohamed Ziada") 
      return setName ("Mohamed Eldawly");
    else 
      return setName ("Mohamed Ziada");
  }
  return (


    <div className="h-screen bg-amber-800 flex flex-col gap-5" >
        {/* HomaPage */}
        <p className="text-7xl text-center items-center"> {name}</p>
        <button onClick={changeName} className="bg-gray-400 text-black"> 
          change name
        </button>
    </div>
  )
}
