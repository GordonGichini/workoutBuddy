import { BrowseRouter, Routes, Route } from 'react-router-dom'

function App() {
    return(
        <div className="App">
            <BrowseRouter>
            <div className='pages'>
                <Routes>
                    <Route
                    path='/'
                    element={}
                    />
                </Routes>
            </div>
            </BrowseRouter>
        </div>
    );
}

export default App;
