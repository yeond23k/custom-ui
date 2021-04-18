import React, { useState, useEffect } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import moment from "moment";

import DataGrid from "../components/pure/DataGrid";

const Pure = () => {
  const input = useInput("", "Number");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log("### movies => ", movies);
  }, [movies]);

  const getMovies = async () => {
    const {
      data: { data },
    } = await axios({
      method: "GET",
      url: "https://yts-proxy.now.sh/list_movies.json",
    });

    if (data.movies.length > 0) {
      console.log("### data => ", data.movies);
      setMovies(
        data.movies.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            rating: movie.rating,
            language: movie.language,
            genres: movie.genres,
            date: movie.date_uploaded,
          };
        })
      );
    }
  };

  const columns = [
    { key: "id", title: "No." },
    {
      key: "title",
      title: "title",
      editable: true,
      render: (value, row, callback) => (
        <input value={value} onChange={callback} />
      ),
    },
    { key: "year", title: "year" },
    { key: "rating", title: "rating" },
    {
      key: "language",
      title: "language",
      editable: true,
      render: (value, row, callback) => (
        <select onChange={callback}>
          {["en", "ko"].map((lan) => (
            <option value={lan} selected={value === lan}>
              {lan}
            </option>
          ))}
          <option
            value="etc"
            selected={!["en", "ko"].find((lan) => value === lan)}
          >
            etc
          </option>
        </select>
      ),
    },
    {
      key: "genres",
      title: "genres",
    },
    {
      key: "date",
      title: "uploadDate",
      render: (value) => moment(value).format("YYYY/MM/DD"),
    },
    {
      key: "confirm",
      title: "confirm",
      render: (value, row) => (
        <button onClick={() => alert(JSON.stringify(row))}>check</button>
      ),
    },
  ];

  return (
    <div>
      <div>
        <h2>#1. Input</h2>
        <input placeholder="input value" {...input} />
        <button onClick={() => alert(input.value)}>click</button>
      </div>
      <div>
        <h2>#2. Grid</h2>
        <DataGrid
          columns={columns}
          rows={movies}
          rowSelection={(row) => console.log("### rowSelection => ", row)}
        />
      </div>
    </div>
  );
};

export default Pure;
