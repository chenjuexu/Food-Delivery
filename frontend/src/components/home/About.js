import styled from 'styled-components'
import background from '../../img/about-background.png'
import {SectionTitle} from '../menu/Menu'
import watchIcone from '../../img/stopwatch-solid.svg'
import burgerIcone from '../../img/hamburger-solid.svg'
import walletIcone from '../../img/wallet-solid.svg'

const StyledAbout = styled.section`
width:100vw;
margin-bottom:40px;

`;

const AboutWrapper= styled.article`
max-width:1250px;
justify-content:center;
min-height: 300px;
width:100vw;
display:flex;
flex-flow: row;
flex-wrap: wrap;
margin: 0 auto;

  & > *{
    flex:1 0 1;
 margin-top:-50px;
    @media  screen and (min-width:950px){
      width:50%;
         margin-top:0;
    }
  }
`;
const ImgSection = styled.div`
display:flex;
justify-content:center;

`;
const Image = styled.img`
max-width:400px;
margin: 0 auto;
@media  screen and (min-width:950px){
    margin-top:-45px;
    }
`;
const HistoriSection = styled.div`
text-align:center;
padding:  50px 15px;
margin-left:-6px;
display:flex;
justify-content:flex-start;
flex-flow: column;
align-items:center;
line-heigth:35px;
&>${SectionTitle}{
margin: 0 auto 20px;
}
@media  screen and (min-width:950px){
  max-width:600px;
    margin-right: -100px;
    align-items:flex-start;
}



`;
const Features = styled.div`
display:flex;
gap:30px;
opacity:0.8;
margin: 40px auto 20px;
& div {
  display:flex;
  flex-direction:column;
align-items:center;
justify-content:center;
transition: 0.5s ease;

}
& div:hover{
transform:scale(1.1);
}
& div h4{
margin-bottom:0;
}
`
const Icone = styled.img`
width:40px;
`
export default function About(){
return(
<StyledAbout>



  <AboutWrapper cassName="flex">

  <HistoriSection>
      <SectionTitle>About us</SectionTitle>

   <p>Lorem, ipsum pain sit amet consectetur adipisicing elit. Dolorem temporibus quod itaque mollitia quidem. Eos nemo nam corrupti ipsam iusto facilis sit blanditiis, placeat omnis amet voluptatem. Pain, recusandae atque ?.
     Lorem ipsum, pain sit amet consectetur adipisicing elit. Incidunt voluptates quasi corporis nihil pariatur repudiandae debitis! Sed sit, quaerat laudantium consectetur quibusdam ab aut laboriosam veniam ducimus. Odit, be aperiam!</p>
      <Features>
        <div >
        <Icone src={burgerIcone} alt="best-ingredients"/>
          <h4>Quality</h4>

          </div>
           <div>
                 <Icone src={walletIcone} alt="best-prices"/>
             <h4>Prices</h4>

           </div>

              <div>
                  <Icone src={watchIcone} alt='super-fast'/>
                <h4>Speed</h4>

              </div>
      </Features>
  </HistoriSection>
<ImgSection>
<Image src={background} alt="burger"></Image>
</ImgSection>

  </AboutWrapper>


</StyledAbout>
);
}