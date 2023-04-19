import CardCharacter from "./CardCharacter";

export default function DetailCharacter(props) {

    return (
        <div>
            <CardCharacter movies={props.movies} character={props.character}/>
        </div>
    )
}

