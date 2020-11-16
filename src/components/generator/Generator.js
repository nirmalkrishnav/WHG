import React, { useState } from 'react';
import GeneratorCore from './GeneratorCore/GeneratorCore';

const Generator = (props) => {

    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [year, setYear] = useState('');

    const sentenseCase = (val) => {
        val = val[0].toUpperCase() + val.substring(1);
        return val;
    }

    return (
        <div>
            <input name="nameOne" onChange={e => setNameOne(sentenseCase(e.target.value))} />
            <input name="nameTwo" onChange={e => setNameTwo(sentenseCase(e.target.value))} />
            <input name="year" onChange={e => setYear(e.target.value)} />

            <GeneratorCore nameOne={nameOne} nameTwo={nameTwo} year={year} />
        </div>
    )
}

export default Generator;