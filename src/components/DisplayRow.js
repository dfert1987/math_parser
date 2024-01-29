import React from 'react';

function DisplayRow({ data, type }) {
    const getImage = () => {
        if (type === 'manip') {
            return (
                <img
                    src={require(`../assets/fingerpointr.jpeg`)}
                    alt='card icon'
                />
            );
        }
        if (type === 'routines') {
            return (
                <img
                    src={require(`../assets/textingbub.jpeg`)}
                    alt='card icon'
                />
            );
        }
        if (type === 'extra') {
            return (
                <img src={require(`../assets/videoicon.png`)} alt='card icon' />
            );
        }
    };

    const getCards = () => {
        return data.map((item, index) => {
            return (
                <div className='card' key={index}>
                    {getImage()}
                    {/* <img
                        src={require(`../assets/fingerpointr.jpeg`)}
                        alt='card icon'
                    /> */}
                </div>
            );
        });
    };

    return <>{data.length && <div className='displayRow'>{getCards()}</div>}</>;
}

export default DisplayRow;
