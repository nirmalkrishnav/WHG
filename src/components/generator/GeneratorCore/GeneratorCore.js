import React from 'react';

class GeneratorCore extends React.Component {

    weirdChars = ['w']

    state = {
        nameOne: '',
        nameTwo: '',
        year: 2021
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tags">
                <div>
                    #{this.props.nameOne}{this.props.nameTwo}
                </div>
                <div>
                    #{this.props.nameOne.substring(0, 3)}{this.props.nameTwo.substring(0, 3)}
                </div>
                <div>
                    #{this.props.nameOne.substring(0, 4)}{this.props.nameTwo.substring(0, 4)}
                </div>
                <div>
                    #{this.props.nameOne.substring(0, 4)}{this.props.nameTwo.substring(0, 3)}
                </div>
                
                <div>
                    #{this.props.nameTwo.substring(0, 3)}{this.props.nameOne.substring(0, 3)}
                </div>
                <div>
                    #{this.props.nameTwo.substring(0, 3)}{this.props.nameOne.substring(0, 3)}{this.props.year}
                </div>
                <div>
                    #{this.props.nameTwo.substring(0, 4)}{this.props.nameOne.substring(0, 4)}
                </div>
                <div>
                    #{this.props.nameTwo.substring(0, 4)}{this.props.nameOne.substring(0, 3)}
                </div>
            </div>
        )
    }

}

export default GeneratorCore;
