import React from 'react';
import { Link } from 'react-router-dom';


class A extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>A component</h1>
                <Link to="/b">to B</Link>
            </div>
        );
    }
}

export default A;
