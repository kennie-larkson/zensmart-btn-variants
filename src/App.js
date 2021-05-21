import ButtonContainer from "./ButtonContainer";
import "./App.css";

function App() {
  const data = {
    text: "Close Shippment",
    color: "whitesmoke",
    weight: "bold"
  };
  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          marginTop: "2em",
          alignItems: "center",
          textAlign: "center",
          marginLeft: "2em"
        }}
      >
        Button Variants
      </h1>

      <ButtonContainer data={data} />
    </div>
  );
}

export default App;
