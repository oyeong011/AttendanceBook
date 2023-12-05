
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Login from './component/login'
import AdminPage from './Pages/AdminPage'
import PlayerPage from './Pages/playerPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/login/admin/*' element={<AdminPage/>}/>
        <Route path='/login/player/*' element={<PlayerPage/>} />
      </Routes> 
    </div>
  )
}

export default App
  