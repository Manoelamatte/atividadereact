import Card from '../../componentes/Card/Card'
import { ContainerPainel } from '../../styledGlobal'
import { Media1, Media2, Media3, Media4, Media5, Media6, Media7, Media8 } from '../../componentes/Card/styled'

function Home(props){
    console.log(props.reproduz)
    return(
        <ContainerPainel>

            <Media1>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=1'} titulo={'Título vídeo um'}/>
            </Media1>

            <Media2>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=2'} titulo={'Título vídeo dois'}/>
            </Media2>

            <Media3>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=3'} titulo={'Título vídeo três'}/>
            </Media3>

            <Media4>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=4'} titulo={'Título vídeo quatro'}/>
            </Media4>

            <Media5>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=5'} titulo={'Título vídeo cinco'}/>
            </Media5>

            <Media6>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=6'} titulo={'Título vídeo seis'}/>
            </Media6>

            <Media7>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=7'} titulo={'Título vídeo sete'}/>
            </Media7>

            <Media8>
            <Card reproduz={props.reproduz} link={'https://picsum.photos/400/400?a=8'} titulo={'Título vídeo oito'}/>
            </Media8>
            </ContainerPainel>

        



    )
}

export default Home