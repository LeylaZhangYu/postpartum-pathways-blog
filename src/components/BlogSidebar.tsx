
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe, BookOpen, Users } from "lucide-react";

export const BlogSidebar = () => {
  return (
    <aside className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-purple-600" />
          Emergency Resources
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-gray-900">Crisis Text Line</p>
            <p className="text-gray-600">Text HOME to 741741</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">National Suicide Prevention</p>
            <p className="text-gray-600">Call 988</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Postpartum Support International</p>
            <p className="text-gray-600">(800) 944-4773</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-600" />
          Helpful Resources
        </h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start text-sm">
            <BookOpen className="w-4 h-4 mr-2" />
            PPD Screening Tools
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            <Users className="w-4 h-4 mr-2" />
            Support Groups
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            <Globe className="w-4 h-4 mr-2" />
            Find a Therapist
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Self-Care Tips</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Rest when your baby sleeps</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Accept help from family and friends</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Eat nutritious meals regularly</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Take short walks outside</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Connect with other new mothers</span>
          </li>
        </ul>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600 font-semibold">SW</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Dr. Sarah Williams</p>
            <p className="text-sm text-gray-600">Perinatal Psychiatrist</p>
          </div>
        </div>
        <p className="text-sm text-gray-700">
          Dr. Williams specializes in maternal mental health and has helped hundreds of 
          women overcome postpartum depression.
        </p>
      </Card>
    </aside>
  );
};
