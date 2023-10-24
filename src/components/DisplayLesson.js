import React, { useEffect, useState } from 'react';

function DisplayLesson({ data, itools, ofMod }) {
    useEffect(() => {
        // console.log(ofMod);
        // console.log(itools);
        const getItools = ofMod.map((item) => item['Product Label']);
        // console.log(getItools);
    }, [data, ofMod]);

    // console.log(data);

    return (
        <div className='lessonContainer'>
            <div className='lessonSection'>
                <h3 className='sectionTitle manip'>Digital Manipulatives</h3>
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle routines'>
                    Mathematical Language Routines
                </h3>
            </div>
            <hr className='divider' />
            <div className='lessonSection'>
                <h3 className='sectionTitle extra'>Extra Support</h3>
            </div>
        </div>
    );
}

export default DisplayLesson;
