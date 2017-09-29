package chandu;

public class Locations {
	double Xloc;
	double Yloc;

	public Locations() {
		// Initial Constructor to set state variables to 0
		Xloc = 0.0;
		Yloc = 0.0;
	}

	public Locations(double x_loc_rolla, double y_loc_rolla) {
		// Second Constructor that requires x and y locations to be supplied for Rolla.
		Xloc = x_loc_rolla;
		Yloc = y_loc_rolla;
	}

	public double getXloc() {
		// Getter Method to return XLocation
		System.out.println("The Xlocation value is " + Xloc);
		return Xloc;
	}

	public double getYloc() {
		// Getter Method to return YLocation
		System.out.println("The Ylocation value is " + Yloc);
		return Yloc;
	}

	public void setLocations(double xloc1_rolla, double yloc1_rolla) {
		// Method to set Locations supplied by the user for Rolla
		Xloc = xloc1_rolla;
		Yloc = yloc1_rolla;
	}
}
