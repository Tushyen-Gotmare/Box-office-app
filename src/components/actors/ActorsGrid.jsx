import ActorsCard from "./ActorsCard";

const ActorsGrid = ({actors}) => {
    return <div> 
    {
        actors.map(data =>( <ActorsCard key={data.person.id} 
            name={data.person.name} country={data.person.country ? data.person.country.name : null}
            birthday={data.person.birthday} 
            gender={data.person.gender}
            death={data.person.deathday}
            image={data.person.image ? data.person.image.medium : '/image-not-found.png'}/>))
    }
</div>
}
export default ActorsGrid ;