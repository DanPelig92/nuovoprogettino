import Elemento from "./Elemento";
import ElementoNascosto from "./ElementoNascosto"
import Bottone from "./Bottone"

export default function Lista(){

    const mostraNascosto = true;

return(<div>
        <Elemento nome="Claudio" testo="Buongiorno" />
        {/* Elemento(claudio, buongiorno)*/}
        <Elemento testo="Salve" />
        <Elemento testo="Buonpomeriggio"/>
        <Elemento testo="Buonanotte" />
        <Bottone />
       {mostraNascosto ? <Elemento nome="Beppe"/> : <ElementoNascosto />}
       {mostraNascosto && <ElementoNascosto />} 
       {/* se entrambi sono veri, ritorna quello a destra */}
    </div>)
}