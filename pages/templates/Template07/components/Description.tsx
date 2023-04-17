// import "../template01/scss/temp01.scss";

type Props = {
  descText: string;
  className: string;
};
export default function Description({ descText, className }: Props){
  return <p className={className}>{descText}</p>;
};
