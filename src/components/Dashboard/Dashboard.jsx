import React from "react";
import "./dashboard.scss";
import userImg from "../../assets/user.png";
import { DoughnutChart } from "../Charts/Charts";
import { LineChart } from "../Charts/Charts";

const Dashboard = () => {
  return (
    <main>
      <div className="dashboard">
        <div className="profile">
          <div className="avatar">
            <img src={userImg} alt="" />
          </div>
          <div className="details">
            <h2>Shivang Yadav</h2>
            <p>Web Developer</p>
            <p>Content Creator</p>
            <div className="profile-btn">
              <button>Update</button>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="chart">
            <DoughnutChart />
          </div>
        </div>
        <div className="charts">
          <LineChart />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
