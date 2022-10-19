import React from "react";
import logo from "../assets/blank.jpg";
import AnalysisChart from "../components/AnalysisChart";
import TimelineComponent from "../components/Timeline";
import Navbar from "../layouts/Navbar.SignedIn";
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

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
    const entries = [{name: "Meal/ food", img: "", url: handleMeal}, {name: "Drink", img: "", url: handleDrink}, {name: "Mood", img: "", url: handleMood}, {name: "Medication", img: "", url: handleMedication}, {name: "Symptom", img: "", url: handleSymptom}]
    
    const [timelinebox, settimelinebox] = React.useState<Boolean>(true)
    const [showEntries, setshowEntries] = React.useState<Boolean>(false)
    
    const [showMeal, setshowMeal] = React.useState<Boolean>(false)
    const [showDrink, setshowDrink] = React.useState<Boolean>(false)
    const [showMood, setshowMood] = React.useState<Boolean>(false)
    const [showMedication, setshowMedication] = React.useState<Boolean>(false)
    const [showSymptom, setshowSymptom] = React.useState<Boolean>(false)

    function handleEntries () {
        settimelinebox(!timelinebox)
        setshowEntries(!showEntries)
        //setshowMeal(false)
    }
    
    function handleMeal () {
        settimelinebox(false)
        setshowEntries(false)
        setshowMeal(true)
    }
    function handleDrink () {
        settimelinebox(false)
        setshowEntries(false)
        setshowDrink(true)
    }
    function handleMood () {
        settimelinebox(false)
        setshowEntries(false)
        setshowMood(true)
    }
    function handleMedication () {
        settimelinebox(false)
        setshowEntries(false)
        setshowMedication(true)
    }
    function handleSymptom () {
        settimelinebox(false)
        setshowEntries(false)
        setshowSymptom(true)
    }
    function Back () {
        setshowMeal(false)
        setshowDrink(false)
        setshowMood(false)
        setshowMedication(false)
        setshowSymptom(false)
        setshowEntries(false)
        settimelinebox(true)
    }

    const Moodmarks = [
        {
          value: 1,
          label: '😊',
        },
        {
          value: 2,
          label: '🙂',
        },
        {
          value: 3,
          label: '😑',
        },
        {
          value: 4,
          label: '☹️',
        },
        {
          value: 5,
          label: '😦',
        },
      ];
      function moodvaluetext(value: number) {
        return `${value}°C`;
      }
    //   Symptom Slider
      const [value1, setValue1] = React.useState<number>(0);
      const [value2, setValue2] = React.useState<number>(0);
      const [value3, setValue3] = React.useState<number>(0);
      const [value4, setValue4] = React.useState<number>(0);
      const [value5, setValue5] = React.useState<number>(0);
      const [value6, setValue6] = React.useState<number>(0);
      const [value7, setValue7] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue1(newValue);
    }
  };
  const handleChangeDiarrhea = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue2(newValue);
    }
  };
  const handleChangeConstipation = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue3(newValue);
    }
  };
  const handleChangeHeadache = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue4(newValue);
    }
  };
  const handleChangeNausea = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue5(newValue);
    }
  };
  const handleChangeFever = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue6(newValue);
    }
  };
  const handleChangeVomiting = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
        setValue7(newValue);
    }
  };
  function valueLabelFormat(value: number) {
  
    let scaledValue = value;
    return `${scaledValue}`;  
  }

  return (
    <div style={{ minHeight:"100vh", backgroundColor: "#F5F5F5" }}>
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
                {entries.map(({name, img, url}) => {
                    return (
                        <div key={name} className="pb-3 d-flex align-items-center">
                            <div className="px-3">
                                <div className="rounded-pill" style={{background: "#55565A", width: 50, height: 50}}></div>
                                {/* <img className="rounded-pill" style={{width: 50, height: 50, backgroundColor: '#dd00ff'}} src={img} alt={".png"} /> */}
                            </div>
                            <button onClick={url} className="mb-0 border-0">{name}</button>
                        </div>
                        )
                    })}
                    </div>
            </div>
        </>
        }
        {/* Meal */}
        {showMeal &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded px-4 text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex">
                    <img src="" alt="jo.jpg" className="me-2" />
                    Meal/Food
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Add Meal/Food</h5>
                        <div className="px-4 py-2 rounded border mt-3">
                        <div className="d-flex align-items-center my-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments (optional)</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                        <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
                        <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
          </div>
            </div>
        </>
        }

        {/* Drink */}
        {showDrink &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded px-4 text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex">
                    <img src="" alt="jo.jpg" className="me-2" />
                    Drink
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Add Drink</h5>
                        <div className="px-4 py-2 rounded border mt-3">
                        <div className="d-flex align-items-center my-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                        <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
                        <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
          </div>
            </div>
        </>
        }

        {/* Medication */}
        {showMedication &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded px-4 text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex">
                    <img src="" alt="jo.jpg" className="me-2" />
                    Medication
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Add Medication</h5>
                        <div className="px-4 py-2 rounded border mt-3">
                        <div className="d-flex align-items-center my-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                        <button className="rounded-pill border-0 bg-secondary me-3" style={{height: 40, width: 40}}><FA className="text-light" icon={faPlus} /></button>
                        <p className="ms-1 mb-0 fs-6">Add</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                        <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
                        <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
          </div>
            </div>
        </>
        }

        {/* Mood */}
        {showMood &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded px-4 text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex">
                    <img src="" alt="jo.jpg" className="me-2" />
                    Mood
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Mood</h5>
                        <div className="py-3 mt-3">
                        <Slider
                          aria-label="Mood"
                          defaultValue={1}
                          getAriaValueText={moodvaluetext}
                          step={1}
                          max={5}
                          min={1}
                          valueLabelDisplay="on"
                          marks={Moodmarks}
                        />
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                        <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
                        <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
          </div>
            </div>
        </>
        }

         {/* Mood */}
         {showSymptom &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bg-dark rounded px-4 text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex">
                    <img src="" alt="jo.jpg" className="me-2" />
                    Symptom
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Symptom Intensity</h5>
                        <div className="mt-3 d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Stomach ache</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value1}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value1)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Diarrhea</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value2}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeDiarrhea}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value2)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Constipation</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value3}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeConstipation}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value3)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Headache</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value4}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeHeadache}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value4)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Nausea</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value5}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeNausea}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value5)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Fever</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value6}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeFever}
                          valueLabelDisplay="auto"
                          aria-labelledby="Fever"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value6)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Vomiting</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                        <Slider
                          value={value7}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChangeVomiting}
                          valueLabelDisplay="auto"
                          aria-labelledby="Vomiting"
                        />
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value7)}
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                        <Button title={'CANCEL'} url={'/'} bg={false} color={false} border={true} />
                        <Button title={'SAVE'} url={'/timeline'} bg color border={false} />
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
