const path = require("path");
const fs = require("fs");

const { parse } = require("csv-parse");
const habitablePLanet = [];
function isHabitablePLanet(planet) {
  // the function used here is used to check the available planets data with the reference to planet earth
  return (
    planet["koi_disposition"] == "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
// HOW TO ADD NEW PROMISE IN JAVASCRIPT
/* const promise =new Promise((resolve,reject)=>{
    resolve(42);
});
promise.then((result)=>{

})
const result = await promise;
console.log(result);
 */
function loadPlanetData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "planet_data.csv")
    )
      // this createReadstream results in a event emitter  which emits an event .on is used to listen to that event
      .pipe(
        // the pipe here is used as readstream at one end and writestream at the other end which is accepted as the input to parse
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        // .on here is used to listen to the events like the data even and a callback to listen to it

        if (isHabitablePLanet(data)) {
          habitablePLanet.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        // console.log(
        //   habitablePLanet.map((planet) => {
        //     return planet["kepler_name"];
        //   })
        // );
        console.log(`${habitablePLanet.length} habital planets found `);
      });
    resolve();
  });
}

module.exports = {
  loadPlanetData,
  planets: habitablePLanet,
};
