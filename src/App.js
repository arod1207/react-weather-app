import './App.css';

import LightVid from './Videos/lightning.mp4';

import Search from './Components/Search/Search';

function App() {
    return (
        <div className="app">
            <Search />
            <video className="skyvid" autoPlay loop muted>
                <source src={LightVid} type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
