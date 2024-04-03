import React, { useState, useEffect } from "react";
import img from "../../assets/search-magnifier-outline-svgrepo-com.svg";

const Searchbar = ({ setFilteredRecettes }) => {
  // console.log('loaded');

  const [allRecettes, setAllRecettes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/recettes.json");
        if (!response.ok) {
          throw new Error("La requête a échoué.");
        }

        const donneesJson = await response.json();
        setAllRecettes(donneesJson);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données :",
          error.message
        );
      }
    };

    fetchData();
  }, []);
  console.log(allRecettes);

  const handleSearch = () => {
    setFilteredRecettes([]);
    if (!searchTerm.trim() || !allRecettes) return;
    const filteredList = allRecettes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecettes(filteredList);
    setSearchTerm("");
  };

  return (
    <>
      <div
        id="searchbar"
        className="mx-4 mb-4 rounded-lg border-2 border-orange-500 p-2 flex items-center"
      >
        <input
          type="text"
          placeholder="Search.."
          id="searchinput"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <img
               src={img}
               alt="search icon"
               id="search-icon"
               width="15"
               onClick={handleSearch}
               className="orange" 
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
