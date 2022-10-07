import QuoteButton from "./QuoteButton"

const Header = () => {
  return (
    <div id="header-container">
        <h1 className="home-header-title">Alderwood Digging <br></br>Crew</h1>
        <h3 className="header-introduction">We know what it takes to finish a job on time and on a budget </h3>
        <QuoteButton />
    </div>
  )
}

export default Header