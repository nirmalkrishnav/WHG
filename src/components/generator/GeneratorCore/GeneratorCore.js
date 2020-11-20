import React from 'react';
import { instaTag, juggler, tagCase } from './../../../helpers';
import wubuhlubuhdubdub from './../../../assets/giphy.gif';

class GeneratorCore extends React.Component {

    state = {
        nameOne: '',
        nameTwo: '',
        year: 2021,
        extraWord: '',
        egg: false
    };

    crackTheEgg = () => {
        this.setState({
            egg: true
        })

    }

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

    showTags = () => {
        return (
            this.props.nameOne.length && this.props.nameTwo.length ?
                (
                    <>
                        {this.templateOutput()}
                        <button onClick={() => this.crackTheEgg()}>
                            <b>Click to a Initiate bot</b> to spam your wedding pictures for next 9 months, then again each Q2, Q3, every Anniversary, on a randomly selected Thursday for a throwback (if it's still a thing) </button>
                    </>

                ) :
                (
                    <div className="dc--text-center">
                        💍 Fill in your names 💍
                    </div>
                )
        )
    }

    showEgg = () => {

        setTimeout(() => {
            this.setState({ egg: false });
        }, 2000)

        return (
            <>
                <div className="dc--text-center">
                    Congratulations
                </div>
                <img src={wubuhlubuhdubdub} />
            </>
        )
    }

    render() {
        return (
            <div>
                <p className="dc--text-center">Tap on each tag to checkout how unique they are..</p>
                <div className="tags">
                    {this.state.egg ? this.showEgg() : this.showTags()}
                </div>
            </div>
        )
    }

}

export default GeneratorCore;
