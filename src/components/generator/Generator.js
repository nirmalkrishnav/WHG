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
            <input value={nameOne} name="nameOne" onChange={e => setNameOne(sentenseCase(e.target.value))} />
            <input value={nameTwo} name="nameTwo" onChange={e => setNameTwo(sentenseCase(e.target.value))} />
            <input value={year} name="year" onChange={e => setYear(e.target.value)} />

            <GeneratorCore nameOne={nameOne} nameTwo={nameTwo} year={year} />
        </div>
    )
}

export default Generator;