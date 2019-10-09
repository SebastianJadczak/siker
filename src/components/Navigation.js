import React from 'react';
import '../styles/Navigation.css'
import { NavLink } from 'react-router-dom'

const list = [
    { id: 0, title: "Elektronika", img: "", path: "" },
    { id: 1, title: "Moda", img: "", path: "" },
    { id: 2, title: "Dom i ogród", img: "", path: "" },
    { id: 3, title: "Supermarket", img: "", path: "" },
    { id: 4, title: "Dziecko", img: "", path: "" },
    { id: 5, title: "Uroda", img: "", path: "" },
    { id: 6, title: "Zdrowie", img: "", path: "" },
    { id: 7, title: "Kultura i rozrywka", img: "", path: "" },
    { id: 8, title: "Sport i turystyka", img: "", path: "" },
    { id: 9, title: "Motoryzacja", img: "", path: "" },
    { id: 10, title: "Ogłoszenia i usługi", img: "", path: "" },
    { id: 11, title: "kolekcje i sztuka", img: "", path: "" },
    { id: 12, title: "Firma", img: "", path: "" }
]



const Navigation = () => {

    const menu = list.map(item => (
        <li className="menu" key={item.id}> <NavLink to={item.path}> {item.title} </NavLink>  </li>
    ))


    return (
        <div className="navigation">
            <div className="titleNavigation"><p>Kategorie</p></div>
            <div className="menu">
                <ul>
                    {menu}
                </ul>
            </div>
        </div>
    )
}

export default Navigation;