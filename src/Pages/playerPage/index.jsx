
import { Routes, Route } from 'react-router-dom';
import Submit from './submitPage';
import SubmitManage from './submitManagePage';
import PlayerInfo from './playerInfo';

function LayOut() {
  return (
    <div>Layout</div>
  )
}

function PlayerPage() {
  return (
    <div className='PlayerPage'>
      <Routes>
        <Route path='/' element={<LayOut/>}/>
        <Route path='/form' element={<Submit/>}/>
        <Route path='/forms' element={<SubmitManage/>}/>
        <Route path='/info' element={<PlayerInfo/>}/> {/* PlayerInfo 컴포넌트를 '/info' 경로에 매핑합니다. */}      </Routes>
    </div>
  )
}

export default PlayerPage