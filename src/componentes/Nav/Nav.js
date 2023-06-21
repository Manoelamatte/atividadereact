import { ContainerBotao, ContainerNav } from "./styled"

function Nav(){
    return(
        <ContainerNav>
        <ul>
            <ContainerBotao>
            <li >Início</li>
            <li >Em alta</li>
            <li >Inscrições</li>
            <hr></hr>
            <li >Originais</li>
            <li >Histórico</li>
            </ContainerBotao>
        </ul>
        </ContainerNav>

    )
}

export default Nav