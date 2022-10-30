import React from 'react'
import timelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Pages.css';

function Timeline() {
  return (
    <div>
        <h1 className = "timelineHeader">
          <span style = {{color: "var(--col6)"} }>&lt;</span>
          Welcome To My Timeline
          <span style = {{color: "var(--col6)"} }>/&gt;</span>         
        </h1> 
        <VerticalTimeline className = "vertical-timeline-custom-line">
            {timelineElements.map((element) => {
            return (
                <VerticalTimelineElement 
                key={element.key}
                date={element.date}
                dateClassName="date"
                contentStyle = {{
                  background: "black"
                }}
                iconStyle = {{
                    background: "var(--col0)", 
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  var(--col6)",
                }}
                >
                <h3 className="vertical-timeline-element-title">
                    {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                </h5>
                <p id="description">{element.description}</p>
                </VerticalTimelineElement>
            );
            })}
        </VerticalTimeline>
    </div>
  )
}

export default Timeline