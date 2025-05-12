
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Book, MessageSquare, Tool, Users } from 'lucide-react';

const Index = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !password) {
      toast({
        title: "Incomplete Fields",
        description: "Please fill in both user ID and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to SkillEx!",
      });
      navigate('/home');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 text-skyBlue opacity-10 animate-bounce-subtle">
          <Book size={64} />
        </div>
        <div className="absolute top-20 right-20 text-tangerine opacity-10 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
          <Tool size={56} />
        </div>
        <div className="absolute bottom-20 left-20 text-mintGreen opacity-10 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <Users size={64} />
        </div>
        <div className="absolute bottom-10 right-10 text-violet opacity-10 animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
          <MessageSquare size={56} />
        </div>
      </div>

      <div className="animate-scale-in z-10 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-skyBlue via-violet to-softPink bg-clip-text text-transparent">
            SkillEx
          </h1>
          <p className="text-gray-600 mt-2">Exchange Skills, Grow Together</p>
        </div>

        <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome to SkillEx</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="userId" className="text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <Input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="rounded-xl"
                    placeholder="Enter your user ID"
                    autoComplete="username"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </div>
                <Button 
                  className="gradient-blue text-white font-bold py-6 rounded-xl btn-bounce mt-2"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-skyBlue font-semibold hover:underline">
                Register now!
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
