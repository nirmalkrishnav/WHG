import React, { useState } from 'react';
import GeneratorCore from './GeneratorCore/GeneratorCore';
import { sentenseCase } from './../../helpers';

const Generator = (props) => {

    const [nameOne, setNameOne] = useState('Prakathy');
    const [nameTwo, setNameTwo] = useState('Harisk');
    const [year, setYear] = useState(() => {
        let d = new Date();
        return d.getFullYear().toString();
    });
    const [extraWord, setExtraWord] = useState('Kalyanam');


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
                        <label className="dc-label" htmlFor="year">Year</label>
                        <input value={year} className="dc-input" type="number" id="year" placeholder="e. g. Year" onChange={e => setYear(e.target.value)} />
                    </div>
                </div>
                <div className="dc-column">
                    <div className="dc-column__contents dc-column__contents--center">
                        <label className="dc-label" htmlFor="extraWord">Anythin else?</label>
                        <input value={extraWord} className="dc-input" type="text" id="extraWord" placeholder="e. g. Hitched" onChange={e => setExtraWord(e.target.value)} />
                    </div>
                </div>


            </div>
          
            <div className="dc-row">
                <GeneratorCore nameOne={nameOne} nameTwo={nameTwo} year={year} extraWord={extraWord} />
            </div>
        </div>
    )
}

export default Generator;