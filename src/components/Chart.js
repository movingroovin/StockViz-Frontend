import React from 'react';
import MyD3Component from './chart/BarChart_hook'

const Chart = () => {
    return (
        <div>
            <MyD3Component data={[1,2,3]}/>
        </div>
    )
};

export default Chart;