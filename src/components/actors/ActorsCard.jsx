




const ActorsCard= ({name, image, gender, birthday, country, deathday}) => {

   



    return <div>
        <h1>{name} {!!gender && `(${gender})`}</h1>
        <p> {country ? `Comes from ${country}` : 'No country Known'}</p>
        {!!birthday && <p>Born on {birthday}</p>}


        <p> {deathday ? `Died ${deathday}` : 'Alive'}</p>
        <div>
         <img src={image} alt="name"/>
         </div>
      
        
        
       
    </div>
}
export default ActorsCard;