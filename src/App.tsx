
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import RecentEp from './components/Recent-episodes'
import PopularAnime from './components/Popular-anime'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecentEp/>}/>
        <Route path="/popular" element={<PopularAnime/>}/>
      </Routes>
    </>
  );
}

export default App
