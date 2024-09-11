import './App.css';
import Champ from './Champ';
import Role from './Role';
import Region from './Region';



function App() {
  return (
     <section>

    <div className='Champions'>
<h1> Champions of League of Legends </h1>
<h4> These are the champions </h4>
<p> These champions are chosen based on the players' favorite champions</p>
</div>


    <div className='Champ1'> 
    <Champ name="Aurora"/>
    <Role role="Mage"/>
    <Region Region="Ionia"/>
    </div>
    

    <div className='Champ2'>
    <Champ name ="Jhin"/>
    <Role role ="ADC"/> 
    <Region Region="Ionia"/>
    </div>

    <div className='Champ3'>
    <Champ name ="Xayah"/>
    <Role role ="ADC"/>
    <Region Region="Vastaya"/>
    </div>

    <div className='Champ4'>
    <Champ name ="Gwen"/>
    <Role role ="AP Bruiser"/>
    <Region Region ="Shadow Isles"/>
    </div>

    
    
    </section>
  );
} 

export default App;
