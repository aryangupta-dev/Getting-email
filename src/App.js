import "./App.css";
import { useState } from "react";
import Frontline from "./Frontline";

function App() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favourite");
  return (
    <div className="flex flex-col items-center">
      <div className="flex-col px-4 mt-10">
        <Frontline page={page} title={title}/>
        <button className="px-5 py-1 mr-10 text-white bg-blue-600 rounded-md" onClick={()=>setPage(page+1)}>
          Next
        </button>
        {console.log(page)}
        <button className="px-5 py-1 text-white bg-blue-600 rounded-md" onClick={()=>setTitle("Toppers gmail")}>
          Change title
        </button>
      </div>
    </div>
  );
}

export default App;
