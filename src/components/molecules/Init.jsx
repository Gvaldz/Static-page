import Description from "../atoms/Description";
import Title from "../atoms/Title";
import './Init.css'

function Init(props){

    return (
        <div id="init">
            <Title title = {props.title}></Title>
            <Description description = {props.description}></Description>
        </div>
    
    )    
}

export default Init;