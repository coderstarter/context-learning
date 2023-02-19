import "./styles.css";
import { useState, createContext } from "react";
const ThemeContext = createContext();

function Text(props) {
  const { color, children } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        let actualColor = color ? color : theme;
        return <h1 style={{ color: actualColor }}>{children}</h1>;
      }}
    </ThemeContext.Consumer>
  );
}

function Button(props) {
  const { color, children, ...rest } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        let actualColor = color ? color : theme;
        return (
          <button style={{ color: actualColor }} {...rest}>
            {children}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
function Display(props) {
  return (
    <>
      <Text>there are some texts</Text>
      <Button>Click</Button>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState("blue");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <h1>Global theme color = {theme}</h1>
        <button onClick={() => setTheme("blue")}>Blue</button>
        <button onClick={() => setTheme("green")}>Green</button>
        <Text> This is a text </Text>
        <Text color={theme}> This is another text</Text>
        <Display />
      </ThemeContext.Provider>
    </>
  );
}
export default App;
