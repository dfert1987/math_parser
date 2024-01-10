import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';

function ExcelReader({ setData }) {
    const [error, setError] = useState(false);

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
                setData(d);
                navigate('/lessons/2/1/');
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
