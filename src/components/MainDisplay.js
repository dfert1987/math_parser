import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Display from './Display';
import StevePic from '../assets/steve.jpeg';

function MainDisplay({ data }) {
    const params = useParams();
    const navigate = useNavigate();

    const [mod, setMod] = useState(1);
    const [less, setLess] = useState(1);
    const [highestMod, setHighestMod] = useState(1);
    const [highestLesson, setHighestLesson] = useState(0);
    const [stored, setStored] = useState([]);

    useEffect(() => {
        // const storedData = JSON.parse(localStorage.getItem('excel-data'));
        // console.log(storedData);
        let copyMods = [];
        data.forEach((item) => {
            if (item.L1) {
                copyMods.push(Number(item.L1));
            }
        });
        const max = Math.max(...copyMods);
        setHighestMod(max);

        let copyLessons = [];
        data.forEach((item) => {
            if (item.L1 === '1' && item.L2) {
                copyLessons.push(Number(item.L2));
            }
        });
        if (!copyLessons.length) {
            setHighestLesson(0);
        } else {
            const maxLessons = Math.max(...copyLessons);
            setHighestLesson(maxLessons);
        }
    }, [data]);

    const matchMod = (newMod) => {
        let currentMod = [];

        data.forEach((item) => {
            if (Number(item.L1) === newMod) {
                currentMod.push(item);
            }
        });
        const filteredByLesson = currentMod.map((item) => item.L2);
        const onlyNumbers = filteredByLesson.filter(function (item) {
            return !isNaN(item);
        });
        const toNumber = onlyNumbers.map((item) => Number(item));
        const maxLesson = Math.max(...toNumber);
        setHighestLesson(maxLesson);
    };

    const handleMod = (direction) => {
        if (direction === 'back') {
            if (mod > 1) {
                let modMinus = mod - 1;
                navigate('/lessons/' + modMinus.toString() + '/1');
                setMod(mod - 1);
                setLess(1);
                matchMod(modMinus);
            }
        }
        if (direction === 'forward') {
            let modPlus = mod + 1;
            navigate('/lessons/' + modPlus.toString() + '/1/');
            setMod(mod + 1);
            setLess(1);
            matchMod(modPlus);
        }
    };

    const handleLesson = (direction) => {
        if (direction === 'back') {
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

    console.log();

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
                                        disabled={mod < 2}
                                        onClick={() => handleMod('back')}>
                                        Back
                                    </button>
                                    <button
                                        disabled={mod > highestMod - 1}
                                        onClick={() => handleMod('forward')}>
                                        Forward
                                    </button>
                                </div>
                            </div>
                            <div className='moduleButtons'>
                                <h2>
                                    {highestLesson === 0 ? 'NA' : params.lesson}{' '}
                                </h2>
                                <div className='buttonsContainer'>
                                    <button
                                        className='leftButton'
                                        disabled={less < 2}
                                        onClick={() => handleLesson('back')}>
                                        Back
                                    </button>
                                    <button
                                        disabled={
                                            highestLesson === 0 ||
                                            less > highestLesson - 1
                                        }
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
