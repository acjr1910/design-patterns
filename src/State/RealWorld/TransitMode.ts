import TravelMode from './@interfaces/TravelMode';

export default class TransitMode implements ITravelMode {
    getEta(): number {
        console.log('Calculating ETA (transit)');
        return 3;
    }

    getDirection(): number {
        console.log('Calculating Direction (transit)');
        return 3;
    }
}
