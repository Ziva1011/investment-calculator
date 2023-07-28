import "./CalculatorHeader.css"
import {useState} from "react"

const CalculatorForm =({calculateHandler}) => {
    const [currentSavings, setCurrentSavings]=useState("1000")
    const [yearlySavings, setYearlySavings]=useState("")
    const [expectedInterest, setExpectedInterest]=useState("")
    const [investmentDuration, setInvestmentDuration]=useState("")
    let userInput = {}

    const submitFormHandler = (e) =>{
        e.preventDefault()
        userInput={
            "current-savings": currentSavings,
            "yearly-contribution": yearlySavings,
            "expected-return": expectedInterest,
            "duration": investmentDuration
        }

        calculateHandler(userInput)

    }

    const onChangeHandler=(e, setFunction) =>{
        setFunction(e.target.value)
    }


    const onResetHandler = () =>{
        setCurrentSavings("")
        setYearlySavings("")
        setExpectedInterest("")
        setInvestmentDuration("")
    }


    return (
        <form className="form" onSubmit={submitFormHandler}>
            <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" value ={currentSavings} onChange= {(e)=> onChangeHandler(e, setCurrentSavings)}/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" value ={yearlySavings} onChange= {(e)=> onChangeHandler(e, setYearlySavings)}/>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" value ={expectedInterest} onChange= {(e)=> onChangeHandler(e, setExpectedInterest)} />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" value ={investmentDuration} onChange= {(e)=> onChangeHandler(e, setInvestmentDuration)}/>
            </p>
            </div>
            <p className="actions">
            <button type="reset" onClick = {onResetHandler} className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
            </p>
        </form>
    )

}

export default CalculatorForm