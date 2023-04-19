import React, {useEffect} from 'react'
import Form from "react-bootstrap/Form";
import MovieService from "@/service/movies";

export default function SelectorCharacters(props) {
    const change = (e) => {
        const character = props.characters.find(x => x.name == e.target.value)
        props.onchange(character)
    }
    return (

       <div>
            <Form.Label>Personajes</Form.Label>
            <Form.Select
                aria-label=""
                onChange={change}
            >
                <option>Selecciona tu personaje</option>
                {props.characters.map(x =>
                    <option key={x.url} value={x.name}>{x.name}</option>
                )}
            </Form.Select>
        </div>
    )
}