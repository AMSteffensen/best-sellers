import Autocomplete from "./components/Autocomplete";
import Heading from "./components/Heading";
//import Books from "./API/books";

const App = ({ books }) => {
  return (
    <>
      <Heading />
      <Autocomplete books={books} />
    </>
  );
};
export default App;
