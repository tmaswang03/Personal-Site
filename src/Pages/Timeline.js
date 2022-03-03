import React from 'react'
import TimelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Timeline() {
  return (
    <div>
        <h1 className = "timelineHeader">Welcome To My Timeline</h1> 
        <VerticalTimeline visible = {true} animate = {true}>
            {TimelineElements.map((element) => {
            return (
                <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle = {{
                    background: "var(--col6)", 
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