import "./CalculatorHeader.css"
import TableRow from "./TableRow"

const TableResults =({data, investment}) => {
  console.log(investment)
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((instance) =>
            <TableRow data={instance} investment={investment}/>)}
        </tbody>
      </table>
    )

}

export default TableResults