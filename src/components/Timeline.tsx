import {
  Timeline,
  Container,
  Content,
} from "vertical-timeline-component-react";
import arrow from '../assets/icons/arrow.png';
import '../styles/Timeline.scss';

const TimelineComponent = () => {
  const customTheme = {
    yearColor: "#405b73",
    lineColor: "#d0cdc4",
    dotColor: "#262626",
    borderDotColor: "#d0cdc4",
    titleColor: "#405b73",
    subtitleColor: "#bf9765",
    textColor: "#262626",
  };
const data = [{title: "Lorem Ipsum", description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"}]

  return (
    <>
    {data.length > 1 ? 
    <div className="py-5">

    <Timeline
      lang='en'
      theme={customTheme}
      dateFormat='only-number'
      collapse
      withoutDay>
      <Container title='What is lorem Ipsum?' startDate='2022/10/02' today>
        {data.map((data) =>{
          return <Content title={data.title} description={[data.description]} />
        })}
      </Container>
    </Timeline>
        </div>
    
    :
    <div id="timelineBox" className="d-flex align-items-center justify-content-center" style={{background: 'rgba(102, 103, 107, 0.55)', minHeight: '95vh', overflowY: 'hidden'}}>
      <div className="col-md-5 col-lg-3 d-flex flex-column">
      <p className="text-light fs-3 ">Click the add button to enter an event.</p>
        <img className="ms-auto arrow" src={arrow} alt=""  />
      </div>
    </div>
    }
    </>
  );
};

export default TimelineComponent;
