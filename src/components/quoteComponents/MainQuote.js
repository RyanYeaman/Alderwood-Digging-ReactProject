
const MainQuote = () => {
    return (
        <div id="quote-main-section">
            <div className="quote-main-container">
                <div className="quote-description">
                    <h3 className="quote-description-title">We look forward to hearing about your project!</h3>
                    <p className="quote-description-introduction">
                        With our team's exprience and dedication to help complete your projects objective, we
                        understand that each job is not the same as the last. We are happy to hear from you, to hear about your project getting a firm understanding of objective so we can bring our best care
                        and services to the job site.
                    </p>
                </div>
                <form className="quote-user-input">
                    <h3 className="quote-input-title">
                        ASK US A QUESTION / TELL US ABOUT YOUR PROJOECT
                    </h3>
                    <div className="name-input-container">
                        <label className="name-label" htmlFor="name-input">Name</label>
                        <input id="name-input" type="text"></input>
                    </div>
                    <div className="email-input-container">
                        <label className="email-label" htmlFor="email-input">E-mail</label>
                        <input id="email-input" type="text"></input>
                    </div>
                    <div className="inquiry-input-container">
                        <label className="inquiry-label" htmlFor="inquiry-input">Inquiry</label>
                        <textarea id="inquiry-input" type="text"></textarea>
                    </div>
                    <input className="quote-submit-button" type="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default MainQuote