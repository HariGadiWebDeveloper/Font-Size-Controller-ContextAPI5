import "./App.css";
import FontController from "./components/FontController";
import FontSizeShow from "./components/FontSizeShow";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-blue-700 text-[30px] font-bold" >Font Size Controller - ContextAPI 5</h1>
      <FontController />
      <FontSizeShow />
    </div>
  );
}

export default App;
