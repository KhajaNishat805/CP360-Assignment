import React from 'react';
import './Home.css'
import { CustomDropdown } from './commons/CustomDropdown';
export const Home=()=> {
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
      ];
    return (
        <div className='drop-down '>           
                <CustomDropdown
                optionList={optionList}
                onChange={(selectedOption)=>console.log(selectedOption)}
                />
               
        </div>
    );
}

