package SamplesProject.Samples;

import java.util.ArrayList;
import java.util.List;

public class EnhancedForLoop {
	public static void main(String[] args) {
		//Test case: 1 Iterate over Null List
		//List<String> listOfStrings = null;
		//iterateOverNullList(listOfStrings);
		
		//Test Case 2: Iterate over Enhanced For Loop checking if the invocation is happening everytime.
		iterate();
	}

	private static void iterateOverNullList(List<String> listOfStrings) {
		//this will throw null pointer exception
		for (String nullKey : listOfStrings) {
			System.out.println(nullKey);
		}
	}
	
	private static void iterate() {
		// is this called everytime ? will be printed in case if in enhnaced for loop
		// Function is alredy called everytime.
		for (String someKey : returnListOfStrings()) {
			System.out.println(someKey);
		}
		//Expectation: [M] returnListOfStrings is only called once.
	}
	
	private static List<String> returnListOfStrings(){
		System.out.println("is this called everytime ?");
		List<String> listOfStrings = new ArrayList<String>();
		listOfStrings.add("john");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		listOfStrings.add("isha");
		return listOfStrings;	
	}
}
