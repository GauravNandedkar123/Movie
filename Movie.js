import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {

  const { movie } = useGlobalContext();
  return (


    <section className="Movie-page" >
      <div className="grid grid-4-col" >
        {movie.map((curMovie) => {

          const { imdbID, Title, Poster } = curMovie; 
          // const MovieName =Title.substring(0,15);

          return (
            <NavLink to={`Movie/${imdbID}`} key={imdbID}>
              <div className="card" >

                <div className="card-info" >

                  <h2>{Title}</h2> 
                  
                  <img src={Poster} alt={imdbID}/> 
                  

                </div>

              </div>

            </NavLink>
          )
        })}</div>

    </section> 
    

  );
};

export default Movies;