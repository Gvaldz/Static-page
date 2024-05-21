import './Logo.css'

function Logo(props){

    return(
        <div id='logo_div'>
            <img id="init_logo" src={props.logo}/>
        </div>
    )
    
}

export default Logo;