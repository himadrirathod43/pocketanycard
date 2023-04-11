// import "../template01/scss/temp01.scss";

type Props = {
  descText: string;
  className: string;
};
export const Description: React.FC<Props> = ({ descText, className }) => {
  return <p className={className}>{descText}</p>;
};
