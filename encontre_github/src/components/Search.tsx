//setando tipo de usuario no componente
type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import {useState, KeyboardEvent} from "react"

import { BsSearch } from "react-icons/bs"

import styles from "./Search.module.css"


const Search = ({loadUser}: SearchProps) => {

    //state para saber o que usuario digitou na busca
    const [userName, setUserName] = useState("")
    
    //função para pesquisar com tecla enter
    const handleKeyDown = (e: KeyboardEvent) => {
        //verificação da tecla
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

  return (
    <div className={styles.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhroes repositórios</p>
        <div className={styles.search_container}>
            <input type='text' placeholder='Digite o nome do usuário'
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button onClick={() =>loadUser(userName) }>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search