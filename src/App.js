import Catalogue from "./Components/Catalogue/Catalogue";
import Header from "./Components/Header/Header";
import redDress from "./Components/Catalogue/images/red-dress.jpg";
import yellowDress from "./Components/Catalogue/images/yellow-dress.jpeg";
import whiteDress from "./Components/Catalogue/images/white-dress.jpeg";
import Landing from "./Components/Landing/Landing";

function App() {
  // We have defined the variables inside the function so as not to pollute the global scope

  // The variable that holds the boolean that determines whether the user is logged in or not
  const isLoggedIn = true;

  // We define the variable catalogue and assign it the array of items to be displayed to users
  const catalogue = [
    {
      id: "1",
      image: whiteDress,
      name: "White Dress",
      description: "Glamorous White Dress for Celebrations and Outings",
      price: 59,
      sizes: "30-34",
    },
    {
      id: "2",
      image: redDress,
      name: "Red Dress",
      description: "Awesome red dress for any occassion",
      price: 49,
      sizes: "30, 32-34",
    },
    {
      id: "3",
      image: yellowDress,
      name: "Yellow Dress",
      description: "Beautiful yellow dress for special occassions",
      price: 58,
      sizes: "30-36",
    },
  ];

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossOrigin="anonymous"
      />
      <Header isLoggedIn={isLoggedIn} name="Gabriel" />
      <Landing />
      <Catalogue catalogue={catalogue} />
    </div>
  );
}

export default App;

