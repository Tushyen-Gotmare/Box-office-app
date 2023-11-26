

const ShowMainData = ({image, name, rating, genres, summary}) => {
  return (
    <div>
     <img src={image ? image.original : '/image-not-found.png' } alt={name} />

     <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={ { __html : summary }}/>

        <div>
            {genres.map((genres) => <span key={genres}>{genres}</span>)}
        </div>
     </div>
    </div>
  )
}

export default ShowMainData
