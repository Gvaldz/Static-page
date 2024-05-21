import './Description.css';

function Description(props){
    const paragraphs = props.description.split('\n').filter(paragraph => paragraph.trim() !== '');

    return(
        <div>
            {paragraphs.map((paragraph, index) => (
                <p key={index} id='description'>{paragraph}</p>
            ))}
        </div>
    );
}

export default Description;
