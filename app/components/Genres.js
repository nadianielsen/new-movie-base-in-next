

const Genres = ({ genres }) => {
    return (
        <>
         <div className="flex gap-x-4">
            <h3 className="text-xs font-medium">Genres:</h3>
            {genres.map((genre, index) => {
                if (index < 3) return (
                    <p key={genre.id} className="text-xs opacity-70">{genre.name}</p>
                    )
                }
                )}
         </div>
        </>
    );
}

export default Genres;