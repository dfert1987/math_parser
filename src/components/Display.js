import React, { useState, useEffect } from 'react';
import DisplayRow from './DisplayRow';

function Display({ data, lesson, module }) {
    const [filteredData, setFilteredData] = useState([]);
    const [iTools, setItools] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [extra, setExtra] = useState([]);

    useEffect(() => {
        let stringLesson = lesson.toString();
        let stringMod = module.toString();
        let filteredArray = data.filter(
            (item) => item.L1 === stringMod && item.L2 === stringLesson
        );
        setFilteredData(filteredArray);

        let justItools = filteredArray.filter(
            (item) => item.ProductLabel === 'iTools'
        );
        setItools(justItools);

        let justRoutines = filteredArray.filter(
            (item) => item.ProductLabel === 'Math Routine'
        );
        setRoutines(justRoutines);

        let justExtras = filteredArray.filter(
            (item) =>
                item.ProductLabel === 'Math on the Spot Video: Lesson Support'
        );
        setExtra(justExtras);
    }, [data, lesson, module]);

    return (
        <div className='displayContainer'>
            <div className='sectionContainer manip'>
                <h3 className='sectionTitle manip'>Digital Manipulatives</h3>
                <DisplayRow data={iTools} type='manip' />
            </div>
            <div className='sectionContainer routines'>
                <h3 className='sectionTitle routines'>
                    Mathematical Language Routines
                </h3>
                <DisplayRow data={routines} type='routines' />
            </div>
            <div className='sectionContainer extra'>
                <h3 className='sectionTitle extra'>Extra Support</h3>
                <DisplayRow data={extra} type='extra' />
            </div>
        </div>
    );
}

export default Display;
