import React, { useState, useEffect } from 'react';

function Display({ data, lesson, module }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let stringLesson = lesson.toString();
        let stringMod = module.toString();
        let filteredArray = data.filter(
            (item) => item.L1 === stringMod && item.L2 === stringLesson
        );

        console.log(filteredArray);
    }, [data, lesson, module]);

    return <div></div>;
}

export default Display;
