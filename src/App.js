//componente geral da aplicação

import logo from './categorias.jpeg';
import './App.css';
import HelloWord from './components/HelloWord';

function App() {
//NÂO PRECISA DE ; MAS PODE USAR
  const nome = 'Luísa'
  const nomeMaiusculo = nome.toLocaleUpperCase()

  function multiplicacao (a,b){
    return a*b
  }

  const urlimg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'

  //className é equivalente ao class no html
  return (//retorno deve ser englobado por um elemento pai do resto
     <div className="App"> 
        <HelloWord/>
        <img src={logo} className="App-logo" alt="logo"/>

        <p>Oi meu nome é {nome} ou {nomeMaiusculo}</p>

        <h3>ALTERANDO O JSX - Forma js de mexer html</h3>
        <p>Soma 2 + 2: {2+2}</p>
        <p>Multiplicação 3*6: {multiplicacao(3,6)}</p>

        <img src={urlimg} alt="imagem" width="200"/>
    </div>
  );
}

export default App;

//INICIALIZA