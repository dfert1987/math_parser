import React, { useEffect, useState } from 'react';
import DisplayRow from './DisplayRow';

function DisplayLesson({ data, modData }) {
    const [iTools, setItools] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (modData && data) {
            let modItools = modData.filter(
                (item) => item['Product Label'] === 'iTools'
            );
            setItools(modItools);

            let justRoutines = data.filter(
                (item) => item['Product Label'] === 'Math Routine'
            );
            console.log(justRoutines);
            setRoutines(justRoutines);
        }
    }, [data, modData]);

    return (
        <div className='lessonContainer'>
            <div className='lessonSection'>
                <h3 className='sectionTitle manip'>Digital Manipulatives</h3>
                <DisplayRow type='Manipulatives' data={iTools} />
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle routines'>
                    Mathematical Language Routines
                </h3>
                <DisplayRow type='Routines' />
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle extra'>Extra Support</h3>
                <DisplayRow type='Extra' />
            </div>
        </div>
    );
}

export default DisplayLesson;
