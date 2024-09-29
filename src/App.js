import React from "react";

function App() {
  const [buttonText, setButtonText] = React.useState("Click me");

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setButtonText("Button Clicked!")}>
          {buttonText}
        </button>
      </header>
    </div>
  );
}

export default App;
