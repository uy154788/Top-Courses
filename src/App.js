import React, { useEffect, useState } from "react";
import {apiUrl,filterData } from "./Data"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import "react-toastify/ReactToastify.min.css"

const App=()=> {
  const[courses,setCourses]=useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCetegory]=useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      const output=await response.json();
       console.log(output);
      setCourses(output.data);
    }catch(err){
      toast.error("Error in network");
    }
    setLoading(false);
  }  
  useEffect(()=>{
    fetchData();
  },[])
  return <div className={"min-h-screen flex flex-col bg-bgDark2"}>
     <div>
    <Navbar/>

    </div>
    <div>
    <Filter filterData={filterData}
            category={category} 
            setCetegory={setCetegory}
    />

    </div>
    <div className={"w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"}>
    
      {
        loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
          
    
    </div>
 

  </div>;
};


export default App;
