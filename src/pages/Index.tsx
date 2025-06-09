
import { BlogHeader } from "@/components/BlogHeader";
import { BlogContent } from "@/components/BlogContent";
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogFooter } from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
          <div className="lg:col-span-3">
            <BlogContent />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
        <BlogFooter />
      </div>
    </div>
  );
};

export default Index;
