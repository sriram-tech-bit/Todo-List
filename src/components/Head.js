import { useState } from "react";
let Head=()=>{
    const [searchinfo,setSearchInfo]=useState("");
    const [searchtext,setSearchText]=useState([]);
   const deleteitem=(index)=>{
   setSearchText(searchtext.filter((_,i)=>{
     return  index!==i; 


   }))  

   }




 
return (
 <div >
  <h1 className="p-3 text-center">Todo List</h1>
  <div className="flex justify-around  m-4">

    <input  className="border border-black rounded-2xl"  placeholder="List Your Task" onChange={(e)=>{
        setSearchInfo(e.target.value)
         
    }}></input>
    
 
 <div>
  <button   className="bg-blue-500 rounded-2xl p-2 cursor-pointer  "  onClick={()=>{
    if(searchtext.includes(searchinfo)){
         alert("already exist")
         return
    }
    setSearchText([...searchtext,searchinfo])
     setSearchInfo("");
  }}>
    save
  
    
  </button>
   

 </div>
 </div>
 
 <div className=" flex flex-col items-center p-3 ">
  {searchtext.map((e,index)=>{
   return <h1  className=" border  p-1 m-1.5 rounded-3xl w-full bg-amber-200 text-center mr-6" key={index}>{e}<button className="ml-3 "  onClick={()=>{
      deleteitem(index)  

   }}>❌</button></h1>
  
   

  })


}
</div>


 </div>



)
}

export default Head;