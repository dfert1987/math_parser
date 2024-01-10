import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Display from './Display';
import StevePic from '../assets/steve.jpeg';

function MainDisplay({ data }) {
    const params = useParams();
    const navigate = useNavigate();

    const [mod, setMod] = useState(2);
    const [less, setLess] = useState(1);
    console.log(mod);

    const handleMod = (direction) => {
        if (direction === 'back') {
            if (mod > 1) {
                let modMinus = mod - 1;
                navigate('/lessons/' + modMinus.toString() + '/1');
                setMod(mod - 1);
                setLess(1);
            }
        }
        if (direction === 'forward') {
            let modPlus = mod + 1;
            navigate('/lessons/' + modPlus.toString() + '/1/');
            setMod(mod + 1);
            setLess(1);
        }
    };

    const handleLesson = (direction) => {
        console.log(less);
        if (direction === 'back') {
            console.log(less);
            if (less > 1) {
                let lessonMinus = less - 1;
                navigate(
                    '/lessons/' +
                        mod.toString() +
                        '/' +
                        lessonMinus.toString() +
                        '/'
                );
                setLess(less - 1);
            }
        }
        if (direction === 'forward') {
            let lessonPlus = less + 1;
            navigate(
                '/lessons/' + mod.toString() + '/' + lessonPlus.toString() + '/'
            );
            setLess(less + 1);
        }
    };

    if (data.length) {
        return (
            <div className='mainDisplayContainer'>
                <header className='mainHeader'>
                    <div>
                        <h1 className='mainTitle'>Lesson Resources</h1>
                        <div className='buttonSection'>
                            <div className='moduleButtons'>
                                <h2>Module {params.module} </h2>
                                <div className='buttonsContainer'>
                                    <button
                                        className='leftButton'
                                        onClick={() => handleMod('back')}>
                                        Back
                                    </button>
                                    <button
                                        onClick={() => handleMod('forward')}>
                                        Forward
                                    </button>
                                </div>
                            </div>
                            <div className='moduleButtons'>
                                <h2>Lesson {params.lesson} </h2>
                                <div className='buttonsContainer'>
                                    <button
                                        className='leftButton'
                                        onClick={() => handleLesson('back')}>
                                        Back
                                    </button>
                                    <button
                                        onClick={() => handleLesson('forward')}>
                                        Forward
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={StevePic} alt='Steve' />
                </header>
                <Display data={data} lesson={less} module={mod} />
            </div>
        );
    } else {
        return (
            <>
                <h1 className='noExcel'>Please upload a valid Excel file</h1>
            </>
        );
    }
}

export default MainDisplay;

{
    /* <div className='selectSection'>
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
                </div> */
}

// const onSelect = (e, dropType, option) => {
//     e.preventDefault();
//     if (dropType === 'grade') {
//         setGrade(option);
//         setLesson();
//         setModule();
//         setLessonOptions([]);
//         setFilteredDataGrade([]);

//         let removeUndefined = data.filter((item) => item.L1 !== undefined);

//         let filteredStrings = removeUndefined.map((obj) =>
//             Object.fromEntries(
//                 Object.entries(obj).map(([key, value]) => [key, `${value}`])
//             )
//         );

//         let justMods = filteredStrings.map((item) => item.L1);

//         let noDuplicateMods = [];

//         justMods.forEach((item) => {
//             if (!noDuplicateMods.includes(item)) {
//                 noDuplicateMods.push(item);
//             }
//         });

//         setFilteredDataGrade(filteredStrings);
//         setModuleOptions(noDuplicateMods);
//     }
//     if (dropType === 'module') {
//         setLesson();
//         setLessonOptions([]);
//         setFilteredDataMods([]);

//         let lessonsOfModule = filteredDataGrade.filter(
//             (item) => item.L1 === option
//         );

//         let removeUndefined = lessonsOfModule.filter(
//             (item) => item.L2 !== undefined
//         );
//         setFilteredDataMods(removeUndefined);

//         let justLessons = removeUndefined.map((item) => item.L2);

//         let noDuplicateLessons = [];

//         justLessons.forEach((item) => {
//             if (!noDuplicateLessons.includes(item)) {
//                 noDuplicateLessons.push(item);
//             }
//         });
//         setLessonOptions(noDuplicateLessons);
//     }
//     if (dropType === 'lesson') {
//         let filterLesson = filteredDataMods.filter(
//             (item) => item.L2 === option
//         );
//         setLessonDisplayData(filterLesson);
//         setLesson(option);
//     }
// };
