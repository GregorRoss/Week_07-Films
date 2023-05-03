import React from 'react';

const Film = ({film}) => {
    return ( 
        <>
            <ul class='film-ul'>
                <li>
                   <a href={film.url} target="_blank">{film.name}</a>
                </li>
            </ul>
        </>
     );
}
 
export default Film;