import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import ImpliedReturn from "./functions/ImpliedReturn";
import JsonStringify from "./json/JsonStringify";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <JsonStringify />
         <MapFunction/>
         <WorkingWithArrays />
         <ArrowFunctions />
         <ES5Functions />
         <TernaryOperator />
         <IfElse />
         <BooleanVariables />
         <VariableTypes/>
         <VariablesAndConstants/>
      </div>
   );
}
export default JavaScript