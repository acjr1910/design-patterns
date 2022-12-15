import TravelMode from './@interfaces/TravelMode';

export default class DriveMode implements ITravelMode {
    getEta(): number {
        console.log('Calculating ETA (driving)');
        return 1;
    }

    getDirection(): number {
        console.log('Calculating Direction (driving)');
        return 1;
    }
}
