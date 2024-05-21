import Song_description from "../atoms/Song_description";
import Song_album from "../atoms/Song_album";
import Song_name from "../atoms/Song_name";
import './Cards_songs.css'

function Cards_songs(props){

    return(
        <div id="songs_card">
            <div id="Title">
            <Song_name name = {props.name}></Song_name>
            <Song_album img = {props.img}></Song_album>
            </div>
            <div id="description">
            <Song_description description = {props.description}></Song_description>
            </div>
        </div>
    )
}

export default Cards_songs;