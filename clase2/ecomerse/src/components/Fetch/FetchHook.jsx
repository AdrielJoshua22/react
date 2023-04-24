/* import { useEffect, useState } from "react";



export const useFetch = (url) => {
    const [data,setData] =useState(null);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(jsondata => setData(jsonData))
        .catch(error =>console.log(error))
    },[url])
}

return data; */