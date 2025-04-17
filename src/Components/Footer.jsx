import "../Footer.css"

export default function Footer() {
    return (
        <>
            <div className="Details">
                <div className="rectangle1"></div>
                <div className="payments">
                    <p className="paymentsHeading">Payment details</p>
                    <p className="texts">Please pay within 15 days of <br></br> receiving this invoice.</p>
                </div>
                <div className="bankingSection">
                    <p className="bankHeading">Bank name  <span className="bankDetails"> XYZ </span></p>
                    <p className="bankHeading"> Account number <span className="bankDetails"> 123456789 </span> </p>
                    <p className="bankHeading"> IFSC code <span className="bankDetails"> 123 456 789 </span> </p>
                </div>
            </div>
            <div className="Contact">
                <div className="rectangle2"></div>
                <p className="contactsHeading">Thanks for the business</p>

                <pre className="contactDetails">hello@gmail.com      +91 9876543210</pre>
            </div>
        </>
    )
}