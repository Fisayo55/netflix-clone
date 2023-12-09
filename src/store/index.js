import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKey, TMDB_BASE_URL } from "../utils/Constant";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${ApiKey}`
  );
  const data = await response.json();

  console.log(data.genres);
  return data.genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenre = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenre.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenre.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const response = await fetch(`${api}${paging ? `&page=${i}` : ""}`);
    const data = await response.json();
    createArrayFromRawData(data.results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();

    return await getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${ApiKey}`,
      genres,
      true
    );
  }
);

// return getRawData(`${TMDB_BASE_URL}/discover/${type}?api_key=${ApiKey}&with_genres=${genres}`)

const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default netflixSlice.reducer;
