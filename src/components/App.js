import { ThemeProvider } from "@material-ui/core";
import { theme } from "./ui/theme";
import Header from "./ui/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          {...{ value, setValue }}
          {...{ selectedIndex, setSelectedIndex }}
        />
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
        <Footer
          {...{ value, setValue }}
          {...{ selectedIndex, setSelectedIndex }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
