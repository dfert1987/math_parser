import React from 'react';
import Finger from '../assets/fingerpointr.jpeg';
import Texting from '../assets/textingbub.jpeg';
import Video from '../assets/videoicon.png';

function DisplayRow({ type, data, lesson }) {
    const getImage = () => {
        if (type === 'Manipulatives') {
            return <img src={Finger} alt='Finger Icon' />;
        }
        if (type === 'Routines') {
            return <img src={Texting} alt='Text Icon' />;
        }
        if (type === 'Extra') {
            return <img src={Video} alt='Video Icon' />;
        }
    };

    if (data.length) {
        return (
            <div className='cardRow'>
                {data.map((item, key) => {
                    const ofLesson = (item) => {
                        if (item.L2 === lesson) {
                            return 'true';
                        }
                        return 'false';
                    };
                    return (
                        <a href={item.URI}>
                            <div
                                className={`card ${type} ${ofLesson(item)}`}
                                id={key}>
                                <div className='innerCard'>
                                    {getImage()}
                                    <h4 className='cardText'>
                                        {item.DisplayTitle.toString()}
                                    </h4>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        );
    }
}

export default DisplayRow;
