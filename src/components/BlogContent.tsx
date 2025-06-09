
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, AlertTriangle, Users, Lightbulb } from "lucide-react";

export const BlogContent = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="prose prose-lg max-w-none">
        
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Heart className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            If you're experiencing thoughts of self-harm or harming your baby, please seek immediate help. 
            Call the National Suicide Prevention Lifeline at 988 or go to your nearest emergency room.
          </AlertDescription>
        </Alert>

        <div className="mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Mother holding baby in soft lighting" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-purple-600" />
            </div>
            What is Postpartum Depression?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Postpartum depression (PPD) is a serious mental health condition that affects approximately 
            10-20% of new mothers. Unlike the "baby blues," which typically resolve within two weeks 
            after delivery, postpartum depression involves persistent feelings of sadness, anxiety, 
            and exhaustion that can significantly interfere with daily life and bonding with your baby.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It's important to understand that postpartum depression is not a character flaw or weakness. 
            It's a medical condition that requires proper treatment and support. With the right help, 
            recovery is possible and expected.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            Signs and Symptoms
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 border-l-4 border-l-red-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Symptoms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Persistent sadness or mood swings</li>
                <li>• Severe anxiety or panic attacks</li>
                <li>• Feelings of guilt, shame, or inadequacy</li>
                <li>• Loss of interest in activities</li>
                <li>• Difficulty bonding with your baby</li>
                <li>• Thoughts of harming yourself or your baby</li>
              </ul>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-orange-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Symptoms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Severe fatigue or loss of energy</li>
                <li>• Changes in appetite or sleep patterns</li>
                <li>• Difficulty concentrating</li>
                <li>• Restlessness or agitation</li>
                <li>• Physical aches and pains</li>
                <li>• Withdrawal from family and friends</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-green-600" />
            </div>
            Risk Factors and Causes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Postpartum depression results from a combination of physical, emotional, and lifestyle factors. 
            Understanding these risk factors can help identify those who may be more vulnerable:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Biological Factors</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hormonal changes</li>
                  <li>• Previous history of depression</li>
                  <li>• Family history of mental illness</li>
                  <li>• Thyroid problems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Psychological Factors</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• High stress levels</li>
                  <li>• Unplanned pregnancy</li>
                  <li>• Relationship problems</li>
                  <li>• Financial difficulties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Social Factors</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lack of support system</li>
                  <li>• Difficult delivery</li>
                  <li>• Premature birth</li>
                  <li>• Breastfeeding difficulties</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-blue-600" />
            </div>
            Treatment Options
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news is that postpartum depression is highly treatable. Most women who receive 
            appropriate treatment see significant improvement in their symptoms. Treatment approaches may include:
          </p>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Therapy</h3>
              <p className="text-gray-700 mb-3">
                Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) have proven 
                highly effective for treating postpartum depression.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Individual therapy sessions</li>
                <li>• Group therapy with other new mothers</li>
                <li>• Online therapy options available</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medication</h3>
              <p className="text-gray-700 mb-3">
                Antidepressants can be safely used during breastfeeding. Your healthcare provider 
                will help determine the best option for you.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• SSRIs (Selective Serotonin Reuptake Inhibitors)</li>
                <li>• Safe options for breastfeeding mothers</li>
                <li>• Regular monitoring and adjustment as needed</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Support</h3>
              <p className="text-gray-700 mb-3">
                Self-care and lifestyle changes play a crucial role in recovery and prevention.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Regular exercise and adequate sleep</li>
                <li>• Nutritious diet and social support</li>
                <li>• Stress management techniques</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Help</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you think you might have postpartum depression, it's important to reach out for help. 
            Remember, seeking treatment is a sign of strength, not weakness. The sooner you get help, 
            the sooner you can start feeling better.
          </p>
          
          <Alert className="border-green-200 bg-green-50">
            <Heart className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Start by talking to your healthcare provider, who can assess your symptoms and 
              recommend appropriate treatment options. You can also reach out to mental health 
              professionals who specialize in perinatal mental health.
            </AlertDescription>
          </Alert>
        </section>

      </div>
    </article>
  );
};
