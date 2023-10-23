import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import StevePic from '../assets/steve.jpeg';
import { DropdownButton } from 'react-bootstrap';

function MainDisplay({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [filteredDataMods, setFilteredDataMods] = useState([]);
    const [mainLesson, setMainLesson] = useState({});
    const [grade, setGrade] = useState();
    const [module, setModule] = useState();
    const [lesson, setLesson] = useState();
    const [moduleOptions, setModuleOptions] = useState([]);
    const [lessonOptions, setLessonOptions] = useState([]);

    const gradeOptions = [1, 2, 3, 4];

    useEffect(() => {
        if (data.length) {
            setMainLesson(data[0]);

            // setGrade(data[0].Grade);
            // setModule(data[0].L1);
            // setLesson(data[0].L2);
        }
    }, [data]);

    // console.log(data);

    const onSelect = (e, dropType, option) => {
        if (dropType === 'grade') {
            setGrade(option);

            let newData = data.filter((item) => item.Grade === option);
            console.log(newData);
            setFilteredData(newData);
            const newModules = newData.map((item) => item.L1);
            const strings = newModules.map(String);

            let noDups = [];
            strings.forEach((element) => {
                if (element !== 'undefined' && !noDups.includes(element)) {
                    noDups.push(element);
                }
            });
            // setModuleOptions(noDups);
            // setFilteredData(newData);
        }
        if (dropType === 'module') {
            // console.log(option);
            setModule(option);
            console.log(filteredData);
            const newData = filteredData.filter((item) => item.L1 === option);
            console.log(newData);
            setFilteredDataMods(newData);
            const newLessons = newData.map(
                (item) => item['L2 Title']
            );
            console.log(newLessons);

            let noDups = [];
            newLessons.forEach((element) => {
                if (element !== undefined && !noDups.includes(element)) {
                    noDups.push(element);
                }
            });
            setLessonOptions(noDups);
        }
    };

    if (data.length) {
        return (
            <div className='mainDisplayContainer'>
                <header className='mainHeader'>
                    <h1 className='mainTitle'>Lesson Resources</h1>
                    <img src={StevePic} alt='Steve' />
                </header>
                <div className='selectSection'>
                    <h2 className='filterTitle'>Select a Lesson</h2>
                    <div className='dropsContainer'>
                        <div className='dropCont'>
                            <label htmlFor='grade'>Grade</label>
                            <select
                                id='grade'
                                placeholder='Grade'
                                value={grade}
                                onChange={(e) =>
                                    onSelect(e, 'grade', e.target.value)
                                }>
                                <option value='' selected disabled>
                                    Grade
                                </option>

                                {gradeOptions.map((option) => (
                                    <option value={option} key={option + 1}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='dropCont'>
                            <label htmlFor='module'>Module</label>
                            <select
                                id='module'
                                placeholder='Module'
                                value={module}
                                onChange={(e) =>
                                    onSelect(e, 'module', e.target.value)
                                }>
                                <option value='' selected disabled>
                                    Module
                                </option>
                                {moduleOptions.map((option) => (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='dropCont'>
                            <label htmlFor='lesson'>Lesson</label>
                            <select
                                id='lesson'
                                placeholder='Lesson'
                                value={lesson}
                                onChange={(e) =>
                                    onSelect('lesson', e.target.value)
                                }>
                                <option value='' selected disabled>
                                    Lesson
                                </option>
                                {lessonOptions.map((option) => (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
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
