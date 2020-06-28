import React, { Component } from "react";
import NavBar from "./common/navbar";
class Dashboard extends Component {
  state = {};
  render() {
    console.log("Dashboard component called.");
    return (
      <div>
        <NavBar />
        <div className="d-flex align-items-stretch col-xl-6">
          <div className="d-flex w-100 mb-4 card">
            <div className="row-bordered h-100 row no-gutters">
              <div className="d-flex align-items-center col-lg-6 col-md-4 col-sm-6">
                <a
                  href="#d"
                  className="card-body media align-items-center text-body"
                >
                  <span className="media-body d-block ml-3">
                    <span className="text-big font-weight-bolder">1000</span>{" "}
                    Tasks
                    <br />
                    <small className="text-muted">Total Tasks : 10000</small>
                  </span>
                </a>
              </div>
              <div className="d-flex align-items-center col-lg-6 col-md-4 col-sm-6">
                <a
                  href="#d"
                  className="card-body media align-items-center text-body"
                >
                  <span className="media-body d-block ml-3">
                    <span className="text-big">
                      <span className="font-weight-bolder">152</span>{" "}
                      Recognitions
                    </span>
                    <br />
                    <small className="text-muted">
                      Total Recogntions: 9800
                    </small>
                  </span>
                </a>
              </div>
              <div className="d-flex align-items-center col-lg-6 col-md-4 col-sm-6">
                <a
                  href="#d"
                  className="card-body media align-items-center text-body"
                >
                  <i className="lnr lnr-checkmark-circle display-4 d-block text-primary"></i>
                  <span className="media-body d-block ml-3">
                    <span className="text-big">
                      <span className="font-weight-bolder">4</span> Relearn
                      Tasks
                    </span>
                    <br />
                    <small className="text-muted">
                      Total Relearn Tasks : 28
                    </small>
                  </span>
                </a>
              </div>
              <div className="d-flex align-items-center col-lg-6 col-md-4 col-sm-6">
                <a
                  href="#d"
                  className="card-body media align-items-center text-body"
                >
                  <i className="lnr lnr-license display-4 d-block text-primary"></i>
                  <span className="media-body d-block ml-3">
                    <span className="text-big">
                      <span className="font-weight-bolder">4</span> Datasets
                      Update
                    </span>
                    <br />
                    <small className="text-muted">
                      Complete Datasets Updated : 120
                    </small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 card">
          <h6 className="with-elements card-header">
            <div className="card-header-title">System Useage</div>
            <div className="card-header-elements ml-auto">
              <button
                type="button"
                className="icon-btn md-btn-flat btn btn-outline-primary btn-xs"
              >
                <i className="ion ion-md-sync"></i>
              </button>
            </div>
          </h6>

          <div className="py-4 px-3">
            <div className="w-100">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>
              <canvas
                height="162"
                width="693"
                className="chartjs-render-monitor"
                style={{ display: "block", width: "693px", height: "162px" }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
