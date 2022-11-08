//import Logo from "../assets/Logo.svg";
import React, { useEffect, useState } from "react";
import Mood from "../assets/Mood.svg";
import Medication from "../assets/Medication.svg";
import Symptom from "../assets/Symptom.svg";
import Food from "../assets/Food.svg";
import Delete from "../assets/deleteW.svg";
import Drink from "../assets/Drink.svg";
import AnalysisChart from "../components/AnalysisChart";
import TimelineComponent from "../components/Timeline";
import Navbar from "../layouts/Navbar.SignedIn";
import Slider from '@mui/material/Slider';
import insightsSelected from '../assets/icons/insightsSelected.svg'
import insightsUnSelected from '../assets/icons/insightsUnSelected.svg'
import timelineSelected from '../assets/icons/timelineSelected.svg'
import timelineUnSelected from '../assets/icons/timelineUnSelected.svg'
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { purple } from "@mui/material/colors";

const symptomValues = 
  {
    symptom: '',
    intensity: 0,
    comment: '',
    time: '',
    date: '',
  }
;


const Timeline = () => {
    const history = useNavigate()
    const theme = createTheme({
        palette: {
            primary: {                
                main: '#368C9A',
            },
            secondary: {                
                main: purple[500],
            },
          },
      });

    const [timeline, settimeline] = React.useState<Boolean>(true)
    const [analysis, setanalysis] = React.useState<Boolean>(false)
 
    const [symptoms, setSymptoms] = useState(symptomValues);

  useEffect(() => {
    localStorage.setItem("symptom", JSON.stringify(symptoms));
  }, [symptoms]);

  const storesSymptoms = () => {
    const storedValues = localStorage.getItem("symptom");
    if(!storedValues) { return symptoms; }

    return JSON.parse(storedValues);
  }

  useEffect(() => {storesSymptoms(); }, [])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setSymptoms({...symptoms, symptom: '', intensity: '', comment: '', time: '', date: ''} as any);
    }
  
    function handleChangeValue(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setshowSymptom((previousValues) => ({
        ...previousValues,
        [event.target.name]: event.target.value,
      }));
    }

    function showTimeline () {
        settimeline(true)
        setanalysis(false)
    }
    function showAnalysis () {
        settimeline(false)
        setanalysis(true)
    }
    
    const medications = [{name: "Item 1"}, {name: "Item 2"}, {name: "Item 3"}]
    const entries = [{name: "Meal/ food", img: Food, url: handleMeal}, {name: "Drink", img: Drink, url: handleDrink}, {name: "Mood", img: Mood, url: handleMood}, {name: "Medication", img: Medication, url: handleMedication}, {name: "Symptom", img: Symptom, url: handleSymptom}]
    
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

        <div className="w-100" style={{background: "white"}}>
            <ul className="list-unstyled mb-0 container d-flex justify-content-around ">
                <li onClick={showTimeline} className="fw-bold py-3" style={{cursor: "pointer", borderBottom: timeline ? '4px solid #368C9A' : 'unset'}}><img src={timelineSelected} className="img-fluid me-2 " alt="" /> My Timeline</li>
                <li onClick={showAnalysis} className="fw-bold py-3" style={{cursor: "pointer", borderBottom: analysis ? '4px solid #368C9A' : 'unset'}}><img src={analysis ? insightsSelected : insightsUnSelected} className="img-fluid me-2 " alt="" /> View Analysis</li>
            </ul>
        </div>

      <div className='my-auto'>
        {timeline && showSymptom === false && showMedication === false && showMood === false && showDrink === false && showMeal === false &&
            <button onClick={handleEntries} className="rounded-pill position-absolute border-0 bgPr" style={{bottom: "5%", height: 60, width: 60, right: '5%'}}><FA className="text-light" icon={showEntries ? faXmark : faPlus} /></button>}
        {timeline && timelinebox &&
        <div className="flex-column flex-md-row align-items-center justify-content-md-around h-100">
            <TimelineComponent />
        </div>}

        {timeline && showEntries && 
        <>
            <div className="col-md-8 mx-auto rounded mt-5 bg-light">
                <header className="text-center py-3 w-100 bgPr rounded text-light">Log Event</header>
                <div className="px-3 py-4">
                {entries.map(({name, img, url}) => {
                    return (
                        <div key={name} className="py-2 d-flex align-items-center" style={{borderBottom: "1px solid #d0dffd"}}>
                            <div className="px-3">
                                {/* <div className="rounded-pill" style={{background: "#55565A", width: 50, height: 50}}></div> */}
                                <img className="rounded-pill" style={{width: 50, height: 50,}} src={img} alt={".png"} />
                            </div>
                            <button onClick={url} className="mb-0 border-0 bg-transparent">{name}</button>
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
                <header className="text-center py-3 w-100 bgPr rounded px-4 text-light d-flex justify-content-between align-items-center">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex align-items-center justify-content-center">
                    <img src={Food} alt="jo.jpg" className="me-2" />
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
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    CANCEL
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    SAVE
                    </button>
          </div>
            </div>
        </>
        }

        {/* Drink */}
        {showDrink &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bgPr rounded px-4 text-light d-flex justify-content-between align-items-center">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex align-items-center justify-content-center">
                    <img src={Drink} alt="jo.jpg" className="me-2" />
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
                        <label htmlFor="" className="mb-2 rounded">Comments (optional)</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    CANCEL
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    SAVE
                    </button>
          </div>
            </div>
        </>
        }

        {/* Medication */}
        {showMedication &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bgPr rounded px-4 text-light d-flex justify-content-between align-items-center">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex align-items-center justify-content-center">
                    <img src={Medication} alt="jo.jpg" className="me-2" />
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
                        <label htmlFor="" className="mb-2 rounded">Comments (optional)</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    CANCEL
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    SAVE
                    </button>
          </div>
            </div>
        </>
        }

        {/* Mood */}
        {showMood &&
        <>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bgPr rounded px-4 text-light d-flex align-items-center  justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex align-items-center justify-content-center">
                    <img src={Mood} alt="jo.jpg" className="me-2" />
                    Mood
                </p>
                    <img onClick={()=> history('/delete')} src={Delete} alt="jo.jpg" className="me-2" />
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
                            <ThemeProvider theme={theme}>
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
                        </ThemeProvider> 
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments (optional)</label>
                        <textarea name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    CANCEL
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    SAVE
                    </button>
          </div>
            </div>
        </>
        }

         {/* Mood */}
         {showSymptom &&
        <form onSubmit={handleSubmit}>
            <div className="col-md-8 mx-auto rounded mt-5 pb-5 bg-light">
                <header className="text-center py-3 w-100 bgPr rounded px-4 align-items-center text-light d-flex justify-content-between">
                <p className="mb-0" onClick={Back}><FA icon={faArrowLeft} /></p>
                <p className="mb-0 mx-auto d-flex align-items-center justify-content-center">
                    <img src={Symptom} alt="jo.jpg" className="me-3" />
                    Symptom
                </p>
                </header>
                <div className="px-4 pb-4 pt-4 d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">

                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Date</label>
                            <input onChange={handleChangeValue} type="date" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        <div style={{width: '47%'}} className="d-block">
                            <label htmlFor="" className="mb-2">Time</label>
                            <input onChange={handleChangeValue} type="text" className="w-100 rounded py-2 py-md-3 border px-2" />
                        </div>
                        </div>

                        <h5 className="mt-5">Symptom Intensity</h5>
                        <div className="mt-3 d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Stomach ache</p>
                            <div className=" col-8 d-flex align-items-center">
                               <ThemeProvider theme={theme}>
                        <Slider
                          value={value1}
                          min={0}
                          step={1}
                          max={5}
                          getAriaValueText={valueLabelFormat}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="Mood"
                          color="primary"
                          />
                          </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value1)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Diarrhea</p>
                            <div className=" col-8 d-flex align-items-center">
                            <ThemeProvider theme={theme}>   
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value2)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Constipation</p>
                            <div className=" col-8 d-flex align-items-center">

                            <ThemeProvider theme={theme}>
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value3)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Headache</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                            <ThemeProvider theme={theme}>
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value4)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Nausea</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                            <ThemeProvider theme={theme}>
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value5)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Fever</p>
                            <div className=" col-8 d-flex align-items-center">
                               
                            <ThemeProvider theme={theme}> 
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value6)}
                            </p>
                        </div>
                        </div>
                        <div className="d-flex mb-2">
                            <p className="mb-0 col-3 col-sm-4">Vomiting</p>
                            <div className=" col-8 d-flex align-items-center">
                                
                            <ThemeProvider theme={theme}>
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
                        </ThemeProvider> 
                            <p className="ms-3 mb-0 fw-bold">                         
                            {valueLabelFormat(value7)}
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <label htmlFor="" className="mb-2 rounded">Comments (optional)</label>
                        <textarea onChange={handleChangeValue} name="" id="" cols={30}rows={10} className="w-100 rounded"></textarea>
                    </div>
                </div>
                    <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 me-4">
                    <button className="mt-4 border-0 bg-transparent fw-bold px-5 py-3 rounded-pill text-Pr">
                    CANCEL
                    </button>
                    <button className="mt-4 border px-5 py-3 fw-bold rounded-pill bgPr text-white">
                    SAVE
                    </button>
                    </div>
                </div>
        </form>
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
