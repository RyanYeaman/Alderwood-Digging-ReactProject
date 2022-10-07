import LearnButton from "./LearnMoreButton"

const Main = () => {
    return (
        <div id="main-container">
            <h1 className="main-title">LET US HELP COMPLETE YOUR PROJECT</h1>
            <p className="main-introduction">Let our wide range of excavation services take the stress of your shoulder</p>
            <section id="main-service-container">
                <div className="service-content" id="main-excvation-service">
                    <div className="main-excavation-photo"></div>
                    <div className="main-service-info">
                        <h1 className="main-info-title">Excavtion</h1>
                        <p className="main-info-descreption">
                            We offer a large range of excavtion services. Get in contact to see how we can help you.
                        </p>
                        <LearnButton />
                    </div>
                </div>

                <div className="service-content" id="main-backfill-service">
                    <div className="main-backfill-photo"></div>
                    <div className="main-service-info">
                        <h1 className="main-info-title backfill-title">Back-Fill & Grading</h1>
                        <p className="main-info-descreption">
                        Any type of earth moving project you have, we can complete! Contact us to learn more. 
                        </p>
                        <LearnButton />
                    </div>
                </div>

                <div className="service-content" id="main-demolition-service">
                    <div className="main-demolition-photo"></div>
                    <div className="main-service-info">
                        <h1 className="main-info-title">Demolition</h1>
                        <p className="main-info-descreption">
                            Demolition projects can be stressful. Let us take care of the details. We’ll make sure your project is ready to go 
                        </p>
                        <LearnButton />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main