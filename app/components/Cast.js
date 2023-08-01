

const Cast = ({ cast }) => {
    return (
        <article>
            {cast?.map((actor, index) => {
                if (index < 4) return (
                    <h2 className="text-neutral-200 text-center">{actor.name}</h2>
                )
            })}
        </article>
    );
}

export default Cast;