import Autocomplete from "./components/Autocomplete";
import Heading from "./components/Heading";
//import Books from "./API/books";

const App = ({ books }) => {
  return (
    <div>
      <Heading />
      <Autocomplete books={books} />
    </div>
  );
};
export default App;
