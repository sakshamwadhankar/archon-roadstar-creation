import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import TestDriveForm from "./TestDriveForm";
const Header = () => {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center bg-slate-200 rounded-sm">
            <img src="/lovable-uploads/961150df-a464-4cd4-8b84-82c7b536e57f.png" alt="Archon Roadsters Creation" className="h-12 w-auto" />
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="font-bold text-amber-200 text-center mx-0 text-3xl">A R C H O N</h1>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-br-lg ">
              <DropdownMenuItem asChild>
                <a href="#performance" className="w-full cursor-pointer">
                  Performance
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#design" className="w-full cursor-pointer">
                  Design
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#specs" className="w-full cursor-pointer">
                  Specifications
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="w-full cursor-pointer">
                  Contact
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full cursor-pointer" onClick={() => setTestDriveOpen(true)}>
                Book Test Drive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      <TestDriveForm isOpen={testDriveOpen} onClose={() => setTestDriveOpen(false)} />
    </header>;
};
export default Header;