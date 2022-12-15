import DriveMode from './DriveMode';
import BicycleMode from './BicycleMode';
import TransitMode from './TransitMode';
import WalkMode from './WalkMode';
import DirectionService from './DirectionService';

const directionService = new DirectionService(new DriveMode());

directionService.getEta();
directionService.getDirection();

directionService.setTravelMode(new WalkMode);

directionService.getEta();
directionService.getDirection();
