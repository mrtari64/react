import { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(""); //[value,setValue]
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchfieldSting = event.target.value.toLowerCase();
    setSearchField (searchfieldSting);
  };
  return ( 
    <div className="App">
      <h1 className="app-title">Monster Rolex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      {/* <CardList monsters={result} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchItem: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/USERS")
//       .then((responce) => responce.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchItem: event.target.value }; //{searchItem:e.target.value}
//     });
//   };

//   render() {
//     const { onSearchChange } = this;
//     const result = this.findMonster();

//     return (
//       <div className="App">
//         {/* {result.map((fmonster) => {
//           console.log(fmonster.name);
//           return <h1 key={fmonster.id}>{fmonster.name}</h1>;
//         })} */}
//         <h1 className="app-title">Monster Rolex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={result} />
//       </div>
//     );
//   }

//   findMonster() {
//     const { monsters, searchItem } = this.state;
//     // console.log("6666"+searchItem.toString());
//     const filtredMonster = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchItem.toString().toLowerCase())
//     );
//     //console.log("wwww"+ filtredMonster[0].name);
//     return filtredMonster;
//   }
// }

export default App;
