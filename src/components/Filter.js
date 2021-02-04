function Filter({ isGreased, nameSort, weightSort, onGreasedSort, onNameSort, onWeightSort }){
    return (
        <div>
            <select name="type" id="greased" value={isGreased} onChange={(e) => {onGreasedSort(e.target.value)}} >
                <option value="all">All</option>
                <option value= "true" >Greased</option>
                <option value="false">Ungreased</option>
            </select>
            <select name="type" id="nameSort" value={nameSort} onChange={(e)=>onNameSort(e.target.value)}> 
                <option value="alphabetically">A-Z</option>
                <option value="reverse">Z-A</option>
            </select>
            <select name="type" id="weightSort" value={weightSort} onChange={(e)=>onWeightSort(e.target.value)}> 
                <option value="lowHigh">Lowest-Highest</option>
                <option value="highLow">Highest-Lowest</option>
            </select>
            {/* <button onClick={filterHogs}>Find Pig!</button> */}
        </div>
    );
} 

export default Filter;