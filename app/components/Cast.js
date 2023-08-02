

const Cast = ({ cast }) => {
    return (
        <article className="flex gap-x-4">
            <h2 className="font-medium text-xs lg:text-sm">Cast:</h2>
            {cast?.map((actor, index) => {
                if (index < 6) return (
                    <p className="text-xs lg:text-sm">{actor.name}</p>
                )
            })}
        </article>
    );
}

export default Cast;