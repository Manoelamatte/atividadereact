import { BoxPrincipal, ContainerBox } from "../../styledGlobal"
import { H4 } from "./styled"
import { ContainerImg } from "./styled"
function Card(props){
    return(
       
        <BoxPrincipal>
        <ContainerBox  onClick={props.reproduz}>
        <ContainerImg src={props.link} alt=""></ContainerImg>
                    {/* <h4>{props.titulo}</h4> */}
                    <H4>{props.titulo}</H4>
                    
       </ContainerBox>
       </BoxPrincipal>
    )
}

export default Card 