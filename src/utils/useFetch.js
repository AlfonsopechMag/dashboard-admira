import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>setData(data))
        .catch((error)=> setError(error))
        .finally(()=> setLoading(false));                
    }, []);    

    console.log("dataFetch==>",data);
    console.log("errorFetch==>",error);
    
    

    return {data, loading, error}
}