package chandu;

import chandu.Trains;
import chandu.Locations;
import chandu.Distance;

public class HomeWork {
	public static void main(String[] args) {
		// Object Creation by passing in value for Train1
		Trains train1 = new Trains(87);

		// Calling Getter Method to verify Train1
		train1.getNumCars();

		// Object Creation by passing in value for Train2
		Trains train2 = new Trains(102);

		// Calling Getter Method to verify Train2
		train2.getNumCars();

		// Object creation by passing in values for Rolla.
		Locations rolla = new Locations(0, 0);

		// Object creation by passing in values for Denver.
		Locations denver = new Locations(50, 300);

		// Object creation for distance.
		Distance distance1 = new Distance(rolla.Xloc, rolla.Yloc, denver.Xloc, denver.Yloc);
		System.out.println(distance1.distanceSQRTMethod());

		// Calling set method for Rolla
		rolla.setLocations(10, 20);

		Distance distance2 = new Distance(rolla.Xloc, rolla.Yloc, denver.Xloc, denver.Yloc);
		System.out.println(distance2.distanceSQRTMethod());
	}

}
