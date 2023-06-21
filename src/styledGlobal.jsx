import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const ContainerBox = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    /* align-items: start; */
    /* justify-items: stretch; */
    width: 245px;
    /* justify-content: space-between; */

`

export const BoxPrincipal = styled.div`
    width: 200%;
    height: 100px;
`

export const ContainerPainel = styled.div`
    padding-left: 0px;
    padding-top: 0px;
    display: flex;
    flex-grow: 1; 
    width: 60%;   
    
    display: grid;
    grid-template-columns: repeat(4, 24.8% 0.2%);
    grid-template-rows: repeat(4, 270px 20px);
  
`

export const Body = styled.body`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`

export const Main = styled.main`
    min-height: 100vh;
    display: flex;
`