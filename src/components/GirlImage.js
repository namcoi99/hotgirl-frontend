import React, { Component } from 'react';
import config from '../config';
import TextField from './TextField';

class GirlImage extends Component {
    render() {
        const comments = this.props.img.comment ? (this.props.img.comment.map( comment => (
        <p>
            <span class="font-weight-bold">
                {comment.createdBy.username}
            </span> : {" "}
            {comment.content}
        </p>
        ))) : ""
        return (
            <div className="girl_image">
                <img className="img-fluid mx-auto" src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title} />
                <h4>{this.props.img.title}</h4>
                <p>{this.props.img.description}</p>
                {comments}
                <TextField username={this.props.username}/>
            </div>
        );
    }
}

export default GirlImage;