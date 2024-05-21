import Section_albums from "../components/organisms/Section_albums";
import Section_init from "../components/organisms/Section_init";
import Section_songs from "../components/organisms/Section_songs";
import './Home.css'

function Home(){

    return(
        <div id="box_dad">
            <Section_init></Section_init>
            <Section_albums></Section_albums>
            <Section_songs></Section_songs>
        </div>
    ) 
    
}

export default Home;