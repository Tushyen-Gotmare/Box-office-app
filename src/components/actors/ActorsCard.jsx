import { SearchCard, SearchImgWrapper } from "../common/SearchCard";




const ActorsCard= ({name, image, gender, birthday, country, deathday}) => {

   



    return <SearchCard>
        <SearchImgWrapper>
         <img src={image} alt="name"/>
         </SearchImgWrapper>
        <h1>{name} {!!gender && `(${gender})`}</h1>
        <p> {country ? `Comes from ${country}` : 'No country Known'}</p>
        {!!birthday && <p>Born on {birthday}</p>}


        <p> {deathday ? `Died ${deathday}` : 'Alive'}</p>
        
      
        
        
       
    </SearchCard>
}
export default ActorsCard;