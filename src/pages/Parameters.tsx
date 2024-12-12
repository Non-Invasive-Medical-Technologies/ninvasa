import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";

const Parameters = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const parameters = {
    general: {
      title: "General Parameters",
      items: [
        "Health Index",
        "Biological Age",
        "Stress Index",
        "Energy Balance",
        "Adaptation Level",
        "Physical Activity Level"
      ]
    },
    cardiovascular: {
      title: "Cardiovascular Parameters",
      items: [
        "Heart Rate",
        "Heart Rate Variability",
        "Blood Pressure (Systolic)",
        "Blood Pressure (Diastolic)",
        "Cardiac Output",
        "Stroke Volume",
        "Vascular Resistance"
      ]
    },
    metabolic: {
      title: "Metabolic Parameters",
      items: [
        "Basal Metabolic Rate",
        "Glucose Metabolism",
        "Lipid Metabolism",
        "Protein Metabolism",
        "Electrolyte Balance",
        "Acid-Base Balance"
      ]
    },
    respiratory: {
      title: "Respiratory Parameters",
      items: [
        "Respiratory Rate",
        "Oxygen Saturation",
        "Respiratory Volume",
        "Lung Capacity",
        "Gas Exchange Efficiency"
      ]
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="section-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-center">Test Parameters</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-8 text-center">
            Our diagnostic devices measure and analyze over 100 health parameters across multiple physiological systems. 
            Below is a selection of key parameters that are evaluated during each screening.
          </p>

          <div className="space-y-4">
            {Object.entries(parameters).map(([key, category]) => (
              <Card key={key} className="overflow-hidden">
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{category.title}</span>
                  {expandedCategory === key ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedCategory === key && (
                  <div className="p-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-medical-600 rounded-full" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Note: This is a representative selection of parameters. The actual number and type of parameters 
            may vary depending on the specific device model and configuration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parameters;