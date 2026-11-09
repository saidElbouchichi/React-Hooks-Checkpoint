import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const initialMovies = [
  { id: 1, title: 'Inception', description: 'Un voleur infiltre les rêves pour y implanter une idée.', posterURL: '/poster.svg', rating: 5 },
  { id: 2, title: 'Interstellar', description: "Des explorateurs traversent un trou de ver pour sauver l'humanité.", posterURL: '/poster.svg', rating: 5 },
  { id: 3, title: 'La La Land', description: 'Un pianiste et une actrice poursuivent leurs rêves à Los Angeles.', posterURL: '/poster.svg', rating: 4 },
  { id: 4, title: 'Breaking Bad', description: 'Un professeur de chimie bascule dans le crime.', posterURL: '/poster.svg', rating: 5 },
  { id: 5, title: 'The Office', description: "Le quotidien absurde des employés d'un bureau.", posterURL: '/poster.svg', rating: 3 },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => setMovies([...movies, { ...movie, id: Date.now() }]);

  const filtered = movies.filter(
    (m) => m.title.toLowerCase().includes(titleFilter.toLowerCase()) && m.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>🎬 Mes films et séries</h1>
      <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filtered} />
    </div>
  );
}

export default App;
