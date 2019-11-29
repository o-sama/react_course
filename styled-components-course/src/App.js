import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/common/Button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
import PasswordInput from "./components/common/PasswordInput";

class App extends React.Component {
  state = { theme: LightTheme };

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === "light" ? DarkTheme : LightTheme
    });
  };

  render = () => {
    return (
      <ThemeProvider theme={this.state.theme}>
        <PasswordInput />
      </ThemeProvider>
    );
  };
}

export default App;
