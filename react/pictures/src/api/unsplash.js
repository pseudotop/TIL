import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: 'Client-ID 4aa02cdd53a96550a50e1687bbe534719706089c24c89808c67f9670c3bcc268' },
});

export default agent;