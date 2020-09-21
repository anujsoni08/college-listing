import React from "react";

import collegeImg from "../../assets/collegeImages/college.jpg";
import "./style.css";

function CollegeCard(props) {
  const { collegeData } = props;

  const getNumberInternationFormat = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  const renderTopHalf = () => {
    return (
      <div className="top-half-card">
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <div className="promoted-div">
            <p className="zero-margin">PROMOTED</p>
          </div>
          <div className="rating-card" style={{ float: "right" }}>
            <p className="zero-margin rating-text">
              3.9/<span style={{ fontSize: "15px" }}>5</span>{" "}
            </p>
            <p className="zero-margin rating-text">
              {collegeData.rating_remarks}
            </p>
          </div>
          <div
            className="flex-class"
            style={{ position: "absolute", width: "100%", bottom: "0" }}
          >
            <p>
              <span>{collegeData.tags[0]}</span>
              {"    "}
              <span>{collegeData.tags[1]}</span>
            </p>
            <p style={{ color: "white", fontWeight: 500, lineHeight: 1.33 }}>
              #{collegeData.ranking}
            </p>
          </div>
        </div>
        <img src={collegeImg} alt="college" className="image-class" />
      </div>
    );
  };

  const renderBottomHalf = () => {
    return (
      <div className="bottom-half-card">
        <div className="flex-class">
          <p className="zero-margin">
            <span
              className="font-bold greyish-brown"
              style={{ fontSize: "18.5px" }}
            >
              {collegeData.college_name}
            </span>
            <span className="rating-star-list">
              {Array.from({ length: collegeData.rating }, (_, i) => i + 1).map(
                (_) => (
                  <span className="rated-star">&#9733;</span>
                )
              )}
              {Array.from(
                { length: 5 - collegeData.rating },
                (_, i) => i + 1
              ).map((_) => (
                <span className="non-rated-star">&#9733;</span>
              ))}
            </span>
          </p>
          <div className="college-fee-discount-class">
            <span style={{ textDecoration: "line-through" }}>
              {" "}
              &#8377;{getNumberInternationFormat(collegeData.original_fees)}
            </span>
            <span style={{ width: "4px" }}> </span>
            <span>{collegeData.discount}</span>
          </div>
        </div>
        <div className="flex-class">
          <p className="zero-margin">
            <span className="greyish-brown">
              {collegeData.nearest_place[0]}
            </span>
            <span className="greyish-brown" style={{ width: "4px" }}>
              {" | "}{" "}
            </span>
            <span style={{ color: "#adadad" }}>
              {collegeData.nearest_place[1]}
            </span>
          </p>
          <p
            className="zero-margin font-bold"
            style={{ fontSize: "28.5px", color: "#dd1c26" }}
          >
            &#8377;{getNumberInternationFormat(collegeData.discounted_fees)}
          </p>
        </div>
        <p
          className="zero-margin greyish-brown"
          style={{ textAlign: "right", fontSize: "11px" }}
        >
          {collegeData.fees_cycle}
        </p>
        <p className="zero-margin" style={{ textAlign: "left" }}>
          <span style={{ color: "#37b396", fontWeight: 700 }}>93% Match :</span>
          <span>{collegeData.famous_nearest_places}</span>
        </p>
        <div className="flex-class">
          <p
            className="zero-margin"
            style={{
              backgroundColor: "#ccf5e7",
              padding: "10px",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
              width: "52%",
            }}
          >
            {collegeData.offertext}
          </p>
          <p>
            <span
              style={{
                color: "#37b396",
                width: "60px",
                height: "10px",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: 1.33,
                letterSpacing: "normal",
                textAlign: "center",
              }}
            >
              {collegeData.amenties.join(" • ")}
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="college-card">
      {renderTopHalf()}
      {renderBottomHalf()}
    </div>
  );
}

export default CollegeCard;
