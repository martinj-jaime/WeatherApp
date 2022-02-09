import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    //  static getDerivedStateFromError(error) {
    //      // this.setState({hasError:true})
    //      return {
    //          hasError: true
    //      }
    //  } 

     componentDidCatch(error, errorInfo) {
        console.log('Error Info', errorInfo);
     }

    render() {
        return(
            this.state.hasError ?
                (<h1>Hubo un Error</h1>) 
            :
                (this.props.children)
        )
    }
}

export default ErrorBoundary