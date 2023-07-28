import logo from '../assets/investment-calculator-logo.png';
import "./CalculatorHeader.css"

const CalculatorHeader =() => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
      </header>
    )

}

export default CalculatorHeader