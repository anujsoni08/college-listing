import React from "react";

import "./style.css";

function CollegeCard(props) {
  const { collegeData } = props;

  // Get Currency in Indian format
  const getNumberInternationalFormat = (value) => {
    return new Intl.NumberFormat("en-IN").format(value);
  };

  // Titlecase for college tags
  const titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
    return str.join(" ");
  };

  const renderTopHalf = () => {
    return (
      <div className="top-half-card">
        <div>
          <div className="promoted-div">
            <p className="zero-margin">PROMOTED</p>
          </div>
          <div className="rating-card">
            <p className="zero-margin rating-text">
              3.9/<span style={{ fontSize: "15px" }}>5</span>{" "}
            </p>
            <p className="zero-margin rating-text">
              {collegeData.rating_remarks}
            </p>
          </div>
          <div className="flex-class tag-ranking-upper-half">
            <p>
              <span className="tag-1">{titleCase(collegeData.tags[0])}</span>
              <span className="tag-2">{titleCase(collegeData.tags[1])}</span>
            </p>
            <p className="ranking-class">#{collegeData.ranking}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderBottomHalf = () => {
    return (
      <div className="bottom-half-card">
        <div className="flex-class padx-10px">
          <p className="zero-margin">
            <span
              className="font-bold greyish-brown"
              style={{ fontSize: "18.5px" }}
            >
              {collegeData.college_name}
            </span>
            <span className="rating-star-list">
              {Array.from({ length: collegeData.rating }, (_, i) => i + 1).map(
                (_, index) => (
                  <span className="rated-star" key={index}>
                    &#9733;
                  </span>
                )
              )}
              {Array.from(
                { length: 5 - collegeData.rating },
                (_, i) => i + 1
              ).map((_, index) => (
                <span
                  className="non-rated-star"
                  key={collegeData.rating + index}
                >
                  &#9733;
                </span>
              ))}
            </span>
          </p>
          <div className="college-fee-discount-class">
            <span className="original-fees">
              {" "}
              &#8377;{getNumberInternationalFormat(collegeData.original_fees)}
            </span>
            <span style={{ width: "4px" }}> </span>
            <span className="discount">{collegeData.discount}</span>
          </div>
        </div>
        <div className="flex-class padx-10px">
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
            &#8377;{getNumberInternationalFormat(collegeData.discounted_fees)}
          </p>
        </div>
        <p
          className="zero-margin greyish-brown padx-10px text-right"
          style={{ fontSize: "11px" }}
        >
          {collegeData.fees_cycle}
        </p>
        <p className="zero-margin padx-10px text-left">
          <span style={{ color: "#37b396", fontWeight: 700 }}>
            93% Match :{" "}
          </span>
          <span>{collegeData.famous_nearest_places}</span>
        </p>
        <div className="flex-class">
          <p className="zero-margin offer-text" id="offer-text">
            {collegeData.offertext}
          </p>
          <p>
            <span className="amenties padx-10px">
              {" "}
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
