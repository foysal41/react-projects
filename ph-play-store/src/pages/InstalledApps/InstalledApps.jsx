import React, { useContext } from "react";
import { InstalledAppsContext } from "./../../context/InstalledAppsContext";

export default function InstalledApps() {
  const useContextData = useContext(InstalledAppsContext);
  const { installedApps, setInstalledApps } = useContextData;

  console.log(installedApps, setInstalledApps);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Apps Found</h2>

        {/* Sort Dropdown */}
        <select className="border rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none">
          <option>low &gt; high</option>
          <option>high &gt; low</option>
        </select>
      </div>

      {installedApps.map((app, idx) => {
        return (
          <div key={idx} className="max-w-5xl mx-auto p-6">
            {/* App List */}
            <div className="space-y-4">
              {/* App Item 1 */}
              <div className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {app.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <span className="text-green-600">⬇</span>{" "}
                        {app.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>{" "}
                        {app.ratingAvg}
                      </span>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                {/* Uninstall Button */}
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
