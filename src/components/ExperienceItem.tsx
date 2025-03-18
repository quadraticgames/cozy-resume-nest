
import React from 'react';
import { cn } from '@/lib/utils';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  isLast = false
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-px bg-border"></div>
      )}
      
      {/* Timeline circle */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">{period}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-primary font-medium">{company}</div>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
