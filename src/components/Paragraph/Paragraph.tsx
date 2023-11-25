type ParagraphProps = {
  children?: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => <div className="paragraph">{children}</div>;
