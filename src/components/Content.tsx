import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: Array<{
      Title: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
    }>
    selectedGenreTitle: String
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenreTitle }</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}