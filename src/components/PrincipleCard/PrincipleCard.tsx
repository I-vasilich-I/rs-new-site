import { ReactNode } from 'react';

export type PrincipleCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const PrincipleCard = ({ title, description, icon }: PrincipleCardProps) => {
  return (
    <div className="principle-card">
      <div className="accent" />
      {icon}
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="accent-corner" />
    </div>
  );
};
