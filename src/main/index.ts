// import {ApiFetch} from "../data/ApiFetch";

const ApiFetch = require("../data/ApiFetch");

const Fetch = new ApiFetch();
const M = Fetch.getData('https://rickandmortyapi.com/api/character/')
    .then( m => m.data.results[0].name)

M;

