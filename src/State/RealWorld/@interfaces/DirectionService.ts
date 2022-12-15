import TravelMode from './TravelMode';

export default interface IDirectionService extends ITravelMode {
    getTravelMode(): ITravelMode;
    setTravelMode(state: ITravelMode): void;
}
