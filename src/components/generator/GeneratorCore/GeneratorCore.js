import React from 'react';
import sentenseCase from './../../../helpers';

class GeneratorCore extends React.Component {

    weirdChars = ['w']

    state = {
        nameOne: '',
        nameTwo: '',
        year: 2021,
        extraWord: ''
    };

    config = [
        [0, 3, 0, 3],
        [0, 1, 0, 1],

    ]


    renderConfigs = () => {

        return (
            <>
                {this.config.map(configArr => {
                   return <div className="dc-card">
                        #{this.props.nameOne.substring(configArr[0], configArr[1])}{sentenseCase(this.props.nameTwo.substring(configArr[2], configArr[3]))}
                    </div>
                })}
            </>


        )
    }

    options = () => {
        return (
            <>
                <div className="dc-card">
                    #{this.props.nameOne}{this.props.nameTwo}{this.props.extraWord}
                </div>
                <div className="dc-card">
                    #{this.props.nameOne}{this.props.nameTwo}{this.props.year}
                </div>
                <div className="dc-card">
                    #{this.props.nameTwo}{this.props.nameOne}
                </div>

                


                <div className="dc-card">
                    #{this.props.nameTwo.substring(0, 3)}{sentenseCase(this.props.nameOne.substring(this.props.nameOne.length - 3))}
                </div>
                <div className="dc-card">
                    #{this.props.nameOne.substring(0, 4)}{sentenseCase(this.props.nameTwo.substring(this.props.nameTwo.length - 3))}
                </div>
                {this.renderConfigs()}
            </>
        )
    }

    render() {
        return (

            <div className="tags">
                {this.props.nameOne.length && this.props.nameTwo.length ?
                    this.options() : 'null'
                }
            </div>
        )
    }

}

export default GeneratorCore;
