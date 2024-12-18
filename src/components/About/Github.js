import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay < currentMonth - shownMonths 
    );
  });
};


function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="tejus0"
        transformData={selectLastHalfYear} 
        blockSize={15}
        blockMargin={5}
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
        color="#c084f5"
        fontSize={10}
        
        
      />
    </Row>
  );
}

export default Github;
