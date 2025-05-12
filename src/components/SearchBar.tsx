
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

type SearchBarProps = {
  onSearch: (query: string, type: 'skill' | 'person' | 'both') => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'skill' | 'person' | 'both'>('skill');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills or people..."
              className="pl-4 pr-10 py-6 rounded-xl shadow-sm border-2 border-gray-100 focus:border-skyBlue text-lg"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <Button 
            type="submit" 
            className="gradient-orange text-white py-6 px-8 rounded-xl font-bold btn-bounce"
          >
            Search
          </Button>
        </div>
        
        <div className="flex justify-center">
          <RadioGroup 
            value={searchType} 
            onValueChange={(value) => setSearchType(value as 'skill' | 'person' | 'both')}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="skill" id="skill" />
              <Label htmlFor="skill" className="cursor-pointer">Search by Skill</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="person" id="person" />
              <Label htmlFor="person" className="cursor-pointer">Search by Person</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="cursor-pointer">Search by Both</Label>
            </div>
          </RadioGroup>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
