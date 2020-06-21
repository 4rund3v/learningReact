import React, { Component } from "react";

class PersonalityDetail extends Component {
  render() {
    const { personalityId } = this.props;
    return (
      <div>
        <h1> Displaying the {personalityId}</h1>
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Trained Images
          </h1>

          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-left">
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img
                  class="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/pWkk7iiCoDM/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aob0ukAYfuI/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EUfxH-pze7s/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/M185_qYH8vg/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/sesveuG_rNo/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/AvhMzHwiE_0/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/2gYsZUmockw/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EMSDtjVHdQ8/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/8mUEy0ABdNE/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/G9Rfc1qccH4/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aJeH0KcFkuc/200x200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/p2TQ-3Bh3Oo/200x200"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalityDetail;
