
import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';

type UserCardProps = {
  name: string;
  avatar?: string;
  knownSkills: string[];
  wantedSkills: string[];
  availability: string;
  isVerified: boolean;
};

const UserCard = ({ 
  name, 
  avatar, 
  knownSkills, 
  wantedSkills, 
  availability, 
  isVerified 
}: UserCardProps) => {
  const { toast } = useToast();

  const handleContactRequest = () => {
    toast({
      title: "Contact Request Sent",
      description: `You've sent a contact request to ${name}`,
    });
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden card-shadow animate-scale-in">
      <div className="h-12 bg-gradient-to-r from-skyBlue to-violet"></div>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-20 w-20 border-4 border-white -mt-16 mb-2 shadow-lg">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-violet to-softPink text-white">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">{name}</h3>
            {isVerified && (
              <Badge variant="outline" className="bg-green-100 text-green-700 flex items-center gap-1">
                <Check className="h-3 w-3" /> Verified
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Skills I Can Teach</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              {knownSkills.map((skill, i) => (
                <Badge key={i} className="bg-mintGreen/20 text-mintGreen hover:bg-mintGreen/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Skills I Want to Learn</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              {wantedSkills.map((skill, i) => (
                <Badge key={i} variant="outline" className="border-softPink text-softPink hover:bg-softPink/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Availability</h4>
            <p className="text-sm mt-1">{availability}</p>
          </div>
        </div>
        
        <Button 
          onClick={handleContactRequest}
          className="w-full gradient-blue text-white rounded-xl flex items-center gap-2 btn-bounce"
        >
          <MessageSquare className="h-4 w-4" />
          Send Contact Request
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
