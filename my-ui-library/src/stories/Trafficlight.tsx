import React from 'react';
import './button.css';

type Props = {
    varient?: 'green' | 'yellow' | 'red'
};

export const Trafficlight = ({varient = 'green'} : Props)=>{
    return(
        <div
            style={{
            background: varient,
            borderRadius: '50%',
            width:50,
            height:50
            }}>
        </div>
    )
}