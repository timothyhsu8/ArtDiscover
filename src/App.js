import React from 'react';
import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ArtistsPage from "./pages/ArtistsPage"
import MyFavArtistsPage from './pages/MyFavArtistsPage';
import ArtResourcesPage from './pages/ArtResourcesPage';
import AboutPage from './pages/AboutPage';
import SuggestionsPage from './pages/SuggestionsPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path={["/", "/artists"]} component={ArtistsPage}></Route>
          <Route path="/favoriteartists" component={MyFavArtistsPage}></Route>
          <Route path="/artresources" component={ArtResourcesPage}></Route>
          <Route path="/suggestions" component={SuggestionsPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;