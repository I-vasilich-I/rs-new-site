type SubtitleProps = {
  text: string;
};

export const Subtitle = ({ text }: SubtitleProps) => <div className="subtitle">{text}</div>;
