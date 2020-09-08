import {
  api,
} from './api';

export async function show( id ) {
  try {
    const { data } = await api.get(`/movies/show/${ id }`);

    return data;
  } catch ( error ) {
    return error;
  }
};

export async function search( query ) {
  try {
    const { data } = await api.get(`/movies/search/${ query }`);

    return data;
  } catch ( error ) {
    return error;
  }
};

export async function trending() {
  try {
    const { data } = await api.get('/movies/trending');

    return data.results;
  } catch ( error ) {
    return error;
  }
};

export async function discover() {
  try {
    const { data } = await api.get('/movies/discover');

    return data.results;
  } catch ( error ) {
    return error;
  }
};
