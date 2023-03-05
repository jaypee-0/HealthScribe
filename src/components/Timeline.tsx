import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Timeline, Container, Content } from "vertical-timeline-component-react";
import { useuserAuth } from "../context/UserAuth";
import arrow from "../assets/icons/arrow.png";
import { db } from "./Firebase";
import React from "react";
import "../styles/Timeline.scss";

const TimelineComponent = () => {
    const { userDetails }: any = useuserAuth();
    const [loading, setloading] = React.useState(true);
    const { id } = userDetails;
    const customTheme = {
        yearColor: "#405b73",
        lineColor: "#d0cdc4",
        dotColor: "#262626",
        borderDotColor: "#d0cdc4",
        titleColor: "#405b73",
        subtitleColor: "#bf9765",
        textColor: "#262626"
    };

    const docRef = collection(db, "events");
    const q = query(docRef, where("uid", "==", id));
    const [data, setdata] = React.useState<any>();

    const drink = data?.filter((item: any) => item).map((data: any) => data.drink);
    const meal = data?.filter((item: any) => item).map((data: any) => data.meal);
    const medication = data?.filter((item: any) => item).map((data: any) => data.medication);

    
    React.useEffect(() => {
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((item: any) => {
                setdata([item.data()]);
            });
        });
    }, [id]);

    React.useEffect(() => {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }, []);


    if (loading) {
        return (
            <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems:"center"}}>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
      } else {
        const dataLength = Object.values(data[0]).map((data:any) => data).length;
        return (
            <>
                {dataLength > 2 ? (
                    <div className="py-5">
                        <Timeline lang="en" theme={customTheme} dateFormat="with-weekday" collapse withoutDay>
                            {drink &&
                                drink.map(({ date, drinks, comments, time }: any, index:number) => {
                                    return (
                                        <Container key={index} title={"Drink"} startDate={date} today>
                                            <Content title={drinks[0] + " " + time} description={[comments]} />
                                        </Container>
                                    );
                                })}
                            {meal &&
                                meal.map(({ date, meals, comments, time }: any, index:number) => {
                                    return (
                                        <Container key={index} title={"Meal"} startDate={date} today>
                                            <Content title={meals[0] + " " + time} description={[comments]} />
                                        </Container>
                                    );
                                })}
                            {medication &&
                                medication.map(({ date, medications, comments, time }: any, index:number) => {
                                    return (
                                        <Container key={index} title={"Medication"} startDate={date} today>
                                            <Content title={medications[0] + " " + time} description={[comments]} />
                                        </Container>
                                    );
                                })}
                        </Timeline>
                    </div>
                ) : (
                    <div
                        id="timelineBox"
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            background: "rgba(102, 103, 107, 0.55)",
                            minHeight: "95vh",
                            overflowY: "hidden"
                        }}
                    >
                        <div className="col-md-5 col-lg-3 d-flex flex-column">
                            <p className="text-light fs-3 ">Click the add button to enter an event.</p>
                            <img className="ms-auto arrow" src={arrow} alt="" />
                        </div>
                    </div>
                )}
            </>
        );
    }
};

export default TimelineComponent;
