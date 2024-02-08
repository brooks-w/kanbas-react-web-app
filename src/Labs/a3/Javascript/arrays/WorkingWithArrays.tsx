function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let todos = [<li>Buy Milk</li>, <li>Buy Bread</li>, <li>Buy Cheese</li>]

    let todos2 = numberArray1.map((number) => <li>Todo {number}</li>)
    
    let variableArray1 = [
       functionScoped,   
       blockScoped,
       constant1,        
       numberArray1,   
       stringArray1
    ];

    //arrays don't need the same datatypes

    return (
        <>
        <h4>Working with Arrays</h4>
        numberArray1 = {numberArray1}<br/>
        stringArray1 = {stringArray1}<br/>
        variableArray1 = {variableArray1}<br/>
        <ul>{todos}</ul>
        <ul>{todos2}</ul>
        </>
    )
    
}

export default WorkingWithArrays;