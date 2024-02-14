
const Button = ({children, href, target}) => {
  return (
    <a className="Btn-primary" href={href} target={target}>
      {children}
    </a>
  );
};

export default Button;