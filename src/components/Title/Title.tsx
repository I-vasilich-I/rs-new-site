import { ReactNode } from 'react';

export enum TitleType {
  Regular = 'regular',
  Big = 'big',
  ExtraBig = 'extra-big',
}

type TitleProps = {
  text: string;
  type?: TitleType;
  hasAsterisk?: boolean;
  hasLines?: boolean;
  children?: ReactNode;
};

export const Title = ({ text, type, hasAsterisk, hasLines, children }: TitleProps) => {
  const titleType = type ?? TitleType.Regular;

  return (
    <div className={`title ${titleType}`}>
      {hasLines && <span className="before">‖</span>}
      {hasAsterisk && <span className="before">*</span>}
      <div>
        {text}
        {children}
      </div>
    </div>
  );
};
