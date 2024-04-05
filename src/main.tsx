import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {HashRouter} from "react-router-dom";

//change Hashrouter on BrowserRouter and basename /casinodreamers

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter basename={"/"}>
        <App />
    </HashRouter>

)
