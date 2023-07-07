import React from 'react'
import { CalculateMedian } from '../Utils/CalculateMedian';
import { CalculateMode } from '../Utils/CalculateMode';
function FlavanoidTable(props) {
    let title=[<th>Measure</th>]
    let mean=[<td className='colhead'>Flavanoids Mean</td>]
    let median=[<td className='colhead'>Flavanoids Median</td>]
    let mode=[<td className='colhead'>Flavanoids Mode</td>]
    const{data}=props
    for (const item in data) {
        title.push(<th key={`t_${item}`} >Class {item}</th>)
        mean.push(<td key={`mean_${item}`}>{(data[item].flavanoid.sum)/(data[item].count)}</td>)
        median.push(<td key={`md_${item}`}>{CalculateMedian(data[item].flavanoid.medianArray)}</td>)
        mode.push(<td key={`mo_${item}`}>{CalculateMode(data[item].flavanoid.modeObject)}</td>)
    } 
    return (
        <div className='table'>
            <label style={{padding:'10px',backgroundColor:'gray',margin:'10px'}}>
                Flavanoids Table
            </label>
            <table >
                <thead><tr>{title}</tr></thead>
                <tbody>
                    <tr className='row'>
                        {mean}
                    </tr>
                    <tr className='row'>
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
export  default FlavanoidTable
