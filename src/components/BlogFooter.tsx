
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Bookmark, ThumbsUp } from "lucide-react";

export const BlogFooter = () => {
  return (
    <footer className="py-8">
      <Card className="p-8 text-center bg-gradient-to-r from-purple-50 to-blue-50">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Remember: You Are Not Alone
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          Postpartum depression is treatable, and with the right support, you can feel like 
          yourself again. Reaching out for help is the first step toward recovery.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Share2 className="w-4 h-4 mr-2" />
            Share This Article
          </Button>
          <Button variant="outline">
            <Bookmark className="w-4 h-4 mr-2" />
            Save for Later
          </Button>
          <Button variant="outline">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Helpful (24)
          </Button>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>Medical disclaimer: This article is for informational purposes only and should not replace professional medical advice.</p>
        </div>
      </Card>
    </footer>
  );
};
