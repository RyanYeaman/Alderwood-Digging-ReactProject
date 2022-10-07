import QuoteButton from "./QuoteButton";
const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-image">
        <h1 className="footer-image-title">CONTACT US <br></br> TODAY!</h1>
        <h3 className="footer-image-introduction">We offer competitive quotes</h3>
        <QuoteButton />
      </div>
      <div id="footer-contact-info">
        <h1 className="footer-contact-title">CONTACT US</h1>
        <div className="footer-contact-phone">
          <h2 className="footer-title">Phone</h2>
          <p className="contact-information">416-660-1875</p>
        </div>
        <div className="footer-contact-email">
          <h2 className="footer-title">E-mail</h2>
          <p className="contact-information">Alderwooddigging@gmail.com</p>
        </div>
        <div className="footer-contact-address">
          <h2 className="footer-title">Address</h2>
          <p className="contact-information">289 Birmingham St Etobicoke, ON M8V 2E5</p>
        </div>
      </div>
    </div>
  )
}

export default Footer