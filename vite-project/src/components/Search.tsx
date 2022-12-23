type SearchProps = {
    loadUser: (userName:string) => Promise<void>
}

import { useState, KeyboardEvent }  from 'react';
import React from "react";
import {BsSearch} from 'react-icons/bs';
import classes from './Search.module.css';

const Search = ({loadUser}: SearchProps) => {
const [userName, setUserName] = useState("");


const handleKeyDown = (e: KeyboardEvent) => {

    if(e.key === "Enter"){
loadUser(userName);
    }

};
    return (

    <div className={classes.search}>
<h2>Busca Por Usuario:</h2>
<p>Conheça seus Melhores repositórios</p>
<div className={classes.search_container}>
    <input type="Text" placeholder="Digite o nome de Usuario" 
    onChange={(e) => setUserName(e.target.value)}
    onKeyDown={handleKeyDown}
    />
<button onClick={(e) =>loadUser(userName)}>
    <BsSearch />
</button>

</div>
    </div>
);


};

export default Search;