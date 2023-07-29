

const Genres = ({ genres }) => {
    return (
        <>
            {genres.map((genre, index) => {
                if (index < 3) return (
                        <p key={genre.id} className="text-xs opacity-70">{genre.name}</p>
                )
            }
            )}
        </>
    );
}

export default Genres;