import React from 'react';

const About = (props) => {
    return (
        <div className="dc-page">
            <h1>
                This tool will generate  <b className="dc--is-important">trending tags</b> for your <i>next</i> wedding!
            </h1>
            <p>
                Just enter the name, maybe the year if you very confident, and some random text.
            </p>
            <p>
                Look at the plethora of copy pasted text around to your names.
            </p>
            <p>
                Like a tag, you can tap on it to check if there's something happening.
            </p>
            <p>
                I just made this to play with React, and my friends are getting married soon.
                Hope this will help them.
            </p>

            <p>
                <u>
                    <a href="https://github.com/nirmalkrishnav/WHG" target="_blank">Wish to see how this works ?</a>
                </u>
            </p>

        </div>
    )
}

export default About;