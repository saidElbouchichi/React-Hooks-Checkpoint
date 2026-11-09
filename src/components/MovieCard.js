function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="card">
      <img src={posterURL || '/poster.svg'} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
      </div>
    </div>
  );
}

export default MovieCard;
