import ITravelMode from "./@interfaces/TravelMode";

export default class WalkMode implements ITravelMode {
  getEta(): number {
    console.log("Calculating ETA (walking)");
    return 4;
  }

  getDirection(): number {
    console.log("Calculating Direction (walking)")
    return 4;
  }
}