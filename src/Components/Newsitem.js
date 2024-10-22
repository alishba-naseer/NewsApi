import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgUrl?"https://assets3.cbsnewsstatic.com/hub/i/r/2024/10/20/b25f54a0-cc2e-4a1b-a9e4-1a9fcf24b611/thumbnail/1200x630/4510614dac1361d950824997b2c39414/oscar.jpg?v=edba3a63b5392b4c81ae19d894992d91":imgUrl} 
          className="card-img-top" alt="..." />
           {/* <img src={imgUrl} 
          className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
