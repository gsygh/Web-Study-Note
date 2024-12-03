import logo from "./logo.svg";
import Button from "./component/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">button</Button>
        <Button>button</Button>
        <Button size="small">button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          button
        </Button>
        <Button color="pink">button</Button>
        <Button size="small" color="pink">
          button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          button
        </Button>
        <Button color="gray">button</Button>
        <Button size="small" color="gray">
          button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline={true}>
          button
        </Button>
        <Button color="pink" outline>
          button
        </Button>
        <Button size="small" outline color="gray">
          button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth={true}>
          button
        </Button>
        <Button size="large" color="pink" fullWidth>
          button
        </Button>
        <Button
          size="large"
          fullWidth
          color="gray"
          onClick={() => {
            console.log("클릭!");
          }}
          onMouseMove={() => {
            console.log("마우스 무브!");
          }}
        >
          button
        </Button>
      </div>
    </div>
  );
}

export default App;
