import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SlideBar from "../components/slidebar"
import EmailForm from "../components/emailform"
import ButtonBar from "../components/buttonbar"
import { cHeight, cWeight, cActivity, cLifting, cPercentage, cCardio, cTotal } from "./util"
import fheader from "../images/female.png"
import "bootstrap-css-only"


function IndexPage() {
  const [weight, setWeight] = useState(87);
  const [goal, setGoal] = useState(87);
  const [height, setHeight] = useState(92);
  const [measure, setMeasure] = useState("Imperial");
  const [age, setAge] = useState(24);
  const [activity, setActivity] = useState("Sedentary");
  const [fitness, setFitness] = useState("Beginner");
  const [lifting, setLifting] = useState("None");
  const [cardio, setCardio] = useState("None");
  const [diet, setDiet] = useState("Inconsistent");
  const [cravings, setCravings] = useState("Alcohol");
  const [cardio2, setCardio2] = useState("10 min");


  const begginerButton = (<div className="text-option">

    <h6>Beginner</h6>
    <p> I am uncomfortable and unsure when I enter a gym setting.</p>
  </div>)

  const intermediateButton = (<div className="text-option">
    <h6>Intermediate</h6>
    <p>I am comfortable with most exercises and have tried a targeted exercise plan before.</p>
  </div>)

  const advancedButton = (<div className="text-option">
    <h6>Advanced</h6>
    <p>I am very comfortable in a gym setting and believe I understand my bodymechanics well and how to operate in major, compound lifts.</p>
  </div>)

  const toFeet = (n) => {
    var realFeet = ((n * 0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
  }

  const calculate = () => {
    let calories = cHeight(height) + cWeight(weight, goal) + cActivity(activity) + cLifting(lifting) + cCardio(cardio, cardio2);
    let perc = cPercentage(diet, calories)
    let total = cTotal(perc)
    return total
  }

  const miW = (w) => ((measure === "Metric") ? (w + " kg") : ((Math.trunc(w * 2.2046226)) + " lb"))
  const miL = (h) => ((measure === "Metric") ? (h + " cm") : (toFeet(h)))

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ textAlign: 'center' }}>
      <img src={fheader} ></img>
      </div>
      <div className="section">
        <h5>Age</h5>
        <p>How <strong>old</strong> are you?</p>
        <h4>{age}</h4>
        <SlideBar range={[18, 60]} values={[age]} onUpdate={setAge} />
      </div>
      <div className="section">
        <h5>Measurements</h5>
        <p>Choose your preferred <strong>measurement system</strong></p>
        <ButtonBar selections={["Metric", "Imperial"]} active={measure} onUpdate={setMeasure} />
      </div>
      <div className="section">
        <h5>Height</h5>
        <p>Slide the bar to select your accurate <strong>height</strong></p>
        <h4>{miL(height)}</h4>
        <SlideBar range={[137, 214]} values={[height]} onUpdate={setHeight} />
      </div>
      <div className="section">
        <h5>Current Weight</h5>
        <p>Slide the bar to select your accurate <strong>weight</strong></p>
        <h4>{miW(weight)}</h4>
        <SlideBar range={[39, 136]} values={[weight]} onUpdate={setWeight} />
      </div>
      <div className="section">
        <h5>Goal Weight</h5>
        <p>Slide the bar to select your <strong>goal weight</strong></p>
        <h4>{miW(goal)}</h4>
        <SlideBar range={[39, 113]} values={[goal]} onUpdate={setGoal} />
      </div>
      <div className="section">
        <h5>Activity</h5>
        <p>How <strong>active</strong> are you throughout the day? </p>
        <ButtonBar selections={["Sedentary", "Light", "Moderate", "Heavy"]} onUpdate={setActivity} />
      </div>
      <div className="section">
        <h5>Fitness Level</h5>
        <p>How would you rate your <strong>fitness level</strong>?</p>
        <ButtonBar className="custom" selections={[begginerButton, intermediateButton, advancedButton]}
          onUpdate={setFitness} />
      </div>
      <div className="section">
        <h5>Strength Training Frequency</h5>
        <p>How often do you <strong>train with a form of resistance</strong> each week?</p>
        <ButtonBar onSelectionLabel={"Duration of each session?"} onSelection={["10 min", "20 min", "30-45 min", "60 min"]} selections={["None", "1-2x/week", "3x/week", "4-5x/week", "6x/week"]} onUpdate={setLifting} />
      </div>
      <div className="section">
        <h5>Cardio + Group Fitness Frequency</h5>
        <p>How often do you train your <strong>cardiovascular system</strong>?</p>
        <ButtonBar onSelectionEvent={setCardio2} onSelectionLabel={"Duration of each session?"} onSelection={["10 min", "20 min", "30-45 min", "60 min"]} selections={["None", "1-2x/week", "3x/week", "4-5x/week", "6x/week"]} onUpdate={setCardio} />
      </div>
      <div className="section">
        <h5>Current Diet</h5>
        <p>Which <strong>style of eating</strong> do you currently practice?</p>
        <ButtonBar selections={["Inconsistent", "Balanced", "Paleo", "Keto", "Vegan or Vegetarian"]} onUpdate={setDiet} />
      </div>
      <div className="section">
        <h5>Cravings</h5>
        <p>Which of the following do you <strong>crave</strong>?</p>
        <ButtonBar selections={["Alcohol", "Chocolate", "Ice Cream", "Fried Foods", "Carb-dense Snacks"]} onUpdate={setCravings} />
      </div>
      <div className="section">
        <h5>Where should we send your macros?</h5>
        <p>Write down your email and name</p>
        <EmailForm finalReport={calculate} />
      </div>
    </Layout>
  )
}

export default IndexPage
