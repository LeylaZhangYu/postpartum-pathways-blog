
import { Calendar, User, Clock } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Understanding Postpartum Depression
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          A comprehensive guide to recognizing, understanding, and overcoming postpartum depression
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Dr. Sarah Williams, MD</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>June 9, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </header>
  );
};
