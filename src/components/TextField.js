import React, { Component } from 'react';

class TextField extends Component {
    _handleComment = event => this.props.printComment(event.target.value);
    render() {
        const comment = this.props.username ? (
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control" id="comment" placeholder="Enter comment..."/>
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary btn-block" onClick={this._handleComment}>Send</button>
                </div>
            </form>
        ) : ""
        return (
            <div>
                {comment}
            </div>
        );
    }
}

export default TextField;