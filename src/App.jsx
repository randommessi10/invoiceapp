import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import ClientList from './ClientList'

export default function App() {
  const obj1 = {
    issueDate: "12/12/2022",
    dueDate: "12/12/2022",
    number: "123456789"
  }

  const obj2 = {
    name: "Company name",
    address: "Address",
    city: "City",
    phone: "1234567890"
  }
  return (
    <>
      <ClientList />
    </>
  )
}
