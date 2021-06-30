import React from 'react';
import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
          </Switch>
        </Router>
    </ChakraProvider>
  );
}

export default App;