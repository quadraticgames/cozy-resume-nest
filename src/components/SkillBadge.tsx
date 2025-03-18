
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const SkillBadge = ({ name, icon, className }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105",
        className
      )}
    >
      {icon && <span>{icon}</span>}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
