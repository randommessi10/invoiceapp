import "../Header.css"

export default function Header({ props1, props2 }) {
    return (
        <>
            <h1>Invoice</h1>
            <div className="headerContainer">
                <div className="Payables">
                    <p className="sectionHeading"> Payable : $6000</p>
                    <p className="sectionSubHeading"> Dues {props1.dueDate}</p>
                    <p className="texts"> 
                        Issued {props1.issueDate} <br></br>
                        Ref. #{props1.number}</p>
                </div>


                <div className="BilledTo">
                    <p className="sectionHeading">Billed to </p>
                    <p className="sectionSubHeading"> {props2.name}</p>
                    <p className="texts"> 
                        {props2.address} <br></br>
                        {props2.city} <br></br>
                        {props2.phone}
                    </p>
                </div>
                <div className="From">
                    <p className="sectionHeading"> From </p>
                    <p className="sectionSubHeading"> Panda inc</p>
                    <p className="texts"> 
                        Company address <br></br>
                        City, State, Zip <br></br>
                        TAX ID
                        </p>
                </div>
            </div>
        </>
    )
}