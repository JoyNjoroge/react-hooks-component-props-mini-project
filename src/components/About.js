import React from "react";

function About(props) {
    let blogImage;
    if (props.image) {
        blogImage = <img src={props.image} alt="blog logo" />;
    } else {
        blogImage = <img src="https://via.placeholder.com/215" alt="blog logo" />;
    }

    return (
        <aside>
            {blogImage}
            <p>{props.about}</p>
        </aside>
    );
}

export default About;
