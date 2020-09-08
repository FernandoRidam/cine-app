import {
  api,
} from './api';

export async function index() {
  try {
    const { data } = await api.get('/genres');

    return data.genres;
  } catch ( error ) {
    return error;
  }
};

export async function showGenre( id ) {
  try {
    const { data } = await api.get(`/genres/${ id }`);

    return data;
  } catch ( error ) {
    return error;
  }
};
