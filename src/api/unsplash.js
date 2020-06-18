import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID VywJD-oFN7Qfb4BEjx7gDyruZgW8KyhcgTtkzeTLau0'
  }
});

