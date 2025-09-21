import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  mediumLink,
}) {
  return (
    <Link
      href={mediumLink}
      target="_blank"
      className="group relative bg-card border border-zinc-300 dark:border-zinc-600 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <article>
        {/* Category badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta information */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Read more link */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </article>
    </Link>
  );
}
