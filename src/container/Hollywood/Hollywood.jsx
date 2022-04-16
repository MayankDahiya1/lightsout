import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CardDefault from "../../components/Card/Card";
import { motion } from "framer-motion";
import Spinner from "../../Spinner";
import "./Hollywood.scss";
import Header from '../../components/Header/Header';
const Hollywood = () => {
  const baseurl = "https://image.tmdb.org/t/p/original";
  const [page, setPage] = React.useState(1);
  const [dataHollywood, setDataHollywood] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [para,setPara]= React.useState("");
  const [query, setQuery] = React.useState("");
  const [para1,setPara1]= React.useState("");
  const [query1, setQuery1] = React.useState("");
  const [para2,setPara2]= React.useState("");
  const [query2, setQuery2] = React.useState("");
  const [totalPage, setTotalPage] = React.useState(1);

  const parameter = async(query,para) => {
    setPara(para);
    setQuery(query);
    setLoading(true)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}=${para}&certification_country=UN&${query1}=${para1}&${query2}=${para2}&with_original_language=en&with_watch_monetization_types=flatrate`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.total_pages);
    setDataHollywood(parsedData1.results);

    console.log(parsedData1.data);
    setLoading(false);
  }
  const parameter1 = async(query1,para1) => {
    setPara1(para1);
    setQuery1(query1);
    setLoading(true)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}=${para}&certification_country=UN&${query1}=${para1}&${query2}=${para2}&with_original_language=en&with_watch_monetization_types=flatrate`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.total_pages);
    setDataHollywood(parsedData1.results);
    console.log(parsedData1.data);
    setLoading(false);
  }
  const parameter2 = async(query2,para2) => {
    setPara2(para2);
    setQuery2(query2);
    setLoading(true)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}=${para}&certification_country=UN&${query1}=${para1}&${query2}=${para2}&with_original_language=en&with_watch_monetization_types=flatrate`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.total_pages);
    setDataHollywood(parsedData1.results);
    console.log(parsedData1.data);
    setLoading(false);
  }
 
 
  const fetchNextData = async () => {
   
    setLoading(true);
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}=${para}&certification_country=UN&${query1}=${para1}&${query2}=${para2}&with_original_language=en&with_watch_monetization_types=flatrate&page=${page+1}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataHollywood(parsedData.results);
    setLoading(false)
    console.log(page);

  };
  const fetchPrevData = async () => {
    setLoading(true);
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}=${para}&certification_country=UN&${query1}=${para1}&${query2}=${para2}&with_original_language=en&with_watch_monetization_types=flatrate&page=${page-1}`;
    setPage(page-1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataHollywood(parsedData.results);
    setLoading(false);
    console.log(page);
 
  };
  const updateMovie = async () => {
    console.log(page)
    const url = `
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&certification_country=UN&page=${page}&with_original_language=en&with_watch_monetization_types=flatrate`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalPage(parsedData.total_pages);
    setDataHollywood(parsedData.results);
    console.log(parsedData.data);
    setLoading(false);
  };
  React.useEffect(() => {
    setLoading(true);
    console.log("hello i am useEffect");
    updateMovie();
  }, []);

  return (
    <>
      <React.Fragment>
      <Header parameter={parameter} parameter1={parameter1} parameter2={parameter2} content="Hollywood"/>
        <CssBaseline />
        <Container>
          {loading && <Spinner />}
          {dataHollywood.length!==0?
          <div>
            <motion.div animate={{ x: [0, 100, 0] }}>
              <div className="row">
                {dataHollywood.map((element) => (
                  <div className="col-4">
                  
                    <CardDefault
                      title={
                        element.title != null
                          ? element.title :element.original_title
                         
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
                {loading &&  <Spinner />}
                {!loading &&
                  <div className="d-flex justify-content-between my-4">
                 
                  
                      <button
                        type="button"
                        onClick={fetchPrevData}
                        disabled={page<=1?true:false}
                        className="btn btn-outline-light btn-lg"
                      >
                      &larr; Previous
                      </button>
                 
                 
                      <button
                        type="button"
                        onClick={fetchNextData}
                        disabled={page>=totalPage?true:false}
                        className="btn btn-outline-light btn-lg"
                      >
                        Next &rarr;
                      </button>
              
                 
                  </div>
                }
              </div>
            </motion.div>
          </div>
         :<div>
         {
              !loading?
              <h1 style={{color:"white"}}> No Data Found </h1>
              :null
            }
         </div> }
        </Container>
      </React.Fragment>
    </>
  );
};
export default Hollywood;
