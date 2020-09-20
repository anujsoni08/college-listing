import React from "react";

import collegeImg from "../../assets/collegeImages/college.jpg";
import "./style.css";

function CollegeCard(props) {
  const { collegeData } = props;

  return (
    <div className="college-card">
      <div className="top-half-card">
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <div className="rating-card">
            <p>
              3.9/<span>5</span>{" "}
            </p>
            <p>{collegeData.rating_remarks}</p>
          </div>
          <div
            className="flex-class"
            style={{ position: "absolute", width: "100%", bottom: "0" }}
          >
            <p>
              <span>{collegeData.tags[0]}</span>
              <span>{collegeData.tags[1]}</span>
            </p>
            <p>{collegeData.ranking}</p>
          </div>
        </div>
        <img src={collegeImg} alt="college" className="image-class" />
      </div>
      <div className="bottom-half-card">
        <div className="flex-class">
          <p>
            {collegeData.college_name}
            <span>{collegeData.ratings}</span>
          </p>
          <div className="college-fee-discount-class">
            <span>{collegeData.original_fees}</span>
            <span>{collegeData.discount}</span>
          </div>
        </div>
        <div className="flex-class">
          <p>
            {collegeData.nearest_place[0]}
            <span>{collegeData.nearest_place[1]}</span>
          </p>
          <p>{collegeData.discounted_fees}</p>
        </div>
        <p style={{ textAlign: "right" }}>{collegeData.fees_cycle}</p>
        <p style={{ textAlign: "left" }}>
          <span>93% Match :</span>
          <span>{collegeData.famous_nearest_places}</span>
        </p>
        <div className="flex-class">
          <p>{collegeData.offertext}</p>
          <p>
            <span>{collegeData.amenties.join(" • ")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
