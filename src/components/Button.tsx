import '../styles/Button.scss';
import { Link } from 'react-router-dom';

interface Button {
  title: String,
  url: String | any,
  bg: Boolean | String,
  color: Boolean | String,
}

const Button = ({ title, url, bg, color }: Button) => {
  return (
    <div id='Button'>
      <Link to={url}>
        <button
          className='py-2 px-3 py-md-3 px-md-5'
          style={{ backgroundColor: bg ? '#55565A': 'transparent', color: color === 'white'||color==true ? 'white' : 'black' }}>
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
