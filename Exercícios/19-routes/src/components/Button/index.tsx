import './styles.css';

type Props = {
  text: string;
}

function Button({text}: Props) {
  return (
    <div className="button">
      {text}
    </div>
  );
}

export default Button;
