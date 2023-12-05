import ManageBtn from "../../component/ManageBtn"
import { Routes, Route } from 'react-router-dom';

const AdminPage = () => {
    return (

        <Routes>
            <Route path='/' element={<ManageBtn/>}/>
            <Route path='/players' element={<div>Submit</div>}/>
            <Route path='/forms' element={<div>SubmitManage</div>}/>
            <Route path='/add' element={<div>PlayerInfo</div>}/>
        </Routes>
    )
}

export default AdminPage