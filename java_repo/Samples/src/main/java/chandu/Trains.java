package chandu;

public class Trains {
	int NumCars;

	public Trains() {
		// Initial Constructor to set state variables to 0
		NumCars = 0;
	}

	public Trains(int numcars1) {
		// Second Constructor that requires numcars value to be supplied for Train1.
		NumCars = numcars1;
	}

	public int getNumCars() {
		// Getter Method to return numcars
		//System.out.println("The value in NumCars is :" + NumCars);
		return NumCars;
	}
}
