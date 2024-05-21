import Cards_songs from '../molecules/Cards_songs';
import information from '../../data/Information';
import Title_section from '../atoms/Title_section';
import './Section_songs.css';

function Section_songs() {
    return (
        <div id="section_songs">
            {information.titles.map((title, index) => (
                <Title_section key={index} title={title.top} />
            ))}
            {information.songs.map((song, index) => (
                <Cards_songs
                    key={index}
                    name={song.name}
                    description={song.description}
                    img={song.img}
                />
            ))}
        </div>
    );
}

export default Section_songs;
