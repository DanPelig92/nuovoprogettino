export default function(props){
console.log(props)
    return(
        <div>{props.nome? props.nome : props.testo}</div>
    )
}