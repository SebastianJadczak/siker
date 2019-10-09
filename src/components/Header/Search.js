import React from 'react';

const Search = () => {
    return (

        <>
            <form >
                <div className="input">   <input type="text" placeholder="czego szukasz?" className="search" /></div>
                <div className="select"> <select name="czego szukasz" className="search">
                    <option value="all">Wszystkie kategorie</option>
                    <option value="HouseAndGarden">Dom i ogród</option>
                    <option value="child">Dziecko</option>
                    <option value="electronic">Elektronika</option>
                    <option value="sport">Sport</option>
                </select>
                </div>
                <div className="searchButton">    <button className="search"> Szukaj</button></div>
            </form>
        </>
    )
}
export default Search;