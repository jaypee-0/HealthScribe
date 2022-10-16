import React from "react";
import logo from "../assets/blank.jpg";
import AnalysisChart from "../components/AnalysisChart";
import TimelineComponent from "../components/Timeline";
import Navbar from "../layouts/Navbar.SignedIn";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";


const Timeline = () => {
    const [timeline, settimeline] = React.useState<Boolean>(true)
    const [analysis, setanalysis] = React.useState<Boolean>(false)
    
    function showTimeline () {
        settimeline(true)
        setanalysis(false)
    }
    function showAnalysis () {
        settimeline(false)
        setanalysis(true)
    }
    
    const medications = [{name: "Item 1"}, {name: "Item 2"}, {name: "Item 3"}]
    const entries = [{name: "Meal/ food", img: ""}, {name: "Drink", img: ""}, {name: "Mood", img: ""}, {name: "Medication", img: ""}, {name: "Symptom", img: ""}]
    
    const [timelinebox, settimelinebox] = React.useState<Boolean>(true)
    const [showEntries, setshowEntries] = React.useState<Boolean>(false)

    function handleEntries () {
        settimelinebox(!timelinebox)
        setshowEntries(!showEntries)
    }

  return (
    <div className='vh-100' style={{ backgroundColor: "#F5F5F5" }}>
      <Navbar />
      <img
        src={logo}
        className='w-100 d-none d-md-block'
        style={{ height: 150 }}
        alt='background.png'
      />


        <div className="w-100 py-3" style={{background: "white"}}>
            <ul className="list-unstyled mb-0 container d-flex justify-content-around ">
                <li onClick={showTimeline} className="fw-bold" style={{cursor: "pointer"}}>My Timeline</li>
                <li onClick={showAnalysis} className="fw-bold" style={{cursor: "pointer"}}>View Analysis</li>
            </ul>
        </div>

      <div className='my-auto'>
        {timeline && 
            <button onClick={handleEntries} className="rounded-pill position-absolute border-0 bg-secondary" style={{bottom: "5%", height: 60, width: 60, right: '5%'}}><FA className="text-light" icon={showEntries ? faXmark : faPlus} /></button>}
        {timeline && timelinebox &&
        <div className="container d-flex flex-column py-5 flex-md-row align-items-center justify-content-md-around">
            <TimelineComponent />
        </div>}

        {timeline && showEntries && 
        <>
            <div className="col-md-8 mx-auto rounded mt-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded text-light">Entries</header>
                <div className="px-3 py-4">
                {entries.map(({name, img}) => {
                    return (
                        <div key={name} className="pb-3 d-flex">
                            <div className="px-3">
                                <img className="rounded-pill" style={{width: 50, height: 50}} src={img} alt={name + ".png"} />
                            </div>
                            <p>{name}</p>
                        </div>
                        )
                    })}
                    </div>
            </div>
        </>
        }

        {analysis && 
        <div className="container d-flex flex-column py-5 flex-md-row align-items-center justify-content-md-around">
            <div className="col-12 col-md-5">
                <p>What would you like to view?</p>
                <div className="col-10">

                <select name="" id="" className="py-2 px-2 rounded w-100">
                    <option value="Select a symptom">Select a symptom</option>
                    <option value="Item_1">Item_1</option>
                    <option value="Item_1">Item_1</option>
                    <option value="Item_1">Item_1</option>
                    <option value="Item_1">Item_1</option>
                </select>
                </div>

                <div className="mt-5">
                    <p>Medication taken:</p>
                    <ol>
                        {medications.map((data) => {
                            return (
                                <li key={data.name}>{data.name}</li>
                            )
                        })}
                    </ol>
                </div>
                <button
          className='py-3 py-md-2 px-3 py-md-3 px-md-5 mt-5 rounded-pill mb-4 mb-md-0'
          style={{ backgroundColor: '#55565A', color: 'white',  border:'1px solid black' }}>
          {'Update Chart'}
        </button>
            </div>
            <div className="col-12 col-md-7">
                <AnalysisChart />
            </div>
        </div>}
      </div>
    </div>
  );
};

export default Timeline;
