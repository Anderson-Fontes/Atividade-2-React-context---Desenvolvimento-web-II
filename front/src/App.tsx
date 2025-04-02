import { LetterProvider } from "./context/LetterCtx";
import Input from "./components/Input";
import Display from "./components/Display";
import Ball from "./components/Ball";
import './App.css'

const appStyle = {
  fontFamily: "'Arial', sans-serif",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  border: "1px solid white",
  borderRadius: "12px",
  color: "white"
};

function App() {
  return (
    <LetterProvider>
      <div style={appStyle}>
        <Input />
        <Display />
        <Ball/>
      </div>
    </LetterProvider>
  );
}

export default App;
