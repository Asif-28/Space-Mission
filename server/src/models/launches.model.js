
const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "kepler Exploration X",
  rocket: "Explorer ISI",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  customer: ["Asif", "NASA"],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);
function getAllLaunches() {
  return Array.from(launches.values());
}
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ["Asif Space Control Mission", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
};
// Map object in javascript
