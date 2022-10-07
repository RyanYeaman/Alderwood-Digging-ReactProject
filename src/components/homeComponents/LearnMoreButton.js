import { Link } from "react-router-dom"; 

const LearnMoreButton = () => {
  return (
    <button className="learn-button">
        <Link className="learn-link" to="/our-services">Learn More!</Link>
    </button>
  )
}

export default LearnMoreButton