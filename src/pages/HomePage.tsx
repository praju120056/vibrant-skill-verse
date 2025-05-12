
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SkillCard from '@/components/SkillCard';
import UserCard from '@/components/UserCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Sample data
const trendingSkills = [
  { name: "Web Development", type: "technical" },
  { name: "Public Speaking", type: "teaching" },
  { name: "Digital Art", type: "creative" },
  { name: "Language Exchange", type: "social" },
  { name: "Data Science", type: "technical" },
  { name: "Fitness Training", type: "teaching" },
];

const sampleUsers = [
  {
    name: "Alex Johnson",
    knownSkills: ["Web Development", "UX Design", "JavaScript"],
    wantedSkills: ["Spanish", "Public Speaking"],
    availability: "Weekends, Evenings",
    isVerified: true,
  },
  {
    name: "Maya Williams",
    knownSkills: ["Yoga Instruction", "Nutrition", "Meditation"],
    wantedSkills: ["Photography", "Digital Marketing"],
    availability: "Mornings, Weekends",
    isVerified: true,
  },
  {
    name: "Daniel Smith",
    knownSkills: ["Data Science", "Python", "Machine Learning"],
    wantedSkills: ["Guitar", "Singing", "Japanese"],
    availability: "Tuesday and Thursday evenings",
    isVerified: false,
  },
  {
    name: "Sophia Chen",
    knownSkills: ["Mandarin", "Cooking", "Calligraphy"],
    wantedSkills: ["Web Development", "Video Editing"],
    availability: "Weekdays after 5 PM",
    isVerified: true,
  },
];

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string, type: 'skill' | 'person' | 'both') => {
    setIsLoading(true);
    setHasSearched(true);

    // Simulate API call
    setTimeout(() => {
      let results = [];
      const searchTermLower = query.toLowerCase();
      
      if (type === 'skill' || type === 'both') {
        results = sampleUsers.filter(user => 
          user.knownSkills.some(skill => skill.toLowerCase().includes(searchTermLower)) ||
          user.wantedSkills.some(skill => skill.toLowerCase().includes(searchTermLower))
        );
      } else if (type === 'person') {
        results = sampleUsers.filter(user => 
          user.name.toLowerCase().includes(searchTermLower)
        );
      }
      
      if (type === 'both' && results.length > 1) {
        results = [results[0]]; // Only show first match for 'both' search
      }
      
      setSearchResults(results);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Banner */}
        <section className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-skyBlue via-violet to-softPink text-white">
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="3" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
          <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Discover. Learn.<br/>Exchange Skills.
              </h1>
              <p className="text-lg opacity-90 mb-6 animate-slide-up">
                Connect with people who want to learn what you know, and teach what you want to learn.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-violet hover:bg-gray-100 btn-bounce text-lg font-semibold animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Get Started
              </Button>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="People sharing skills"
                className="rounded-xl shadow-lg max-h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Trending Skills Section */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Skills</h2>
            <Button variant="ghost" className="flex items-center gap-1 text-skyBlue hover:text-sky-700">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                name={skill.name} 
                type={skill.type as any} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Find Your Match</h2>
          <SearchBar onSearch={handleSearch} />
          
          {/* Search Results */}
          {hasSearched && (
            <div className="mt-8">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet border-r-transparent"></div>
                  <p className="mt-4 text-gray-600">Searching for matches...</p>
                </div>
              ) : (
                <>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.map((user, index) => (
                        <UserCard 
                          key={index}
                          name={user.name}
                          knownSkills={user.knownSkills}
                          wantedSkills={user.wantedSkills}
                          availability={user.availability}
                          isVerified={user.isVerified}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto w-24 h-24 mb-4 text-gray-300">
                        <Search className="w-full h-full" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Oops! No such skill/person found.</h3>
                      <p className="text-gray-600">Try different keywords or search criteria.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>
      </div>
      
      <footer className="bg-gray-100 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 SkillEx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
