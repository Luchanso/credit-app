import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import colorRed from 'material-ui/colors/red';
import colorIndigo from 'material-ui/colors/indigo';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

const theme = createMuiTheme({
  palette: {
    primary: colorIndigo,
    secondary: colorRed,
  }
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  body:not(&) { margin: 0; }
`;

const KEY = 'counter';

class App extends Component {
  handleDown = () => {
    const counter = Number(localStorage.getItem(KEY) || 0);
    localStorage.setItem(KEY, counter - 1);
    this.forceUpdate();
  }

  handleUp = () => {
    const counter = Number(localStorage.getItem(KEY) || 0);
    localStorage.setItem(KEY, counter + 1);
    this.forceUpdate();
  }

  render() {
    const counter = Number(localStorage.getItem(KEY) || 0);

    return (
      <MuiThemeProvider theme={theme}>
        <Wrapper>
          <Button raised color="primary" onClick={this.handleUp}>+1</Button>
          <Typography type="display4" align="center">
            { counter }
          </Typography>
          <Button raised color="accent" onClick={this.handleDown}>-1</Button>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
