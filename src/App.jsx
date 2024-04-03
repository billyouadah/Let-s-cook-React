import React, { useState, useEffect } from 'react';
import "./App.css";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Searchbar from "./Components/Card/Searchbar";


const App = () => {
  const [allRecettes, setAllRecettes] = useState(null);
  const [filteredRecettes, setFilteredRecettes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/recettes.json');
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }

        const donneesJson = await response.json();
        setAllRecettes(donneesJson);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error.message);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1 className="relative rounded-full bg-white-800 p-1 text-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800" >Let's Cook</h1>
        <Searchbar setFilteredRecettes={setFilteredRecettes}></Searchbar> 
        <div className='mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {(filteredRecettes.length > 0 ? filteredRecettes : allRecettes) && (filteredRecettes.length > 0 ? filteredRecettes : allRecettes).map(recipe => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;


   
      


       

