import React, { useState } from 'react';
import GeneratorCore from './GeneratorCore/GeneratorCore';

const Generator = (props) => {

    const [nameOne, setNameOne] = useState('John');
    const [nameTwo, setNameTwo] = useState('Jill');
    const [year, setYear] = useState(() => {
        let d = new Date();
        return d.getFullYear().toString();
    });

    const sentenseCase = (val) => {
        if (val !== null && val.length < 1) {
            return ''
        }

        val = val[0].toUpperCase() + val.substring(1);
        return val;
    }

    return (
        <div>

            <div className="dc-row dc-card">
                <div className="dc-column">
                    <div className="dc-column__contents dc-column__contents--center">
                        <label className="dc-label" htmlFor="yourName">Your Name</label>
                        <input value={nameOne} className="dc-input" type="text" id="yourName" placeholder="e. g. Your name" onChange={e => setNameOne(sentenseCase(e.target.value))} />
                    </div>
                </div>
                <div className="dc-column">
                    <div className="dc-column__contents dc-column__contents--center">
                        <label className="dc-label" htmlFor="partnerName">Partner Name</label>
                        <input value={nameTwo} className="dc-input" type="text" id="partnerName" placeholder="e. g. Partner's name" onChange={e => setNameTwo(sentenseCase(e.target.value))} />
                    </div>
                </div>
                <div className="dc-column">
                    <div className="dc-column__contents dc-column__contents--center">
                        <label className="dc-label" htmlFor="year">Partner Name</label>
                        <input value={year} className="dc-input" type="number" id="year" placeholder="e. g. Year" onChange={e => setYear(e.target.value)} />
                    </div>
                </div>
            </div>


            <GeneratorCore nameOne={nameOne} nameTwo={nameTwo} year={year} />
        </div>
    )
}

export default Generator;