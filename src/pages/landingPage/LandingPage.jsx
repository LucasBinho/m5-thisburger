import "./landingPage.css";
import burgerLogo from '/src/assets/thisburger-logo.png';
import arrow from '/src/assets/arrow-lpsection1.png';
import backgroundBurger from '/src/assets/b3-lpsection2.jpg'
import promoBurger from '/src/assets/promo-bb-lpsection3.jpg'


export const LandingPage = () => {

  return  (
    
    <div className="lp">
      <div className="lpDiv1">
        <div className="lpSection1">
          <h6>NO BURGER LIKE</h6>
          <h1 className="title-section1">This.Burger</h1>
          <h4 className="subtitle-section1">PEÇA DE QUALQUER LUGAR</h4>
          <img src={burgerLogo} className="logo-section1" />
          <a href="#promo">
            <img
              src={arrow}
              className="arrowSection1"
            />
          </a>
        </div>
      </div>

      <div className="lpDiv2">
        <div className="lpSection2">
          <img src={backgroundBurger} className="imageSection2" />
        </div>
      </div>

      <div className="lpDiv3">
        <div className="lpSection3">
          <img
            src={promoBurger}
            id="promo"
            className="imageSection3"
          />
        </div>
      </div>

      <div className="lpDiv4">
        <h2>WHERE location LIKE This.Burger</h2>
        <div className="lpSection4">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Blk%203%20Lot%209%20Avenida%20Rizal%20street%20Bahayang%20Pag%20Asa%20Subd,%20Bacoor,%204102%20Cavite,%20Filipinas&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              <a href="https://putlocker-is.org">putlocker</a>
              <a href="https://www.embedgooglemap.net">embed responsive google map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
