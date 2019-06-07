import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import axios from '../axios';

class HomeScreen extends Component {

    state = {
        images: [],
        searchString: ""
      }
    
      componentDidMount() {
        axios
        .get('/api/images')
        .then( data => {
          console.log(data.data);
          console.log(this.props.username)
          this.setState({images: data.data});
        })
        .catch( err => console.log(err))
      }
      
    _onSearchChanged = text => this.setState({searchString : text});
    render() {
        const displayedImages = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.description.includes(this.state.searchString))
        return (
            <div>
                <NavBar username={this.props.username} onLogin={this.props.onLogin} onSearchChanged={this._onSearchChanged}/>
                <MainContent images={displayedImages} />
            </div>
        );
    }
}

export default HomeScreen;