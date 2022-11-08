import {
  Timeline,
  Container,
  Content,
} from "vertical-timeline-component-react";

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
const data = [{title: "", description: ""}]

  return (
    <>
    <Timeline
      lang='en'
      theme={customTheme}
      dateFormat='only-number'
      collapse
      withoutDay>
      <Container title='What is lorem Ipsum?' startDate='2022/10/02' today>
        <Content
          title='Lorem Ipsum'
          description={[
            "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            "Is simply dummy text of the printing and typesetting industry.", 
          ]}
        />
      </Container>
    </Timeline>
    </>
  );
};

export default TimelineComponent;
