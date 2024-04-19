import React from 'react';
import './ExamTimer.css';

const ExamTimer: React.FC = () => {
    return (
        <>
            <div className="exam-timer">
                <h1 className='exam-heading'>EXAM TIMER</h1>
                <input className='exam-input' type='text' placeholder='*time in minutes*' />
                <input className='go-btn' type='button' value='Go' />
            </div>
        </>
    );
};

export default ExamTimer;
