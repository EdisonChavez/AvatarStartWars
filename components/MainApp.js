import SelectorMovies from "./movies/SelectorMovies";
import SelectorCharacters from "./movies/SelectorCharacters";
import MovieService from "@/service/movies";
import React, {useEffect} from "react";
import DetailMovies from "./movies/DetailMovies";
import {Col, Row} from "react-bootstrap";
import DetailCharacter from "./movies/DetailCharacter";

export default function MainApp(props) {
    const movieService = new MovieService()
    const [listMovie, setListMovie] = React.useState([]);
    const [movie, setMovie] = React.useState([]);
    const [listCharacter, setListCharacter] = React.useState([]);
    const [character, setCharacter] = React.useState("");
    useEffect(() => {
        const loadMovie = async () => {
            const moviesList = await movieService.fetchMovies()
            console.log({moviesList})
            setListMovie(moviesList);
        };
        loadMovie();
        addCharacters()
    }, [movie]);

    async function addCharacters() {
        if(!movie.characters){
            return
        }
        for (const x of movie.characters) {
            await getCharacter(x, props.movie)
        }
    }

    async function getCharacter(url, movie) {
        const exist = listCharacter.find(x => x.url == url)
        if (exist) {
            return
        }
        const character = await movieService.getCharacter(url)
        character.movie = movie
        setListCharacter(listCharacter => [...listCharacter, character])
    }

    return (
        <div className={""}>
                <Row className="mt-2 p-2">
                    <Col>
                        <SelectorMovies
                            movies={listMovie.results ? [...listMovie.results] : []}
                            onchange={setMovie}
                        />

                        <SelectorCharacters
                            characters={listCharacter? listCharacter : []}
                            movie={movie.title}
                            onchange={setCharacter}
                        />
                        <DetailCharacter
                            movies={listMovie.results ? [...listMovie.results] : []}
                            character={character}
                        />
                    </Col>
                    <Col>
                        <DetailMovies movie={movie}/>
                    </Col>
                </Row>
        </div>
    )
}
