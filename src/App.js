import ParentComponent from "./Components/ParentComponent";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello Color Changing App</h1>
      <h2>
        in this app data transform form child component to perent componenet
      </h2>
      <ParentComponent />
    </div>
  );
}
