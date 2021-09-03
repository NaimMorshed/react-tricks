import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    return (
        <div className="App">
            <div className="App-header">

                <button onClick={() => history.push("/innerWidth")}>Inner Width</button>
                
            </div>
        </div>
    );
};

export default Home;