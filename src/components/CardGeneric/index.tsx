import './styles.css';

type Props = {
  title: string;
}

export default function CardGeneric( {title } : Props) {
  return (
    <h2 className='title-card-generic'>{title}</h2>
  );
}