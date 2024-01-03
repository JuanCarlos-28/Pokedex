import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Figure, ListGroup } from 'react-bootstrap';
import { Pokemon } from '../models/pokemon.m';
import { getPokemons } from '../controller/getPokemon';

export const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const obtenerTodos = async() => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        obtenerTodos();

    }, []);

    const filtrarPokemon = pokemons?.slice(0, 151).filter( pokemon => pokemon.name.toLowerCase().match(query.toLowerCase()));

    return (
        <>

            <header className='p-3 bg-primary text-white fw-bold fs-2 text-center'>
                <p className='p-0 m-0'>Pokemon | Juan Rivas</p>
            </header>

            <div className="container">

                <input
                    className='form-control mt-2 mb-5'
                    type="text"
                    value={query}
                    placeholder="Buscar Pokemon"
                    onChange={(e) => setQuery(e.target.value.trim())}
                />


                <div className="row gap-5 justify-content-center">
                {
                    filtrarPokemon?.slice(0, 151).map((pokemon) => (
                        
                        <Card key={pokemon.id} style={{ width: '14rem' }}>
                            <Card.Header> <b> Tipo:</b> {pokemon.type} </Card.Header>
                            <Card.Img variant="top" src={pokemon.imgGif} className='d-block mx-auto w-50' width={80} height={100} />
                            <Card.Body>
                                <Card.Title className='text-center'> {pokemon.id} - {pokemon.name} </Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/753/753252.png" 
                                            />
                                        </Figure>
                                        <b> HP:</b> {pokemon.hp}
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/834/834240.png" 
                                            />
                                        </Figure>
                                        <b> Ataque:</b> {pokemon.attack}</ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/1866/1866922.png" 
                                            />
                                        </Figure>
                                        <b> Defensa:</b> {pokemon.defense}</ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/1671/1671062.png" 
                                            />
                                        </Figure>
                                        <b> E. Ataque:</b> {pokemon.sp_atk}</ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/1671/1671062.png" 
                                            />
                                        </Figure>
                                        <b> E. Defensa:</b> {pokemon.sp_def}</ListGroup.Item>
                                    <ListGroup.Item> 
                                        <Figure>
                                            <Figure.Image
                                                className='mb-0'
                                                width={16}
                                                height={16}
                                                // alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/2825/2825474.png" 
                                            />
                                        </Figure>
                                        <b> Velocidad:</b> {pokemon.speed}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    ))
                }

                </div>
            </div>

            <footer className='mt-5 p-3 bg-primary text-white fw-bold fs-2 text-center'>
                <p className='p-0 m-0'> Todos los derechos reservados | {new Date().getFullYear()} </p>
            </footer>

            
        </>
    )
}
