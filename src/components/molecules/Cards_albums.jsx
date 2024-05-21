import Description_album from "../atoms/Description_album";
import Image_album from "../atoms/Image_album";
import Title_album from "../atoms/Title_album";
import './Cards_albums.css'


function Cards_albums(props){

    return(
        <div id="album_cards">
            <Title_album title = {props.title}></Title_album>
            <Image_album image = {props.image}></Image_album>
            <Description_album description = {props.description}></Description_album>
        </div>
    )
}

export default Cards_albums;