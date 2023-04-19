import React from 'react'
import {FloatingLabel} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export default function SelectorMovies(props) {
    const change = (e) => {
        const movie = props.movies.find(x => x.episode_id == e.target.value)
        props.onchange(movie)
    }
    return (
        <div>
            <Form.Label >Peliculas</Form.Label>

            <Form.Select
                aria-label="Default select example"
                onChange={change}
            >
                <option>Selecciona tu pelicula</option>
                {props.movies.map(x =>
                    <option key={x.created} value={x.episode_id}>{x.title}</option>
                )}
            </Form.Select>

        </div>
    )
}