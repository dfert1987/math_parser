import React, { useState } from 'react';
import DisplayLesson from './DisplayLesson';
import StevePic from '../assets/steve.jpeg';

function MainDisplay({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [filteredDataMods, setFilteredDataMods] = useState([]);
    const [grade, setGrade] = useState();
    const [module, setModule] = useState();
    const [lesson, setLesson] = useState();
    const [moduleOptions, setModuleOptions] = useState([]);
    const [lessonOptions, setLessonOptions] = useState([]);
    const [lessonDisplayData, setLessonDisplayData] = useState([]);
    const [getItools, setGetItools] = useState([]);

    const onSelect = (e, dropType, option) => {
        e.preventDefault();
        if (dropType === 'grade') {
            setGrade(option);
            setLesson();
            setModule();
            setFilteredDataMods([]);
            setLessonOptions([]);

            let removeUndefined = data.filter((item) => item.L1 !== undefined);

            let filteredStrings = removeUndefined.map((obj) =>
                Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key, `${value}`])
                )
            );

            let justItool = filteredStrings.filter(
                (item) => item['Product Label'] === 'iTools'
            );

            let justMods = filteredStrings.map((item) => item.L1);

            let noDuplicateMods = [];

            justMods.forEach((item) => {
                if (!noDuplicateMods.includes(item)) {
                    noDuplicateMods.push(item);
                }
            });

            setGetItools(justItool);
            setFilteredData(filteredStrings);
            setModuleOptions(noDuplicateMods);
        }
        if (dropType === 'module') {
            let lessonsOfModule = filteredData.filter(
                (item) => item.L1 === option
            );

            let removeUndefined = lessonsOfModule.filter(
                (item) => item.L2 !== undefined
            );

            let justLessons = removeUndefined.map((item) => item.L2);

            let noDuplicateLessons = [];

            justLessons.forEach((item) => {
                if (!noDuplicateLessons.includes(item)) {
                    noDuplicateLessons.push(item);
                }
            });

            console.log(noDuplicateLessons);
        }
        if (dropType === 'lesson') {
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

                                <option value={1} key={1}>
                                    {1}
                                </option>
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
                                    onSelect(e, 'lesson', e.target.value)
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
                <hr className='divider' />
                <DisplayLesson
                    data={lessonDisplayData}
                    itools={getItools}
                    ofMod={filteredDataMods}
                />
            </div>
        );
    } else {
        return (
            <>
                <h1>Please add a valid Excel file</h1>
            </>
        );
    }
}

export default MainDisplay;
