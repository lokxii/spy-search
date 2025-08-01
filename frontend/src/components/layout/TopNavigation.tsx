
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, Eye, MessageSquare, Newspaper, GraduationCap } from "lucide-react";

interface TopNavigationProps {
  onNewConversation: () => void;
  onSettingsClick: () => void;
}

export const TopNavigation = ({ onNewConversation, onSettingsClick }: TopNavigationProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border/20 bg-background">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Link to="/" onClick={onNewConversation} className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
            <Eye className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-base font-light gradient-text">Spy Search</h1>
        </Link>
        <div className="flex gap-2">
          <Link to="/news">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Newspaper className="h-4 w-4 mr-2" />
              Discover
            </Button>
          </Link>
          <Link to="/academic">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <GraduationCap className="h-4 w-4 mr-2" />
              Academic
            </Button>
          </Link>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onSettingsClick}
        className="text-muted-foreground hover:text-foreground"
      >
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </Button>
    </div>
  );
};
