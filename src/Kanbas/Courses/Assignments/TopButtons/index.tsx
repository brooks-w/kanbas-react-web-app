
import React from 'react';
import './index.css';
import { CiMenuKebab } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';

function TopAssignmentButtons() {
    return (
        <div className="assignment-container">
            <input className="assignment-input" placeholder="Search for Assignments" />
            <button className="assignment-button"><FaPlus style={{marginRight: "1px",}}/> Group</button>
            <button className="assignment-button red"><FaPlus style={{marginRight: "3px"}}/>Assignment</button>
            <button className='kebab-button'><CiMenuKebab style={{color: "black", fontSize: '20px'}}/> </button>
            </div>
    );
}

export default TopAssignmentButtons;
