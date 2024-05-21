import './Songs.css'

function Song_description(props){

    return(
        <div id="div_description">
            <p id="description_song">{props.description}</p>
        </div>
    );
}

export default Song_description;
