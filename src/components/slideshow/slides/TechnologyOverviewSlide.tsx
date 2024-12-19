import React from 'react';
import { Brain, Clock, Activity, Shield, Heart, Users } from 'lucide-react';

const TechnologyOverviewSlide = () => {
  return (
    <div className="space-y-8">
      {/* ANESA Platform */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">ANESA Technology Platform</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revolutionary Diagnostics */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Revolutionary Diagnostics</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">136+ Health Parameters</p>
                  <p className="text-sm text-gray-600">Comprehensive health analysis in single screening</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Rapid Analysis</p>
                  <p className="text-sm text-gray-600">Complete screening in 6-12 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">AI-Powered Analysis</p>
                  <p className="text-sm text-gray-600">Deep learning algorithms for accurate diagnostics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Patent Advantages */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Patent Advantages</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Protected Technology</p>
                  <p className="text-sm text-gray-600">Patented non-invasive screening methodology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Unique Algorithms</p>
                  <p className="text-sm text-gray-600">Proprietary AI analysis systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KOLIBRI Platform */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">KOLIBRI: Democratizing Healthcare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home Health Innovation */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Home Health Innovation</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">40+ Health Parameters</p>
                  <p className="text-sm text-gray-600">Comprehensive home health monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Real-Time Analysis</p>
                  <p className="text-sm text-gray-600">Instant health insights and alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Remote Monitoring</p>
                  <p className="text-sm text-gray-600">Connected healthcare ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Impact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Market Impact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Remote patient monitoring capabilities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Cloud-based health data management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Preventive healthcare focus</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Easy integration with healthcare systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyOverviewSlide;