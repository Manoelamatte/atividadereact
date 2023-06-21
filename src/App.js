import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import "./style.css";
import Home from './page/Home/Home';
import StyledGlobal, { TelaInteira } from "./styledGlobal";
// import styledGlobal, {ContainerBox} from "./styledGlobal";
// import { ContainerBotao } from "./componentes/Nav/styled";




function App() {

  
  function reproduzVideo(onClick) {
    alert("O vídeo está sendo reproduzido")
}
  return (
    <>
    <StyledGlobal/>    
     {/* <div class="tela-inteira"> */}
     <TelaInteira>
      <Header/>
        <main>         
          <Nav/>    
          <Home reproduz={reproduzVideo}/>  
        </main>
        <Footer/>
    {/* </div> */}
    </TelaInteira>
    </>
  );
}

export default App;
