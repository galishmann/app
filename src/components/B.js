import React from 'react';
import { Link } from 'react-router-dom';


class B extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>B component</h1>
                <Link to="/a">to A</Link>
            </div>
        );
    }
}

export default B;
