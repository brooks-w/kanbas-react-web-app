//import {HashRouter, Link} from 'react-router-dom';
import {Routes, Route, /**Navigate*/} from 'react-router';
import Assignment3 from "./a3";
import Assignment4 from "./a4";


function Labs () {
    return (
    <> 
    <h1>Labs</h1>
    <Routes>
        <Route path="/a3/*" element={<Assignment3/>}/>
        <Route path="/a4/*" element={<Assignment4/>}/>
    </Routes>
    </>
    )
}

export function Add(a: number, b: number) {
    return a + b;
}
export default Labs;