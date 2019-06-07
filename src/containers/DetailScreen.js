import React, { Component } from 'react';
import axios from '../axios';
import NavBar from '../components/NavBar';
import GirlImage from '../components/GirlImage';

class DetailScreen extends Component {
    state = {}

    _savedComment = text => {
        axios
        .post(`/${this.props.match.params.imageId}/comments`,{
            username: this.props.username,
            comment: text
        })
        .then( data => console.log(data) )
        .catch( err => console.log(err) )
    }
    
    componentDidMount() {
        axios
        .get(`/api/images/${this.props.match.params.imageId}`)
        .then( data => {
            console.log(data.data)
            this.setState({image: data.data});
        })
        .catch( err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <NavBar username={this.props.username} onLogin={this.props.onLogin} onSearchChanged={this.props.onSearchChanged}/>
                <div className="main_content" className="container" >
                    <div className="row">
                        <div className="mx-auto">
                            {this.state.image ? <GirlImage printComment={this._savedComment} username={this.props.username} img={this.state.image} /> : ""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailScreen;