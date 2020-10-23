import axios from 'axios';

const KEY = 'AIzaSyCxqmkeYe9l0VfTdJH0KL0XrFNmYsysbbA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});