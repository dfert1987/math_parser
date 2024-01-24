import React, { useEffect, useState } from 'react';
import Finger from '../assets/fingerpointr.jpeg';
import Texting from '../assets/textingbub.jpeg';
import Video from '../assets/videoicon.png';

function DisplayRow({ data, type }) {

    
    useEffect(() => {
        let rowItems = [];

        if (type === 'manip') {
            data.forEach((item) => {
                if (item['Product Label'] === 'iTools') {
                    rowItems.push(item);
                }
            });
        }
        if (type === 'routines') {
            data.forEach((item) => {
                if (item['Product Label'] === 'Math Routine') {
                    rowItems.push(item);
                }
            });
        }
        if (type === 'extra') {
            data.forEach((item) => {
                if (
                    item['Product Label'] ===
                    'Math on the Spot Video: Lesson Support'
                ) {
                    rowItems.push(item);
                }
            });
        }
    }, [data, type]);

    if (data.length) {
        return <div className='displayRow'></div>;
    }
}

export default DisplayRow;
