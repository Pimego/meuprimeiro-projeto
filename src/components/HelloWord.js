//Componentes em letra Maiuscula no inicio e na separação das palavra
import Frase from "./Frase"

function HelloWord(){

    return (//parte html
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <Frase/>
        </div>
    ) 
}

export default HelloWord