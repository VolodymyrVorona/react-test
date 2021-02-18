import PropTypes from 'prop-types';

function Painting({ url, title, authorName, profileUrl, price, quantity }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Ціна: {price}</p>
      <p>Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'} </p>
      <button type="button">Добавити в кошик</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
