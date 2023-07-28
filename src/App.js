import CalculatorForm from './components/CalculatorForm';
import CalculatorHeader from './components/CalculatorHeader';
import TableResults from './components/TableResults';
import {useState} from "react"

function App() {
  const [results, setResults] = useState(null)
  const [initialInvestment, setInitialInvestment] = useState(0)

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    setInitialInvestment(currentSavings)

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <CalculatorHeader/>

      <CalculatorForm calculateHandler={calculateHandler}/>

      {!results && <p>No data available</p>}
      {results && <TableResults data={results} investment={initialInvestment}/>}
    </div>
  );
}

export default App;
