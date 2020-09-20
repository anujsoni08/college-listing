import React, { useState } from "react";

import useInfiniteScroll from "../useInfiniteScroll";
import CollegeCard from "../CollegeCard";
import * as collegeList from "../../utils/colleges.json";
import "./style.css";

function CollegeListing() {
  const [collegeListRender, setCollegeListRender] = useState(
    collegeList.colleges.slice(0, 10)
  );

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    console.log(collegeListRender);
    setTimeout(() => {
      setCollegeListRender((prevState) => [
        ...prevState,
        ...collegeList.colleges.slice(prevState.length, prevState.length + 10),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  console.log(collegeListRender);

  return (
    <div className="college-listing">
      {collegeListRender.map((collegeData, index) => (
        <div key={index}>
          <CollegeCard collegeData={collegeData} />
        </div>
      ))}
      {isFetching && "Fetching more list items..."}
    </div>
  );
}

export default CollegeListing;