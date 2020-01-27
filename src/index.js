import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    constructor(props) {
        console.log('this is the contructor')
        super(props);
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        console.log('this is the componentdidmount')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {

        console.log('this is the render')

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message='Please accept location request.'/>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));