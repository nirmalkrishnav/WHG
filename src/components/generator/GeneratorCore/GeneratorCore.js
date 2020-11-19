import React from 'react';

class GeneratorCore extends React.Component {

    weirdChars = ['w']

    state = {
        nameOne: '',
        nameTwo: '',
        year: 2021
    };

    hashtags = () => {
        return (
            <>
                <div className="dc-card">
                    #{this.props.nameOne}{this.props.nameTwo}
                </div>
                <div className="dc-card">
                    #{this.props.nameOne.substring(0, 3)}{this.props.nameTwo.substring(0, 3)}
                </div>
                <div className="dc-card">
                    #{this.props.nameOne.substring(0, 4)}{this.props.nameTwo.substring(0, 4)}
                </div>
                <div className="dc-card">
                    #{this.props.nameOne.substring(0, 4)}{this.props.nameTwo.substring(0, 3)}
                </div>

                <div className="dc-card">
                    #{this.props.nameTwo.substring(0, 3)}{this.props.nameOne.substring(0, 3)}
                </div>
                <div className="dc-card">
                    #{this.props.nameTwo.substring(0, 3)}{this.props.nameOne.substring(0, 3)}{this.props.year}
                </div>
                <div className="dc-card">
                    #{this.props.nameTwo.substring(0, 4)}{this.props.nameOne.substring(0, 4)}
                </div>
                <div className="dc-card">
                    #{this.props.nameTwo.substring(0, 4)}{this.props.nameOne.substring(0, 3)}
                </div>
            </>
        )
    }

    render() {
        return (

            <div className="tags">
                {this.props.nameOne.length && this.props.nameTwo.length ?
                    this.hashtags() : null
                }
            </div>
        )
    }

}

export default GeneratorCore;
