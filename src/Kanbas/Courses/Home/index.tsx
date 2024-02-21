/* eslint-disable jsx-a11y/anchor-is-valid */
import ModuleList from "../Modules/List";
import Status from "./Status";


function Home() {
  return (
    <div style={{display: "flex"}}>
      <ModuleList />
      <Status />
      </div>
  );
}
export default Home;