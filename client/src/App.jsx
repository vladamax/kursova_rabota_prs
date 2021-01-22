import { useState } from 'react'
import SearchBar from "./components/SearchBar"
import youtube from './fetch/axios'
import axios from 'axios'
import styled from "styled-components"

const History = styled.button`
  padding: 0.3rem 0.6rem;
  border: 0;
  outline: 0;
  border-radius: 5px;
`

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [hist, setHist] = useState([])

  const onSubmit = async (e) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: searchTerm
        }
      })
      await console.log(`Results:`, res.data);
      setVideos(res.data.items)
      await writeHistory(searchTerm)
    } catch (e) {
      console.warn(e.message);
    }
  }

  const writeHistory = async () => {
    try {
      const res = await axios.post('/writehistory', { searchTerm })
      console.log("Success");
    } catch (e) {
      console.warn("Issues found: ", e.message);
    }
  }

  const getHistory = async() => {
    try {
      const res = await axios.get("/gethistory")
      await setHist(res.data.data)
    } catch (e) {
      console.warn(e.message);
    }
  }

  const onVideoSelect = (video) => setSelectedVideo(video)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Search Through YouTube API
        </h1>
      </header>
      <SearchBar
        onSubmit={onSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <History onClick={getHistory}>Get history!</History>
      </div>
    </div>
  );
}

export default App;
