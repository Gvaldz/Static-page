import Text_logo from "../atoms/Text_logo";
import Logo from "../atoms/Logo"
import './Logo_init.css'

function Logo_init(props){

    return (
        <div id="logo">
            <Logo logo = {props.logo}></Logo>
            <Text_logo text_logo = {props.text_logo}></Text_logo>
        </div>
    
    )
    
}

export default Logo_init;