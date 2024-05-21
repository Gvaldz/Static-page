import Cards_albums from '../molecules/Cards_albums';
import information from '../../data/Information';
import Title_section from '../atoms/Title_section';
import './Section_albums.css';

function Section_albums() {
    return (
        <div id="section_albums">
            {information.titles.map((title, index) => (
                <Title_section key={index} title={title.albums} />
            ))}
            {information.albums.map((album, index) => (
                <Cards_albums
                    key={index}
                    title={album.title}
                    description={album.description}
                    image={album.image}
                />
            ))}
        </div>
    );
}

export default Section_albums;
