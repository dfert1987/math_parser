import React from 'react';
import '../';

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
                    <div>{getImage()}</div>
                    <div>
                        <a href={item.URI}>
                            <h4>{item.DisplayTitle}</h4>
                        </a>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            {data.length ? (
                <div className='displayRow'>{getCards()}</div>
            ) : null}
        </>
    );
}

export default DisplayRow;
