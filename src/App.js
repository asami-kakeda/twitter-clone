import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TimeLine from "./components/timeline/TimeLine";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <TimeLine />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
