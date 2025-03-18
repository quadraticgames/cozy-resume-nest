
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-border/50 h-full flex flex-col">
      <div className="overflow-hidden h-48 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-playfair">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/70">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {repoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>View Live</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
