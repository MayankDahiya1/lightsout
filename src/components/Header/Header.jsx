import React from "react";
import "./Header.scss";

const Header = ({parameter,parameter1,parameter2,content}) => {

const handleChange = (event) =>{
  console.log("Hello from Header");
parameter(event.target.name,event.target.value);
  
}
const handleChange1 =(event) =>{
  parameter1(event.target.name,event.target.value);
}
const handleChange2 =(event)=>{
  parameter2(event.target.name,event.target.value);
}

  return (
    <>
    { content === "Hollywood"?

    // Hollywood Header
      <ul className="nav justify-content-center my-5 header app__navbar ">
        <li>
          <select name="with_genres" onChange={handleChange}   className="form-select list" aria-label="Default select example">
          <option selected value="">Genres</option>
            <option  value="28">Action</option>
            <option  value="12">Adventure</option>
            <option  value="16">Animation</option>
            <option  value="35">Comedy</option>
            <option  value="80">Crime</option>
            <option  value="99">Documentary</option>
            <option  value="18">Drama</option>
            <option  value="10751">Family</option>
            <option  value="14">Fantasy</option>
            <option  value="36">History</option>
            <option  value="27">Horror</option>
            <option  value="10402">Music</option>
            <option  value="9648">Mystery</option>
            <option  value="10749">Romance</option>
            <option  value="878">Science Fiction</option>
            <option  value="10770">TV Movie</option>
            <option  value="53">Thriller</option>
            <option  value="10752">War</option>
            <option  value="37">Western</option>
          </select>
        </li>
        <li>
          <select name="certification" onChange={handleChange1}  className="form-select list" aria-label="Default select example">
            <option selected value="">Rating</option>
            <option  value="G">G (All Ages)</option>
            <option  value="PG">PG (Above 10 Age)</option>
            <option  value="PG-13">PG-13 (Above 13 Age)</option>
            <option  value="R">R (Under 17 requires parent or adult gurdians)</option>
            <option  value="NC-17">NC-17 (Containes excessive Violence , intense sex , drug abuse ,etc.)</option>
            <option  value="NR">NR (No Rating Information)</option>
         

          </select>
        </li>
        <li>
          <select name="sort_by" onChange={handleChange2}  className="form-select list" aria-label="Default select example">
            <option selected value="">Sort By</option>
            <option  value="popularity.desc">Popularity (High to Low)</option>
            <option  value="popularity.asc">Popularity (Low to High)</option>
            <option  value="primary_release_date.desc">Release Date(High to Low)</option>
            <option  value="primary_release_date.asc">Rank (Low to High)</option>
          </select>
        </li>
       
      </ul>
      :
      
      // Bollywood Header

      <ul className="nav justify-content-center my-5 header app__navbar ">
      <li>
          <select name="with_genres" onChange={handleChange}   className="form-select list" aria-label="Default select example">
          <option selected value="">Genres</option>
            <option  value="28">Action</option>
            <option  value="12">Adventure</option>
            <option  value="16">Animation</option>
            <option  value="35">Comedy</option>
            <option  value="80">Crime</option>
            <option  value="99">Documentary</option>
            <option  value="18">Drama</option>
            <option  value="10751">Family</option>
            <option  value="14">Fantasy</option>
            <option  value="36">History</option>
            <option  value="27">Horror</option>
            <option  value="10402">Music</option>
            <option  value="9648">Mystery</option>
            <option  value="10749">Romance</option>
            <option  value="878">Science Fiction</option>
            <option  value="10770">TV Movie</option>
            <option  value="53">Thriller</option>
            <option  value="10752">War</option>
            <option  value="37">Western</option>
          </select>
        </li>
        <li>
          <select name="certification" onChange={handleChange1}  className="form-select list" aria-label="Default select example">
            <option selected value="">Rating</option>
            <option  value="U">U (Suitable for All Ages)</option>
            <option  value="UA">UA (Children below 12 are advised to be accompanied by a parent)</option>
            <option  value="A">18+ Restricted to adult audiences</option>
           
         

          </select>
        </li>
        <li>
          <select name="sort_by" onChange={handleChange2}  className="form-select list" aria-label="Default select example">
            <option selected value="">Sort By</option>
            <option  value="popularity.desc">Popularity (High to Low)</option>
            <option  value="popularity.asc">Popularity (Low to High)</option>
            <option  value="primary_release_date.desc">Release Date(High to Low)</option>
            <option  value="primary_release_date.asc">Rank (Low to High)</option>
          </select>
        </li>
       
      </ul>
      
    }
    </>
  );
};

export default Header;
