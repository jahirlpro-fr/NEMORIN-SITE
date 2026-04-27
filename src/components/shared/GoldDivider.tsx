interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div className={`w-full border-t border-gold opacity-30 ${className}`} />
  );
}