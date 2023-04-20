import React, {useEffect} from "react";
import {Button, ListGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MovieService from "@/service/movies";
import {forEach} from "react-bootstrap/ElementChildren";


export default function CardCharacter(props) {
    const movieService = new MovieService()
    const [planet, setPlanet] = React.useState("");
    const [moviesCharacter, setMoviesCharacter] = React.useState([]);
    const [vehicles, setVehicles] = React.useState([]);
    const [starships, setStarships] = React.useState([]);
    useEffect(() => {
        const getPlanet = async () => {
            const planet = await movieService.getPlanet(props.character.homeworld)
            setPlanet(planet);
        };
        const getPeliculas = async () => {
            if(!props.character.films){
                return
            }
            setMoviesCharacter([])
            for (const x of props.character.films) {
                const movie = props.movies.find(m => m.url == x)
                setMoviesCharacter(moviesCharacter => [...moviesCharacter, movie]);
            }

        };

        const getVehiculos = async () => {
            if(!props.character.vehicles){
                return
            }
            setVehicles([])
            for (const x of props.character.vehicles) {
                const vehicle =await movieService.getVehicle(x)
                setVehicles(vehicles => [...vehicles, vehicle]);
            }

        };

        const getNaves = async () => {
            if(!props.character.starships){
                return
            }
            setStarships([])
            for (const x of props.character.starships) {
                const starship =await movieService.getStarship(x)
                setStarships(starships => [...starships, starship]);
            }

        };
        getPeliculas()
        getVehiculos()
        getNaves()
        getPlanet();
    }, [props.character]);

    return (
        <Card className={"mt-3"} style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><strong>Altura: </strong>{props.character.height}</ListGroup.Item>
                <ListGroup.Item><strong>Peso: </strong>{props.character.mass}</ListGroup.Item>
                <ListGroup.Item><strong>Color de cabello: </strong>{props.character.hair_color}</ListGroup.Item>
                <ListGroup.Item><strong>Año de nacimiento: </strong>{props.character.birth_year}</ListGroup.Item>
                <ListGroup.Item><strong>Planeta: </strong>{planet.name}</ListGroup.Item>
                <ListGroup.Item>
                    <strong>Peliculas en las que aparece: </strong>
                    <ul>
                        {moviesCharacter.map(x =>
                            <li key={x.url}>&#x2022; {x.title}</li>)}
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Vehiculos usados: </strong>
                    <ul>
                        {vehicles.map(x =>
                            <li key={x.url}>&#x2022; {x.name}</li>)}
                    </ul>
                    <strong>Naves usadas: </strong>
                    <ul>
                        {starships.map(x =>
                            <li key={x.url}>&#x2022; {x.name}</li>)}
                    </ul>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )


}