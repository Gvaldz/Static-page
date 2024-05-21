import './Songs.css'

function Song_album(props){
    return(
        <div id='div_album'>
            <img src={props.img} id="album" />
        </div>
    )
}

export default Song_album