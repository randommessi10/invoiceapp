import "../Main.css"

export default function Main() {
return (
    <>
    <hr></hr>
        <div className="container">
        <div className="rectangleMain"></div>
        <div className="mainTable">
        <h1 className="tableTitle"> Responsive Web Design</h1>
        <table>
            <thead>
                <tr>
                    <td className="tableHeading itemdescription">ITEM DESCRIPTION</td>
                    <td className="tableHeading quantity">QTY</td>
                    <td className="tableHeading rate">RATE</td>
                    <td className="tableHeading amount">AMOUNT</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="itemName">Item1</td>
                    <td className="itemDetails quantity">1</td>
                    <td className="itemDetails rate">$100</td>
                    <td className="itemDetails amount">$100</td>
                </tr>
                <tr>
                    <td className="itemName">Item2</td>
                    <td className="itemDetails quantity">1</td>
                    <td className="itemDetails rate">$100</td>
                    <td className="itemDetails amount">$100</td>
                </tr>
                
                <tr>
                    <td className="subHeading">Subtotal</td>
                    <td></td>
                    <td></td>
                    <td className="itemDetails amount">$200</td>
                </tr>
                <tr>
                    <td className="subHeading">Taxes</td>
                    <td></td>
                    <td></td>
                    <td className="itemDetails amount">$200</td>
                </tr>
                
                <tr>
                    <td className="total">Total</td>
                    <td></td>
                    <td></td>
                    <td className="totalPrice amount">$200</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    <hr></hr>
    </>
)
}