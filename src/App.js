import { Wine_Data_Set } from "./Utils/ConstantData";
import FlavanoidTable from "./Component/FlavanoidTable";
import GammaTable from "./Component/GammaTable";
import './App.css'
import { useEffect, useState } from "react";
function App() {
  const [filterValue,setFilterValue]=useState({})
  let filterObject={}
  let gamma={}
  const onLoad=()=>{
    Wine_Data_Set.forEach(element =>{
      let gammaValue=Math.round(((element.Ash)*(element.Hue)/(element.Magnesium))*1000)/1000
      const flavanoidValue=Math.round(Number(element.Flavanoids)*1000)/1000
      if(filterObject.hasOwnProperty([element.Alcohol]) ){
        filterObject[element.Alcohol].count+=1
        filterObject[element.Alcohol].flavanoid.sum=Math.round(Number((filterObject[element.Alcohol].flavanoid.sum+flavanoidValue))*1000)/1000
        filterObject[element.Alcohol].flavanoid.medianArray.push(flavanoidValue)
        if(filterObject[element.Alcohol].flavanoid.modeObject.hasOwnProperty([flavanoidValue])){
           filterObject[element.Alcohol].flavanoid.modeObject[flavanoidValue]++
        }
        else{
           filterObject[element.Alcohol].flavanoid.modeObject[flavanoidValue]=1
        }

        filterObject[element.Alcohol].gamma.sum=Number(filterObject[element.Alcohol].gamma.sum+gammaValue)
        filterObject[element.Alcohol].gamma.medianArray.push(gammaValue)
        if(filterObject[element.Alcohol].gamma.modeObject.hasOwnProperty([gammaValue])){
           filterObject[element.Alcohol].gamma.modeObject[gammaValue]++
        }
        else{
           filterObject[element.Alcohol].gamma.modeObject[gammaValue]=1
        }
      }
      else{
        let mode={}
        let gammaMode={}
        gammaMode[gammaValue]=1
        mode[flavanoidValue]=1
        filterObject[element.Alcohol]={
          count:1,
          flavanoid:{
            sum:element.Flavanoids,
            medianArray:[flavanoidValue],
            modeObject:mode
          },
          gamma:{
            sum:gammaValue,
            medianArray:[gammaValue],
            modeObject:gammaMode
          }
        } 
      }
    });
    setFilterValue(filterObject)
  }
  useEffect(()=>{
    onLoad()
  },[Wine_Data_Set])
  return (
    <div className="App">
      {Object.keys(filterValue).length===0 && 'Loading'}
      {Object.keys(filterValue).length >0 && <FlavanoidTable data={filterValue} key={1}/>}
      {Object.keys(filterValue).length>0 && < GammaTable data={filterValue} key={2}/>}
    </div>
  );
}

export default App;
