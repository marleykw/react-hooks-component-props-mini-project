import React from "react";

function About(props) {
    let imageURL = props.image
    let defaultURL = "https://via.placeholder.com/215"
    let aboutText = props.about
    let altDesc = "blog logo"
    if (imageURL === undefined) {
        return (<>
            <aside>
            <img src={defaultURL} alt={altDesc} />
            <p>{aboutText}</p>
            </aside>
        </>)
    } else {
        return (<>
            <aside>
            <img src={imageURL} alt={altDesc} />
            <p>{aboutText}</p>
            </aside>
        </>)
    }
  }

  export default About;