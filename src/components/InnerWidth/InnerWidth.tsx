import React from 'react';

const InnerWidth = () => {

    const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
    const [windowHeight, setWindowHeight] = React.useState<number>(window.innerHeight);

    const resizeWidth = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    React.useEffect(() => {
        window.addEventListener('resize', resizeWidth)
    }, [])

    return (
        <div className="App">
            <div className="App-header">
                <h1>Width : {windowWidth}</h1>
                <h1>Height : {windowHeight}</h1>
            </div>
        </div>
    );
};

export default InnerWidth;