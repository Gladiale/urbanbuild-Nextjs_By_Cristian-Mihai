type PretitleProps = {
  text: string;
  center?: boolean;
};

const Pretitle = ({ text, center }: PretitleProps) => {
  return (
    <div className={`flex gap-3 mb-4 items-center ${center && "justify-center"}`}>
      <div className="w-2 h-2 bg-accent" />
      <p className="font-primary tracking-[3.2px] uppercase">{text}</p>
      <div className="w-2 h-2 bg-accent" />
    </div>
  );
};

export default Pretitle;
