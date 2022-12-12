import ITravelMode from "./@interfaces/TravelMode";
import IDirectionService from "./@interfaces/DirectionService";

export default class DirectionService implements IDirectionService {
  private travelMode: ITravelMode;

  constructor(travelMode: ITravelMode) {
    this.travelMode = travelMode;
  }

  public getEta() {
    return this.travelMode.getEta();
  }
  
  public getDirection() {
    return this.travelMode.getDirection();
  }
  
  public getTravelMode() {
    return this.travelMode;
  }
  
  public setTravelMode(state: ITravelMode) {
    console.log(`State Context: Transitioning to ${(<any>state).constructor.name}.`);
    this.travelMode = state;
  }
}