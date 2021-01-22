import axios from 'axios';
// const key = process.env.YOUTUBE_API
const key = "AIzaSyAXgWaZP6qEA6xABtyJQUqDRmMGlcP4l1I"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
      part: 'snippet',
      maxResults: 5,
      key
  }
})
