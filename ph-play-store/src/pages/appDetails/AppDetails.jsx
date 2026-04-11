import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const expectedApp = apps.find((app) => app.id === parseInt(id));

  const useContextData = useContext(InstalledAppsContext);
  const { installedApps, setInstalledApps } = useContextData;

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const handleInstallApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} is installed!`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Top Section */}
      <div className="border rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start bg-white shadow-sm">
        <img
          src={expectedApp.image}
          alt="App Icon"
          className="w-28 h-28 object-contain"
        />

        {/* App Info */}
        <div className="flex-1 space-y-3">
          <div>
            <h2 className="text-2xl font-semibold">{expectedApp.title}</h2>
            <p className="text-gray-500 text-sm">
              Developed by{" "}
              <span className="text-blue-600">{expectedApp.companyName}</span>
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mt-4">
            <div>
              <p className="text-gray-500 text-sm">Downloads</p>
              <p className="font-semibold text-lg">{expectedApp.downloads}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Average Ratings</p>
              <p className="font-semibold text-lg">{expectedApp.ratingAvg}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <p className="font-semibold text-lg">{expectedApp.reviews}</p>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstallApp}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium"
            >
              Install Now ({expectedApp.size} MB)
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Ratings</h3>
        <div className="space-y-3">
          {[
            { star: "5 star", value: "90%" },
            { star: "4 star", value: "60%" },
            { star: "3 star", value: "30%" },
            { star: "2 star", value: "15%" },
            { star: "1 star", value: "8%" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-12 text-sm text-gray-600">{item.star}</span>
              <div className="flex-1 bg-gray-200 h-3 rounded">
                <div
                  className="bg-orange-500 h-3 rounded"
                  style={{ width: item.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          {expectedApp.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
