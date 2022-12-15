import TravelMode from './@interfaces/TravelMode';

export default class BicycleMode implements ITravelMode {
    getEta(): number {
        console.log('Calculating ETA (bicycling)');
        return 2;
    }

    getDirection(): number {
        console.log('Calculating Direction (bycicling)');
        return 2;
    }
}
