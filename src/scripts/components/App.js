import React from 'react';
import styles from './App.scss';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className={styles.title}>Works</h1>
                    <div className="tools">Descr</div>
                    <Link to={`/hello`}>Hello page</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
