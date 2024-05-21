import './Albums.css'

function Image_album(props){

    return(
        <div id='image'>
            <img src={props.image} id='img'/>
        </div>
    )
}

export default Image_album;