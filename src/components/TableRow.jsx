import "./CalculatorHeader.css"
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

});


const TableRow =({data, investment}) => {
    console.log(investment)
    return (
          <tr>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{data.yearlyInterest}</td>
            <td>{formatter.format(data.savingsEndOfYear -investment - data.yearlyContribution*data.year)}</td>
            <td>{formatter.format(investment + data.yearlyContribution*data.year)}</td>
          </tr>
    )

}

export default TableRow