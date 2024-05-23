/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import aestheticskater from '../../images/svg/aestheticskater.svg';
import aestheticsporty from '../../images/svg/aestheticsporty.svg';
import casualaesthetic from '../../images/svg/casualaesthetic.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => (
  <div className="carousel max-w-[250px] ">
    <input
      className="carousel-open"
      type="radio"
      id="carousel-1"
      name="carousel"
      aria-hidden="true"
      hidden="true"
      checked="checked"
    />
    <div className="carousel-item">
      <img src={casualaesthetic} alt="" />
    </div>
    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
    <div className="carousel-item">
      <img src={aestheticsporty} alt="" />
    </div>
    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
    <div className="carousel-item">
      <img src={aestheticskater} alt="" />
    </div>
    <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
    <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
    <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
    <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
    <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
    <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
  </div>
);

export default Slider;
