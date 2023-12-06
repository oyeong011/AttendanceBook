import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from "./util/router.jsx";

function App() {
    return (
        <RouterProvider router={router}/>
    )
}
export default App;