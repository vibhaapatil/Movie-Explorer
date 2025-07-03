import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../component/MovieCard";

function Favorites() {
    const {favorites}=useMovieContext();
    if(favorites){
        return (
            <div className="favorites"> 
                <h2>Your favorites</h2>
          <div className="movies-grid">
        {favorites.map((movie) => 
         (
          <MovieCard movie={movie} key={movie.id} />
        )
    )}
    </div>
    </div>
        );
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they wil appear here</p>
    </div>
}
export default Favorites