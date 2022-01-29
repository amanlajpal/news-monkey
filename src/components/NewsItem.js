import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, url, weburl, date, author, source } = this.props;
        return <div className='my-3'>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{'zIndex': 1, 'left':'90%'}}>
                    {source}
                </span>
                <img src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>

                    <a href={weburl} rel="noreferrer" target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItem;