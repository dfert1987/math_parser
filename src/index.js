import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);




//     // innitialize max profit at zero
//     let maxProf = 0;
 
    

//     // if less than 2 return 0
//     if (prices.length < 2) {
//         return 0
//     }

// // loop through array starting at first number. this is to loop through for the buy prices.
//     for(let b=0; b < prices.length; b++) {

// // in the for loop of the buy prices we want to loop through the sell prices. start at number after buy. 
//     for(let s=b+1; s < prices.length; s++) {
// // subtract the second number from the first number to see what the profit is.
//         let profit = prices[s] - prices[b];
// // if this profit is greater than the max we have change the max to the prof
//         if (profit > maxProf) {
//             maxProf = profit
//         }

//     }

//     }

//     return maxProf;