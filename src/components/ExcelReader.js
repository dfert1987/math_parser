import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import { saveAs } from 'file-saver';

function ExcelReader({ setData }) {
    const [error, setError] = useState(false);

    var db = new Dexie('excelData');
    db.version(1).stores({
        excel: '++id,DisplayTitle,Grade,L1,L1Label,L1Title,L2,L2Label,L2Title,URI',
    });

    const { excel } = db;

    const sample = useLiveQuery(() => excel.toArray(), []);

    const addExcel = async (filteredData) => {
        await excel.bulkAdd(filteredData);
    };


    const navigate = useNavigate();

    const readExcel = (file) => {
        if (
            file.type ===
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            'application/vnd.ms-excel'
        ) {
            setError(false);
            const promise = new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsArrayBuffer(file);

                fileReader.onload = (e) => {
                    const bufferArray = e.target.result;

                    const wb = XLSX.read(bufferArray, { type: 'buffer' });

                    const wsname = wb.SheetNames[0];

                    const ws = wb.Sheets[wsname];

                    const data = XLSX.utils.sheet_to_json(ws);

                    resolve(data);
                };

                fileReader.onerror = (error) => {
                    reject(error);
                };
            });

            promise.then((d) => {
                let whitespace = new RegExp(/\s/g);

                const noSpaces = d.map((item) => {
                    let modified = {};

                    Object.keys(item).forEach((key) => {
                        let value = item[key];
                        key = key.replace(whitespace, '');
                        modified[key] = value;
                    });
                    return modified;
                });

                const filteredData = noSpaces.map(
                    ({
                        Assign,
                        Description,
                        Excludefromreleasecandidatemanifest,
                        HMHKeywords,
                        GUID,
                        ID,
                        InstructionalPurpose,
                        InstructionalSegment,
                        L1Label,
                        L2Label,
                        L3,
                        L3Label,
                        L3Title,
                        L4,
                        L4Label,
                        L4Title,
                        ManuallyScorable,
                        Markets,
                        MediaType,
                        ProductCategory,
                        ProgramTitle,
                        RecommendedResource,
                        SEFacing,
                        Search,
                        SortOrder,
                        StudentResourcePanel,
                        TeacherManualEntry,
                        TeacherResourcePanel,
                        ...items
                    }) => items
                );

                addExcel(filteredData);            
                setData(filteredData);
                const file = new Blob() 
                navigate('/lessons/1/1/');
            });
        } else setError(true);
    };

    return (
        <div className='excelReaderContainer'>
            <h2 className='ExcelConverterTitle'>Excel Converter</h2>
            <input
                className='file'
                type='file'
                id='file'
                onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }}
            />
            <label className='excelLabel' htmlFor='file'>
                Select a File
            </label>
            {error && (
                <div className='xlsError'>Please choose a valid Excel file</div>
            )}
        </div>
    );
}

export default ExcelReader;
