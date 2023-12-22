import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <center>
        <h2>JH BANK</h2>
      </center>

      <div className="marquee-container">
        <div className="marquee">
          <h4>We understand your world! Experience Next Generation Banking!!</h4>
        </div>
      </div>

      <center>
        <div className="custom-content-container">
          <div className="custom-content">
            <div className="quote-container">
              <p className="quote-text">
                “Banks are the engines of economic growth, fueling dreams,
                financing ambitions, and driving progress on the journey of
                prosperity.”
              </p>
            </div>
            <div className="services-container">
              <h3>Our Services</h3>
              <ul>
                <li>Create Data</li>
                <li>Deposit Money</li>
                <li>Withdraw Money</li>
                <li>Business Loans</li>
              </ul>
            </div>
            <div className="about-container">
              <h3>About JH Bank</h3>
              <p>
                JH Bank has been a trusted financial partner for decades,
                providing innovative solutions and excellent customer service.
                Learn more about our history and commitment to your financial
                well-being.
              </p>
            </div>
          </div>
        </div>
      </center>

      <br />
      <br />
      <br />
    </div>
  );
}
