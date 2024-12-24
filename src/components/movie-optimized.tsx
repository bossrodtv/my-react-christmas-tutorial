import React, { useCallback, useMemo, useState } from "react";

// Expensive calculation to simulate heavy processing
const calculateMovieScore = (rating: number, reviews: number) => {
  console.log("🔄 Calculating movie score..."); // Shows when calculation runs
  // Simulate heavy computation
  for (let i = 0; i < 1000000000; i++) {}
  return (rating * reviews) / 10;
};

// Main App Component
export function OptimizedMovieApp() {
  const [count, setCount] = useState(0);
  const [movies] = useState([
    { id: 1, title: "The Matrix", rating: 4.8, reviews: 100 },
    { id: 2, title: "Inception", rating: 4.5, reviews: 80 },
  ]);

  // This function is recreated every render
  const handleLike = useCallback((movieId: number) => {
    console.log("👍 Liked movie:", movieId);
  }, []);

  // Expensive calculation runs on every render
  const movieScore = useMemo(
    () => calculateMovieScore(movies[0].rating, movies[0].reviews),
    [movies[0].rating, movies[0].reviews]
  );

  return (
    <div>
      <h1>Optimized Movie App</h1>

      {/* This button will cause everything to re-render */}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <p>Movie Score: {movieScore}</p>

      {/* Movies re-render unnecessarily */}
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

type MovieProps = {
  id: number;
  title: string;
  rating: number;
  onLike: (id: number) => void;
};

// Movie component that displays a single movie
const Movie = React.memo(({ id, title, rating, onLike }: MovieProps) => {
  console.log("🎬 Rendering Movie:", title); // Shows when component rerenders

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>Rating: {rating}⭐</p>
      <button onClick={() => onLike(id)}>Like 👍</button>
    </div>
  );
});
