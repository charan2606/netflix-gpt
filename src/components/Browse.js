import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
    useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
        Main container 
        - VideoBackground
        -VideoTitle
        SecondaryContainer
        - Movieslist * n
        - Moviecards * n

        */
      }

    </div>
  )
}

export default Browse;


// import React from 'react'; 
// import Header from './Header';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer' ;

// const Browse = () => {
//   useNowPlayingMovies();
//   return (
//     <div>
//       <Header/>
//       <MainContainer />
//       <SecondaryContainer />
 
    //   {
    //     /*
    //     Main container 
    //     - VideoBackground
    //     -VideoTitle
    //     SecondaryContainer
    //     - Movieslist * n
    //     - Moviecards * n

    //     */
    //   }
//     </div>
//   )
// }

// export default Browse
