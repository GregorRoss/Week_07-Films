import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film  key={film.id} film={film}/>
    })
    return ( 
        <div Class='film-list'>
        <h2>Upcoming Film Releases for UK</h2>
        {filmNodes}
        <h2> <a href="https://www.imdb.com/calendar/?region=gb" target="_blank" Class='releases'>View more upcoming releases &gt; &gt; </a></h2>
        </div>
     );
}
 
export default FilmList;