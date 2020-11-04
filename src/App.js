import './App.css';

import Sunset from './Videos/Sunset.mp4';

import Search from './Components/Search/Search';

function App() {
    return (
        <div className="app">
            <Search />
            <video className="skyvid" autoPlay loop muted>
                <source src={Sunset} type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
