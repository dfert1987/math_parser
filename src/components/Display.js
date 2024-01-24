import React, { useState, useEffect } from 'react';
import DisplayRow from './DisplayRow';

function Display({ data, lesson, module }) {
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        let stringLesson = lesson.toString();
        let stringMod = module.toString();
        let filteredArray = data.filter(
            (item) => item.L1 === stringMod && item.L2 === stringLesson
        );
        setFilteredData(filteredArray);
    }, [data, lesson, module]);

    return (
        <div className='displayContainer'>
            <div className='sectionContainer manip'>
                <h3 className='sectionTitle manip'>Digital Manipulatives</h3>
                <DisplayRow data={filteredData} type='manip' />
            </div>
            <div className='sectionContainer routines'>
                <h3 className='sectionTitle routines'>
                    Mathematical Language Routines
                </h3>
                <DisplayRow data={filteredData} type='routines' />
            </div>
            <div className='sectionContainer extra'>
                <h3 className='sectionTitle extra'>Extra Support</h3>
            </div>
            <DisplayRow data={filteredData} type='extra' />
        </div>
    );
}

export default Display;
