import React, { useState } from "react";
import Nav from "./Nav";
import Filter from './Filter';
import PigList from './PigList';
import hogs from "../porkers_data";

function App() {
  const [ hogArr, setHogArr ] = useState(hogs)
  const [ isGreased, setIsGreased ] = useState("all")
  const [ nameSort, setNameSort ] = useState("alphabetically")
  const [ weightSort, setWeightSort ] = useState("lowHigh")

  function onGreasedSort(e){
    if (e === "true"){
      setIsGreased(true)
      setHogArr(hogs.filter((hog) => (hog.greased === true)))
    } else if (e === "false"){
      setIsGreased(false)
      setHogArr(hogs.filter((hog) => (hog.greased === false)))
    } else {
      setIsGreased("all")
      setHogArr(hogs)
    }
  }
  
  function onNameSort(e){
    if (e === "alphabetically"){
      setNameSort(e)
      setHogArr(hogArr.sort((a,b) => {
        if (a.name > b.name){
          return 1
        } else if (a.name < b.name){
          return -1
        } else {
          return 0
        }
      }))
    } else {
      setNameSort(e)
      setHogArr(hogArr.sort((a,b) => {
        if (a.name > b.name){
          return -1
        } else if (a.name < b.name){
          return 1
        } else {
          return 0
        }
      }))
    }
  }
  
  function onWeightSort(e){
    if (e === "lowHigh"){
      setWeightSort(e)
      setHogArr(hogArr.sort((a,b) => {
        if (a.weight > b.weight){
          return 1
        } else if (a.weight < b.weight){
          return -1
        } else {
          return 0
        }
      }))
    } else {
      setWeightSort(e)
      setHogArr(hogArr.sort((a,b) => {
        if (a.weight > b.weight){
          return -1
        } else if (a.weight < b.weight){
          return 1
        } else {
          return 0
        }
      }))
    }
  }

  return (
    <div className="App">
      <Nav />
      <Filter isGreased={isGreased} nameSort={nameSort} weightSort={weightSort} onGreasedSort={onGreasedSort} onNameSort={onNameSort} onWeightSort={onWeightSort} />
      <PigList hogs={(hogArr)}/>
    </div>
  );
}

export default App;
