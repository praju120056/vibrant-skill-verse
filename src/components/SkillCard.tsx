
import React from 'react';
import { Book, MessageSquare, Tool, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCardProps = {
  name: string;
  type: 'teaching' | 'creative' | 'technical' | 'social';
  className?: string;
};

const SkillCard = ({ name, type, className }: SkillCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'teaching':
        return <Book className="h-6 w-6" />;
      case 'creative':
        return <User className="h-6 w-6" />;
      case 'technical':
        return <Tool className="h-6 w-6" />;
      case 'social':
        return <MessageSquare className="h-6 w-6" />;
      default:
        return <Book className="h-6 w-6" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'teaching':
        return 'gradient-blue';
      case 'creative':
        return 'gradient-pink';
      case 'technical':
        return 'gradient-green';
      case 'social':
        return 'gradient-purple';
      default:
        return 'gradient-orange';
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-2xl card-shadow overflow-hidden transform transition-all duration-300 hover:scale-105",
        getGradient(),
        className
      )}
    >
      <div className="bg-white/80 backdrop-blur p-3 rounded-full mb-3">
        {getIcon()}
      </div>
      <h3 className="text-white font-bold text-lg text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;
