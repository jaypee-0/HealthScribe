import React from "react";
import logo from "../assets/blank.jpg";
import AnalysisChart from "../components/AnalysisChart";
import Navbar from "../layouts/Navbar.SignedIn";

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
            <ul className="list-unstyled mb-0 container d-flex justify-content-around">
                <li onClick={showTimeline} className="fw-bold" style={{cursor: "pointer"}}>My Timeline</li>
                <li onClick={showAnalysis} className="fw-bold" style={{cursor: "pointer"}}>View Analysis</li>
            </ul>
        </div>

      <div className='my-auto position-relative'>
        {timeline && 
        <div className="container d-flex flex-column py-5 flex-md-row align-items-center justify-content-md-around">
            
        </div>}

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
          className='py-2 px-3 py-md-3 px-md-5 mt-5 rounded-pill'
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
