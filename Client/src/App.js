import { useState } from "react";
import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";

// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import PathRoutes from "./helpers/Router.helper";
import Details from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const { pathName } = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const EMAIL = "";
  const PASSWORD = "";

  async function login  (userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //    const { access } = data;
    //    setAccess(data);
    //    access && navigate('/home');
    // });
    try {
      const { data } = await axios.get(URL + `?email=${email}&password=${password}`)
      const { access } = data;
       setAccess(data);
       access && navigate('/home');
    } catch (error) {
              console.log(error) 
    }
 }

  // function login(userData) {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //   }
  //   navigate("/home");
  // }

  //   const example = {
  //     id: 1,
  //     name: 'Rick Sanchez',
  //     status: 'Alive',
  //     species: 'Human',
  //     gender: 'Male',
  //     origin: {
  //        name: 'Earth (C-137)',
  //        url: 'https://rickandmortyapi.com/api/location/1',
  //     },
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //  };
  const [characters, setCharacters] = useState([]);

  // const onSearch = id => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters(oldChars => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  const onSearch = async (id) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        setCharacters(oldChars => [...oldChars, data]);
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
  console.log(error)
    }
  }

  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== Number(id)));
  };

  return (
    <div className="App">
      {pathName !== "/" && <NavBar onSearch={onSearch} />}

      <Routes>
        <Route
          path={PathRoutes.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PathRoutes.ABOUT} element={<About />} />
        <Route path={PathRoutes.DETAIL} element={<Details />} />
        <Route path={"/"} element={<Form />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>

      {/* <SearchBar onSearch={characterID => window.alert(characterID)} /> */}

      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert("wdwwdasds")}
         /> */}
    </div>
  );
}

export default App;
