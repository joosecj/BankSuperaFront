type Props = {
  title: string;
}

export default function CardGeneric( {title } : Props) {
  return (
    <h2>{title}</h2>
  );
}