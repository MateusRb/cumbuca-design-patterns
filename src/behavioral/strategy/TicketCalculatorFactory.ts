import AirportCalculator from "./AirportCalculator";
import BeachCalculator from "./BeachCalculator";
import { ParkingLocation } from "./ParkingLot";
import ShoppingCalculator from "./ShoppingCalculator";
import TicketCalculator from "./TicketCalculator";

export default class TicketCalculatorFactory {

	static create (location: ParkingLocation): TicketCalculator {
		const calculators: Record<string, TicketCalculator> = {
			[ParkingLocation.BEACH]: new BeachCalculator(),
			[ParkingLocation.SHOPPING]: new ShoppingCalculator(),
			[ParkingLocation.AIRPORT]: new AirportCalculator()
		}
		const calculator = calculators[location]
		if (!calculator) throw new Error("Ticket calculator not found");
		return calculator
	}
}
