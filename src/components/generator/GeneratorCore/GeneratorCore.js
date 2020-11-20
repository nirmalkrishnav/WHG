import React from 'react';
import { instaTag, juggler, tagCase } from './../../../helpers';

class GeneratorCore extends React.Component {

    weirdChars = ['w']

    state = {
        nameOne: '',
        nameTwo: '',
        year: 2021,
        extraWord: ''
    };


    templateOutput = () => {

        let templates = [
            `#${this.props.nameOne}And${this.props.nameTwo}`,
            `#${this.props.nameTwo}And${this.props.nameOne}${tagCase(this.props.extraWord)}`,
            `#${this.props.nameOne}${this.props.nameTwo}${this.props.year}`,
            `#${this.props.nameOne}and${this.props.nameTwo}AreDoingIt`,
        ]

        let forShuffle = [
            `#${this.props.nameOne}And${this.props.nameTwo}BigDay`,
            `#${this.props.nameOne}And${this.props.nameTwo}Wed`,
            `#${this.props.nameOne}And${this.props.nameTwo}Wedding`,
            `#${this.props.nameOne}Weds${this.props.nameTwo}`,
            `#AdventuresOf${this.props.nameOne}And${this.props.nameTwo}`,
            `#${this.props.nameOne}And${this.props.nameTwo}SittingInATree`,
            `#${this.props.nameOne}Loves${this.props.nameTwo}`,
            `#${this.props.nameOne}Hearts${this.props.nameTwo}`,
            `#${this.props.nameOne}Picked${this.props.nameTwo}`,
            `#${this.props.nameOne}And${this.props.nameTwo}GetHitched`,
            `#${this.props.nameOne}And${this.props.nameTwo}TieTheKnot`,
            `#${this.props.nameOne}And${this.props.nameTwo}SayIDo`,
            `#${this.props.nameOne}And${this.props.nameTwo}Forever`,
            `#CongratsTo${this.props.nameOne}And${this.props.nameTwo}`,
            `#The${this.props.nameOne}And${this.props.nameTwo}Wedding`,
            `#WaitingFor${this.props.nameOne}And${this.props.nameTwo}`,
            `#CountOn${this.props.nameOne}And${this.props.nameTwo}`,
            `#${this.props.nameOne}And${this.props.nameTwo}4ever`,
            `#${this.props.nameOne}CaughtA${this.props.nameTwo}`,
            `#FinallyFoundA${this.props.nameOne}`,
            `#${this.props.nameOne}Got${this.props.nameTwo}ed`,
            `#${this.props.nameOne}GotA${this.props.nameTwo}`,
            `#${this.props.nameOne}Plus${this.props.nameTwo}`,
            `#${this.props.nameOne}Meets${this.props.nameTwo}`,
            `#${this.props.nameOne}${this.props.nameTwo}Merger`,
            `#${this.props.nameOne}${this.props.nameTwo}Newlywed`,
            `#${this.props.nameOne}And${this.props.nameTwo}InLove`,
            `#${this.props.nameOne}And${this.props.nameTwo}KissAndTell`
        ]


        return (
            <>
                {
                    [...templates, ...juggler(forShuffle)].map(line => {
                        return (<div key={line} className="dc-card">
                            <button className="link-button" onClick={() => instaTag(line)}>
                                {line}
                            </button>
                        </div>)
                    })
                }
            </>
        )
    }

    render() {
        return (
            <div className="tags">
                {this.props.nameOne.length && this.props.nameTwo.length ?
                    this.templateOutput() : null
                }
            </div>
        )
    }

}

export default GeneratorCore;
