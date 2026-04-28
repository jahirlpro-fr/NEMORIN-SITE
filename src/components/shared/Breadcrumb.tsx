import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
      <nav className="bg-bg-alt py-4 border-b border-border w-screen relative left-1/2 -translate-x-1/2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-primary font-medium" : "text-text-muted"}>
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 text-text-muted/50" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}