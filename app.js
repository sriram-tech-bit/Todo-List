 import React, { use, useState } from "react"
 import ReactDOM from "react-dom/client"
 import { useState } from "react";
  import Head from "./src/components/Head";
 


let App=()=>{
 return (
 <div className=" flex justify-center items-center min-h-screen  bg-amber-100">
   <div className= " bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <Head/>
    </div>
 
</div>
 )

}
let root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);
