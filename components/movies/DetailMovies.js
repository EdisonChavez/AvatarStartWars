import CardMovie from "./CardMovie";

export default function DetailMovies(props) {

    return (
        <div>
            <CardMovie movie={props.movie}/>
        </div>
    )
}

