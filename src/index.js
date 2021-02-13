import ReactDOM from 'react-dom';
import paintings from './paintings.json';

const painting = paintings[0];

function Painting({ url, title, authorName, profileUrl, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Ціна: {price}</p>
      <p>Доступність: закінчується або є в наявності</p>
      <button type="button">Добавити в кошик</button>
    </div>
  );
}

ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.tag}
    price={painting.price}
  />,
  document.querySelector('#root'),
);
