import React from 'react'
import { CalculateMedian } from "../Utils/CalculateMedian";
import { CalculateMode } from "../Utils/CalculateMode";
function GammaTable(props) {  
    const{data}=props  
    let title=[<th>Measure</th>]
    let mean=[<td className='colhead'>Gamma Mean</td>]
    let median=[<td className='colhead'>Gamma Median</td>]
    let mode=[<td className='colhead'>Gamma Mode</td>]
    for (const key in data) {
        title.push(<th>Class {key}</th>)
        mean.push(<td>{(data[key].gamma.sum)/(data[key].count)}</td>)
        median.push(<td>{CalculateMedian(data[key].gamma.medianArray)}</td>)
        mode.push(<td>{CalculateMode(data[key].gamma.modeObject)}</td>)
    } 
    return (
        <div className='table' >
            <label style={{padding:'10px',backgroundColor:'gray',margin:'10px'}}> 
                Gamma Table
            </label>
            <table >
                <thead>
                    <tr>
                        {title}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {mean}
                    </tr>
                    <tr>
                       {median} 
                    </tr>
                    <tr>
                        {mode}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default GammaTable
