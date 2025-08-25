import { cn } from "@/lib/utils";

interface CustomizeButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
}

const CustomizeButton = ({ className, size = "lg", variant = "default" }: CustomizeButtonProps) => {
  return (
    <div className="hidden md:flex justify-center w-full">
      <a
        href="https://arc-customize.vercel.app/"
        className={cn(
          "group relative overflow-hidden rounded-xl shadow-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-3 inline-flex items-center justify-center",
          variant === "default"
            ? "bg-primary text-primary-foreground"
            : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
          className
        )}
      >
        <span className="relative z-10">Customize Your Car</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </a>
    </div>
  );
};

export default CustomizeButton;
