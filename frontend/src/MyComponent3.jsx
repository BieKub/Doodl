import React, {useState} from 'react'

function MyComponent3(){
    const [foods, setFoods] = useState(["apple", "orange", "banana"])

        function handleAddFood(){
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "" //reset input box

            setFoods(f => [...f, newFood])
            

        }

        function handleRemoveFood(index){
            setFoods(foods.filter((_, i) => i!== index))
        }

        return(
            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food} </li>)}
                </ul>
                <input type='text' id="foodInput" placeholder='enter food name'></input>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        )
    
}

export default MyComponent3