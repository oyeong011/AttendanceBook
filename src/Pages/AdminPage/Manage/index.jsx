
import { Routes, Outlet, Route} from 'react-router-dom';
import SideBar from './../../../component/sidebar';
import AttendanceManagement from './attendance';
import ApplyManagement from './apply';
import PlayerManagement from './player';

function ManagementLayout() {
  return (
    <div>
      <SideBar/>
      <Outlet />
    </div>
  )
}



function Management() {
  return (
    <Routes>
        <Route path="/" element={<ManagementLayout/>}>
            <Route path="attendanceManagement" element={<AttendanceManagement/>}/>
            <Route path="applyManagement" element={<ApplyManagement/>}/>
            <Route path="playerManagement" element={<PlayerManagement/>}/>
        </Route>
    </Routes>
  )
}

export default Management