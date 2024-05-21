import './Songs.css'

function Song_name(props){

    return(
        <div id="song_name">
            <h3 id='song_title'>{props.name}</h3>
        </div>
    );
}

export default Song_name;