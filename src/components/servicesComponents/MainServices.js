import QuouteButton from "../homeComponents/QuoteButton"
const MainServices = () => {
    return (
        <div id="services-main-section">
            <div id="services-main-container">
                <h1 className="services-main-title">Our Services</h1>
                <p className="services-main-introduction">
                    It doesn’t matter if your project is simple or complicated, we have
                    the excprience to handle it.
                </p>
                <div className="services-list-container">
                    <h2 className="services-list-title">Servcies that we provide </h2>
                    <ul className="services-list">
                        <li className="services-list-items">
                            <div>Excavtion</div>
                        </li>
                        <li className="services-list-items">
                            <div>Trenching</div>
                        </li>
                        <li className="services-list-items">
                            <div>Back-Fill {"&"} Grading</div>
                        </li>
                        <li className="services-list-items">
                            <div>Demolition</div>
                        </li>
                        <li className="services-list-items">
                            <div>Landscaping</div>
                        </li>
                    </ul>
                </div>
                <p className="contact-info-main"><b>Need something more specific?</b> Give us a call and see how we can help!</p>
                <p className="contact-info-main"><b>Contact us!</b> <span className="contact-info-styles">(416)-660-1875</span> or <span className="contact-info-styles">Alderwooddiggingcrew@gmail.com</span></p>
                <QuouteButton />
            </div>
        </div>
    )
}

export default MainServices