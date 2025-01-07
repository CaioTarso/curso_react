const MovieCard = ({ movie: { id, release_date, poster_path, title, media_type } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{release_date ? release_date.split("-")[0] : "Ano desconhecido"}</p>
      </div>

      <div>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/400"}
          alt={title}
        />
      </div>

      <div>
        <span>{media_type}</span> 
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
