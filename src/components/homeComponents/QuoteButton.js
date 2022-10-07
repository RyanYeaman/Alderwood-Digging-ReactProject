import { Link } from "react-router-dom"

export const QuoteButton = () => {
  return (
    <>
        <button className="quote-button">
            <Link to="/get-quote" className="quote-link">GET A QUOTE</Link>
        </button>
    </>
  )
}

export default QuoteButton
