import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TimeLine from "./components/timeline/TimeLine";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <TimeLine />

      {/* Widget */}
    </div>
  );
}

export default App;
