import './App.css';

import SkyVid from './Videos/SkyVid.mp4';

import Search from './Components/Search/Search';

function App() {
    return (
        <div className="app">
            <Search />
            <video className="skyvid" autoPlay loop muted>
                <source src={SkyVid} type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
