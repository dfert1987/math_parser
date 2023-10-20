import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import StevePic from '../assets/steve.jpeg';

function MainDisplay({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [mainLesson, setMainLesson] = useState({});
    const [grade, setGrade] = useState(1);
    const [module, setModule] = useState('');
    const [lesson, setLesson] = useState('');
    const [moduleOptions, setModuleOptions] = useState([]);
    const [lessonOptions, setLessonOptions] = useState([]);

    const gradeOptions = [1, 2, 3, 4];

    useEffect(() => {
        if (data.length) {
            setFilteredData(data);
            setMainLesson(data[0]);
            setGrade(data[0].Grade);
            setModule(data[0].L1);
            setLesson(data[0].L2);
        }
    }, [data]);

    const onSelect = (dropType, option) => {
        if (dropType === 'grade') {
            setGrade(option);
        }
    };

    console.log(grade);
    if (data.length) {
        return (
            <div className='mainDisplayContainer'>
                <header className='mainHeader'>
                    <h1 className='mainTitle'>Lesson Resources</h1>
                    <img src={StevePic} alt='Steve' />
                </header>
                <h2 className='filterTitle'>Select a Lesson</h2>
                <Dropdown>
                    <Dropdown.Toggle variant='primary' id='dropdown-basic'>
                        {grade || 'Select a Grade'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {gradeOptions.map((option) => (
                            <Dropdown.Item
                                key={option}
                                onClick={() => onSelect('grade', option)}>
                                {option}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <div className='selectionTitleContainer'>
                    <h2 className='lessonGrade'>Grade {mainLesson.Grade}</h2>
                    {mainLesson.L1 && (
                        <h2 className='lessonMod'>Module: {mainLesson.L1} </h2>
                    )}
                    {mainLesson.L2 && (
                        <h2 className='lessonL'>Lesson: {mainLesson.L2}</h2>
                    )}
                    <h2 className='lessonGrade'>{mainLesson.DisplayTitle}</h2>
                </div>
            </div>
        );
    }
}

export default MainDisplay;
