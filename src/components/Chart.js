import React from 'react';
import MyD3Component from './chart/BarChart_hook';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const vizData = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2500, amt: 2500}, {name: 'Page C', uv: 200, pv: 2200, amt: 2200}];

const Chart = () => {
    return (
        <>
            <div>
                <MyD3Component data={[1,2,3]}/>
            </div>
            <div>
                <BarChart width={400} height={400} data={vizData}>
                    <Bar type="monotone" dataKey="uv" fill="#8884d8" />\
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </div>
        </>
    )
};

export default Chart;