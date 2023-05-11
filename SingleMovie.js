import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URl } from "./Context";

const SingleMovie = () => {
  const { id } = useParams();

  const [isloading, setIsloading] = useState(true);
  const [movie, setMovie] = useState("");
  // const[isError,setIsError]=useState({show:"false",msg: " " });  
  // const [query,setQuery] =useState("Spider man ");

  const getMovies = async (url) => {

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsloading(false);
        setMovie(data);
      }

    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      getMovies(`${API_URl}&i=${id}`);
    }, 800);

    return () => clearTimeout(timeout);
  }, [id]);

  if (isloading) {
    return (

      <div className="movie-section" >

        <div className="loading" >Loading...</div>
      </div>
    );

  }



  return (


    <section className='movie-section' >


      <div className='movie-card' >

        <fingure>
          <img src={movie.poster} alt=" " />

        </fingure>

       =

        <div className="card-content">
          <p className="title">{movie.Title}</p>

          <p className="card-text"> {movie.Released} </p>
          <p className="card-text">{movie.Genre}</p>

          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/"> Go Back </NavLink>


        </div>


      </div>
    </section>



  );
};

export default SingleMovie;