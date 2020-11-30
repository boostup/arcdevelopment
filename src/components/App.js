import { ThemeProvider } from "@material-ui/core";
import { theme } from "./ui/theme";
import Header from "./ui/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => "Home"} />
          <Route exact path="/services" component={() => "Services"} />
          <Route exact path="/customsoftware" component={() => "Custom Soft"} />
          <Route exact path="/mobileapps" component={() => "MobileApps"} />
          <Route exact path="/websites" component={() => "Websites"} />
          <Route exact path="/revolution" component={() => "Revolution"} />
          <Route exact path="/about" component={() => "About"} />
          <Route exact path="/contact" component={() => "Contact"} />
          <Route exact path="/estimate" component={() => "Estimate"} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
