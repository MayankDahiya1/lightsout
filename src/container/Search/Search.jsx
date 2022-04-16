import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Search.scss";
import Spinner from "../../Spinner";
const Search = () => {
  const baseurl = "https://image.tmdb.org/t/p/original";
  const [loading, setLoading] = useState(false);
  const [para, setPara] = useState("");
  const [data, setData] = useState([]);
  function handleChange(event) {
    setPara(event.target.value);
  }
  const searchedMovie = async () => {
    setLoading(true)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${para}&page=1&include_adult=false`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setData(parsedData.results);
    console.log(parsedData);
    setLoading(false);
  };
  console.log(data);
  return (
    <>
      <div className="container">
        <input className="input" type="text" onChange={handleChange} />
        <button className="button" onClick={searchedMovie} type="submit">
          Search
        </button>
        { data.length!== 0 ?
        <div className="row">
          { !loading &&  data.map((element) => (
            <div className="col-4">
              <Card
                title={
                  element.title != null ? element.title : element.original_title
                }
                img={
                  element.poster_path != null
                    ? `${baseurl}${
                        element.poster_path != null
                          ? element.poster_path
                          : element.backdrop_path
                      }`
                    : "https://freedesignfile.com/upload/2015/06/Film-with-popcorn-cinema-poster-vector-01.jpg"
                }
                category="Movie"
                duration={element.release_date}
                rating={element.vote_average}
                about={element.overview}
              />
            </div>
          ))}
          {loading && <Spinner />}
        </div>
        : <h1 style={{color:"white"}}>Data</h1>
        }
      </div>
    </>
  );
};

export default Search;
