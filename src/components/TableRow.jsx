import "./CalculatorHeader.css"

const TableRow =({data, investment}) => {
    console.log(investment)
    return (
          <tr>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.savingsEndOfYear -investment - data.yearlyContribution*data.year}</td>
            <td>{investment + data.yearlyContribution*data.year}</td>
          </tr>
    )

}

export default TableRow