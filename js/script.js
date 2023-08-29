'use strict';

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

const numberOfFilms = +prompt('How many film have you seen? ', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of your favourite film?', '');
const b = prompt('Is it a good film?', '');
const c = prompt('One of your favourite film?', '');
const d = prompt('Is it a good film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;