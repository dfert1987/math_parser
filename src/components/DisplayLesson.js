import React, { useEffect, useState } from 'react';
import DisplayRow from './DisplayRow';

function DisplayLesson({ modData, data }) {
    const [iTools, setItools] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [videos, setVideos] = useState([]);
    const [sampleLesson, setSampleLesson] = useState();

    useEffect(() => {
        if (modData && data) {
            let justItools = modData.filter(
                (item) => item['Product Label'] === 'iTools'
            );
            setItools(justItools);

            let justRoutines = modData.filter(
                (item) => item['Product Label'] === 'Math Routine'
            );
            setRoutines(justRoutines);

            let justVideos = modData.filter(
                (item) =>
                    item['Product Label'] ===
                    'Math on the Spot Video: Lesson Support'
            );
            setVideos(justVideos);

            setSampleLesson(data[0]);
        }
    }, [data, modData]);

    console.log(sampleLesson);
    return (
        <div className='lessonContainer'>
            {sampleLesson ? (
                <div className='lessonTitleContainer'>
                    <h2 className='gradeTitle'>Grade {sampleLesson.Grade}</h2>
                    <h2 className='moduleTitle'>
                        Module {sampleLesson.L1} - {sampleLesson['L1 Title']}
                    </h2>

                    <h2 className='moduleTitle'>
                        Lesson {sampleLesson.L2} - {sampleLesson['L2 Title']}
                    </h2>
                </div>
            ) : null}

            <div className='lessonSection'>
                <h3 className='sectionTitle manip'>Digital Manipulatives</h3>
                <DisplayRow
                    type='Manipulatives'
                    data={iTools}
                    lesson={data.L2}
                />
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle routines'>
                    Mathematical Language Routines
                </h3>
                <DisplayRow type='Routines' data={routines} lesson={data.L2} />
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle extra'>Extra Support</h3>
                <DisplayRow type='Extra' data={videos} lesson={data.L2} />
            </div>
        </div>
    );
}

export default DisplayLesson;
