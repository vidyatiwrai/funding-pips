import React from 'react';
import pLogo from './p_logo.png';
import Tradingimage from "./tradingobjectives.png"
import Youtube from "./YOUTUBE LOGO.jpeg"
import Heroimage from "./herodescription.png"

import './Footer.css'; 



function Header() {
  return (
    <>
       <div className="header_container">
      <div className="footer-logo">
      <img src={pLogo} alt="Main Logo"  className='logo-white'/>
        <p>FUNDING PIPS</p>
      </div>
      <div className="middle_header">
        <h4 href="Home" color={{color:'#1877f2'}}>Home</h4>
        <h4 href="Trading" color={{color:'whitesmoke'}}>Trading Rules</h4>
        <h4 href="FAQ">FAQ</h4>
        <h4 href="Contact">Contact Us</h4>
        <button class="challenge-button">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-upper-right-arrow-1438213-1216174.png" alt="Arrow Icon"/>
    Buy challenge
  </button>
        <h4 href="Dashboard" color={{color:'#1877f2'}}>Dashboard</h4>
      </div>
      <div className="dark_header">last</div>
    </div>
  

    <div className="landing_capital">
      <div className="skill_line">
      <label className="skill">
  <span style={{ color: '#e5e7eb', marginRight:'2px'}}>Your Skill Is </span>
  <br />
  <span style={{ color: '#1877f2' }}>Our Capital.</span>
</label>

        <p>We risk while you receive up to 90% of the Profit.</p>
        <div className="btn_group">
        <button className="challenge-button">
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-upper-right-arrow-1438213-1216174.png'/>
            Buy challenge
          </button>
          <button className="large-button">
            <img src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png" alt="Discord Logo" className="logo" />
            Join Discord
          </button>
          <button className="large-button">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAvhioHIzZSBvVfzmG5l9sEZOj_WYHzSHwu_RxFZiuAhOhEI1bqxyeeZ2F1WknnFqpk&usqp=CAU" alt="winner Logo" className="logo" />
            Join Competiton
          </button>
        </div>
      </div>
     

      <div className="accout_img">
        <img src="https://fundingpips.com/static/84deede54bceaaa879e1e27771531cd8/43568/hero-dashboard.webp" alt="#" />
      </div>
    </div>
  
    <div className='mid_text'>
        <h1>Bloomberg</h1>
        <h1>I N S I D E R</h1>
        <h1>yahoo/finance</h1>
      </div>
  

      <div className="instrment_group">
      <div className="instrument_img">
        <img src="https://fundingpips.com/static/e3fc965c874d5f340304accf626cf228/a0a2b/hero2-dashboard.webp" alt="#" />
      </div>
      <div className="traders">
        <h1 style={{color:'#e5e7eb'}}>Built By Traders For Traders. Your Trading Ideas, Our Risk.</h1>
        <p style={{color:'#9ca3af'}}>
          Funding Pips believes that traders go through three main levels in their careers,
          Student - Practitioner - Master, with FP's in house-built two phases evaluation
          (Student - Practitioner) and funded (Master), which's built to find trading talents
          while helping them get through their funding problems, by offering them the possibility
          to trade up $300.000.
        </p>
      </div>
    </div>


    <div className="trade_group">
      <div className="trade_box">
        <img src="https://fundingpips.com/static/f65768512c0f4558e370ff39f71634a1/5f169/notradingrestrictions.webp" alt="#" />
        <h2>Trade the way you want</h2>
        <p>Use an "EA", hold during news, hold trades over the weekend and trade lot sizes as big as the leverage allows for.</p>
      </div>
      <div className="trade_box">
        <img src="https://fundingpips.com/static/ac558df791d8a820f9aa706fcbe4a868/ceedb/freeretry.webp" alt="#" />
        <h2>Unlimited Trading Days</h2>
        <p>We understand that putting a time limit creates a stressful environment, therefore we have no minimum or maximum limit on trading days. Take all the time you need.</p>
      </div>
      <div className="trade_box">
        <img src="https://fundingpips.com/static/583e1bee03eb070c8b953483981e04ef/53b9b/scalingplan.webp" alt="#" />
        <h2>Scaling Plan</h2>
        <p>Scale your way up with us. We increase the account size, Maximum Loss, and Maximum Daily Loss to a 14% Maximum Loss and a 7% Daily Loss limit. Once the trader receives a 'Hot Seat' at the firm, they can trade up to $2 million with on-demand payouts and a monthly bonus. Read more about our <a href="">Scaling Plan.</a></p>
      </div>
      <div className="trade_box">
        <img src="https://fundingpips.com/static/eb2761374f918d59625938a6336cde82/5f169/payoutsystem.webp" alt="#" />
        <h2>Payout System</h2>
        <p>Request your payouts on a 5 trading days basis with a 80% profit split. Once a trader earns a Hot Seat in our firm, the trader receives on-demand payouts with a 90% profit split.</p>
      </div>
    </div>
  


    <div className="container">
      <div className="button-container">
        <input type="radio" id="matchtrader" name="trading-platform" checked />
        <label htmlFor="matchtrader" className="matchtrader" >Matchtrader</label>
        <input type="radio" id="ctrader" name="trading-platform" />
        <label htmlFor="ctrader" className="ctrader" >cTrader</label>
      </div>
    </div>


    <div className="investment-container">
  <div className="investment-button-container">
    <input type="radio" id="fiveT" name="investment-amount" checked />
    <label htmlFor="fiveT" className="fiveLabel">$5k</label>
    <input type="radio" id="Tent" name="investment-amount" />
    <label htmlFor="Tent" className="tenLabel">$10k</label>
    <input type="radio" id="twoT" name="investment-amount" />
    <label htmlFor="twoT" className="twoLabel">$2k</label>
    <input type="radio" id="fiftyT" name="investment-amount" />
    <label htmlFor="fiftyT" className="fiftyLabel">$50k</label>
    <input type="radio" id="hundredT" name="investment-amount" />
    <label htmlFor="hundredT" className="hundredLabel">$100k</label>
  </div>
</div>

<h1 class="flex-container">
  <span class="evaluation">Evaluation<br/> Stage</span>
  <span class="foundation">Foundation<br/>  Stage</span>
</h1>

<div class="student_container">
  <h2 class="student-practitioner">Student</h2>
  <h2 class="prac_practitioner">Practitioner</h2>
  <div><h2 class="master_practitioner">Master</h2></div>
</div>


<div className="box-container">
      <div className="box">
        <div className="row">
          <div className="column">
            <h3>Trading period</h3>
          </div>
          <div className="column">
            <p>0</p>
          </div>
          <div className="column">
            <p>0</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Minimum Trading Days</h3>
          </div>
          <div className="column">
            <p>0 days</p>
          </div>
          <div className="column">
            <p>0 days</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Maximum Daily Loss</h3>
          </div>
          <div className="column">
            <p>5%</p>
          </div>
          <div className="column">
            <p>5%</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Maximum Loss</h3>
          </div>
          <div className="column">
            <p>10%</p>
          </div>
          <div className="column">
            <p>10%</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Profit Target</h3>
          </div>
          <div className="column">
            <p>$8,000 (8%)</p>
          </div>
          <div className="column">
            <p>$5,000 (5%)</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Leverage</h3>
          </div>
          <div className="column">
            <p>1:100</p>
          </div>
          <div className="column">
            <p>1:100</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="row">
          <div className="column">
            <h3>Trading period</h3>
          </div>
          <div className="column">
            <p>0</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Maximum Daily Loss</h3>
          </div>
          <div className="column">
            <p>5%</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Maximum Loss</h3>
          </div>
          <div className="column">
            <p>10%</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Profit Target</h3>
          </div>
          <div className="column">
            <p>-</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Leverage</h3>
          </div>
          <div className="column">
            <p>1:100</p>
          </div>
        </div>
      </div>
      <div className="refund_text">
        <button className="refund-button">Refund+Profit splits</button>
      </div>
    </div>



<div class="dayschallenge_365">
  <div class="price">
    <h1>$399</h1>
    <p>For 100k account</p>
  </div>
  <button class="challenge-button">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-upper-right-arrow-1438213-1216174.png" alt="Arrow Icon"/>
    Buy challenge
  </button>
</div>


{/* ///////////////////////////////////////////// */}

<div className="trading-team">
      <div className="trading-team-content">
        <h1>Stay updated with our in depth trading rules.</h1><br/>
        <p>Trading Objectives are a key element to evaluate a trader's skills, meeting the trading objectives proves that the trader is disciplined and consistent.</p><br/>
        <div className="trading-buttons">
          <button>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-upper-right-arrow-1438213-1216174.png'/>
            Trading Rules
          </button>
        </div>
      </div>
      <div className='trading-image'>
      <img src={Tradingimage}/>
      </div>
    </div>
<br/><br/>
  <div className="join-team">
      <div className="join-team-content">
        <h2>Join A Team Of Skillful Traders</h2>
        <p>When it comes to trading we believe in consistency and risk management, which are the discipline indicator, the rest of the skills can be developed. Please keep that in mind! We are seeking real traders not bounty hunters.</p>
        <div className="join-buttons">
          <button className="challenge-button">
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-upper-right-arrow-1438213-1216174.png'/>
            Buy challenge
          </button>
          <button className="large-button">
            <img src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png" alt="Discord Logo" className="logo" />
            Join Discord
          </button>
        </div>
      </div>
    </div>


{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}


    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={pLogo} alt="Main Logo"  className='logo-white'/>
          <h3>FUNDING PIPS</h3>
        </div>
        <p>
          All content published and distributed by Funding Pips, and its affiliates (collectively, the Company) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund. Funding Pips does not act as or conduct services as a broker. Funding Pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition. Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology, and other business-related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results. Applicable law to be under the laws of The United Arab Emirates.
        </p>
        <p>Please note that all accounts we provide to our clients are demo accounts in a simulated trading environment.</p>
        <p>Restricted countries: United Arab Emirates and Vietnam</p>
        <div className="social-logos">
        <div className="social-logo">
    <img src={Youtube} alt="logo"/>

  </div>
  <div className="social-logo">
    <img src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-transparent-facebook-f-22.png" alt="facbook Logo" />
  </div>

  <div className="social-logo">
    <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="Instagram Logo" />
  </div>

  <div className="social-logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_o5pERKH7eL8480NQYMdv6lXsRsvavT_55qJk00AEUw&s" alt="Twitter Logo" />
  </div>

  <div className="social-logo">
    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" alt="Discord Logo" />
  </div>
        </div>
      </div>
    
      <div className="footer-right">
      <div className="newsletter">
  <div className="newsletter-header">
    <h4>Newsletter Signup</h4>
  </div>
  <div className="newsletter-input">
    <input type="email" placeholder="Enter your email" />
    <span className="arrow-button" >&#8594;</span>
  </div>
</div>

        <div className='right_link'>
        <div className="legal-links">
          <h4>LEGAL</h4>
          <ul>
            <li><h3 href="#">Privacy Policy</h3></li>
            <li><h3 href="#">Terms & Conditions</h3></li>
          </ul>
        </div>
        <div className="useful-links">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><h3 href="#">Home</h3></li>
            <li><h3 href="#">FAQs</h3></li>
            <li><h3 href="#">Trading Rules</h3></li>
            <li><h3 href="#">Affiliate Program</h3></li>
            <li><h3 href="#">Contact Us</h3></li>
          </ul>
        </div>
        </div>
      </div>
    </footer>

    <footer>
  <p>&copy; 2024 Funding Pips. All Rights Reserved.</p>
</footer>

    </>
  );
}



export default Header;
