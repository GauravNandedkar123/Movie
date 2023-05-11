import React, {  useState, useContext, useEffect } from 'react'   
// useEffect he add hot varti


// process.env.REACT_APP_API_KEY
export const API_URl =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`; 

 
const AppContext = React.createContext(); 

const AppProvider =({children}) => {   
    
    const[Isloading ,setIsloading] =useState(true); 
    const[movie,setMovie]=useState([]); 
    const[isError,setIsError]=useState({show:"false",msg: " " });  
    const [query,setQuery] =useState("Spider man ");

    const getMovies=async(url)=> {   

        setIsloading(true);

        try{  
            const res =await fetch(url); 
            const data =await res.json();
            console.log(data); 
            if(data.Response ==="True"){ 
                setIsloading(false);
                setMovie(data.Search);
            }else { 
                  setIsError({ 
                 show: true, 
                 msg: data.Error,
 })
            }

        } catch(error){ 
            console.log(error);
        }
         
        
    } 

    useEffect(() => {  
        let timeout =setTimeout (() => { 
            getMovies(`${API_URl}&s=${query}`);
        },800);
       
        return ()=> clearTimeout(timeout);
    },[query]);

     
    return ( 
    <AppContext.Provider value={{Isloading,isError,movie , query,setQuery}}> 
        {children}
    </AppContext.Provider>
    );
};   

const useGlobalContext =() =>{  

    return useContext(AppContext);

}
export {AppContext,AppProvider ,useGlobalContext};

