
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  term1: string;
  term2: string;
  onTerm1Change: (value: string) => void;
  onTerm2Change: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  term1,
  term2,
  onTerm1Change,
  onTerm2Change,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Primeira pesquisa (ex: cabo)"
            value={term1}
            onChange={(e) => onTerm1Change(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-md border-white/20"
          />
        </div>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Segunda pesquisa (ex: branco)"
            value={term2}
            onChange={(e) => onTerm2Change(e.target.value)}
            className="pl-10 bg-white/10 backdrop-blur-md border-white/20"
          />
        </div>
      </div>
      <p className="text-sm text-white/70 text-center">
        Digite termos nos dois campos para encontrar produtos que correspondam a ambos os critérios
      </p>
    </div>
  );
};

export default SearchBar;
