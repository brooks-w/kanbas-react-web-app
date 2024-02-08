import Assignment3 from "./a3";
import Assignment4 from "./a4";

function Labs () {
    return (
    <>  
    <h1>Labs</h1>
    <Assignment3 />
    <Assignment4 />
    </>
    )
}

export function Add(a: number, b: number) {
    return a + b;
}

export default Labs;