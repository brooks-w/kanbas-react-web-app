import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";



function Labs() {
    return (
      <>
        <Nav />
        <h1>Labs</h1>
        <Link to="/Labs/a3">Assignment 3</Link> |{" "}
        <Link to="/Labs/a4">Assignment 4</Link> |{" "}
        <Link to="/Labs/a5">Assignment 5</Link>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/a3" />} />
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4" element={<Assignment4 />} />
        </Routes>
      </>
    );
  }

export function Add(a: number, b: number) {
    return a + b;
}
export default Labs;