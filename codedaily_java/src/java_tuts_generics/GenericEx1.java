package java_tuts_generics;

public class GenericEx1 {
	public static void main(String args[]) {
		Integer[] intArray = { 1, 2, 3, 4, 5 };
		Double[] doubleArray = { 1.1, 1.2, 3d, 4d, 5d };
		Character[] charArray = { 'H', 'E', 'L' };
		printArray(intArray);
		printArray(doubleArray);
		printArray(charArray);
	}
	public static <E> void printArray(E[] inputArray){
		for(E element : inputArray){
			System.out.printf("%s,", element );
		}
		System.out.println();
	}
}
