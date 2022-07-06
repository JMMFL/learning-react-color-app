import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ColorList />
      <AddColorForm />
    </div>
  );
}
