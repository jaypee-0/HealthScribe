import '../styles/Button.scss';
import { Link } from 'react-router-dom';

interface Button {
  title: String,
  url: String | any,
  bg: Boolean | String,
  color: Boolean | String,
  border: Boolean | String,
}

const Button = ({ title, url, bg, color, border }: Button) => {
  return (
    <div id='Button'>
      <Link to={url}>
        <button
          type="button"
          className='py-2 px-3 py-md-3 px-md-4 px-lg-5 fw-bold'
          style={{ backgroundColor: bg ? '#fff': '#008080', color: color === '#F78104'||color==true ? '#F78104' : 'white', border: border && '1px solid white', }}>
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
