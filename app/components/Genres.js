

const Genres = ({genres}) => {
    return ( 
        <>
        {genres?.map((genre, index) => { if(index < 2 ) return (
                <p className="text-xs opacity-70">{genre.name} </p>  
            )}
            )}
        </>
     );
}
 
export default Genres;