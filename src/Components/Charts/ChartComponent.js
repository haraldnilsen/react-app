import Highcharts, { color } from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';

const ChartComponent = (props) => {
    const climbs = props.climbs;
    const tittel = props.tittel;
    const navn = props.navn;
    const [chart, setChart] = useState("column");

    function filterData () {
        let resultat = new Map();

        //creates a map with the grades as keys and amount of climbs as value
        for (let i = 0; i < climbs.length; i++) {
            let grade = climbs[i].grade;
            if (resultat.has(grade) === false) {
                resultat.set(grade, 1);
            } else {
                resultat.set(grade, resultat.get(grade) + 1)
            }
        } 
        
        //sorts the rsesult so that the order is shown with grade ascending
        let resultatet = new Map([...resultat].sort((a,b) => String(a[0].localeCompare(b[0]))));

        return resultatet;
    }
    
    const options = {
        chart: {
            type: chart
        },
        title: {
            text: ""
        },
        xAxis: {
            categories: [... filterData().keys()]
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        series: [{
            name: navn,
            data: [... filterData().values()],
            color: '#38b000'
        }]
        
    }
    
    return (
        <div className='shadow'>
            <h2 className='py-8 text-2xl flex justify-center font-extrabold text-secondary'>{tittel}</h2>
            <div className='flex justify-start pl-16 '>
                <select name="bartype" className='formelement--select border-none shadow-lg p-3 bg-gray-50' onChange={(e) => setChart(e.target.value)}>
                        <option value="column">Column</option>
                        <option value="bar">Bar</option>
                        <option value="area">Area</option>
                </select>
            </div>
            <div className='pt-5'>
                <div>
                    <HighchartsReact
                    highcharts={Highcharts}
                    options={options}/>
                </div>
            </div>
        </div>
    );
};


export default ChartComponent;