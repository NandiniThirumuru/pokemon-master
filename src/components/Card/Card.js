import React from 'react';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">

            <div className="Card__name">
                {pokemon.name} ID:{pokemon.id}
            </div>

            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            
            
           
     </div>
    );
}

export default Card;