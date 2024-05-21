import information from "../../data/Information";
import Init from "../molecules/Init";
import Logo_init from "../molecules/Logo_init";
import './Section_init.css';

function Section_init() {
    return (
        <div id="section">
            {information.head.map((head, index) => (
                <Logo_init
                    key={`logo-${index}`}
                    logo={head.logo}
                    text_logo={head.text_logo}
                />
            ))}
            {information.head.map((head, index) => (
                <Init
                    key={`init-${index}`}
                    title={head.title}
                    description={head.descrption}
                />
            ))}
        </div>
    );
}

export default Section_init;
