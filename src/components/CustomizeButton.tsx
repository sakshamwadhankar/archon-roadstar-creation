import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomizeButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
}

const CustomizeButton = ({ className, size = "lg", variant = "default" }: CustomizeButtonProps) => {
  return (
    <div className="flex justify-center w-full">
      <Button
        asChild
        variant={variant === "default" ? "premium" : "outline"}
        size={size}
        className={cn(
          "group relative overflow-hidden rounded-xl shadow-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-3",
          variant === "outline" && "border-primary hover:bg-primary hover:text-primary-foreground",
          className
        )}
      >
        <Link to="/customize">
          <span className="relative z-10">Customize Your Car</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </Link>
      </Button>
    </div>
  );
};

export default CustomizeButton;