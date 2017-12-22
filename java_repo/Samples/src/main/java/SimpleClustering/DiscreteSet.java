package SimpleClustering;

import java.util.HashMap;
import java.util.Map;

import SimpleClustering.ResultHandler.GenericHandler;
import SimpleClustering.ResultHandler.ResultHandler;

public class DiscreteSet {

	public static final String[] marksList = { "50", "40", "102", "90", "82", "70", "65", "93", "55", "-1" };
	public static final Cluster maximumEfficacyCluster = new Cluster();
	public static final Cluster minEfficacyCluster = new Cluster();
	public static final Cluster errorCluster = new Cluster();

	public static void main(String[] args) {
		// Boolean Grade
		System.out.println("=========== GRADE PROCESS STARTED ====================");
		Space space = grade();
		System.out.println("=========== GRADE PROCESS COMPLETED ====================");
		System.out.println("=========== BUILDING SPACESTATISTICS ====================");
		space.buildSpaceStats();
		SpaceStats statsOfSpace = space.getSpaceStats();
		System.out.println("=========== BUILDING SPACESTATISTICS COMPLETED====================");
		System.out.println("The total elements in space: " + statsOfSpace.getSizeOfAllElements());
		System.out.println(
				"The total elements in maximum efficacy cluster are: " + statsOfSpace.getMaxEfficacyClusterSize());
		System.out.println(
				"The total elements in minimum efficacy cluster are: " + statsOfSpace.getMinEfficacyClusterSize());
		System.out.println("The total elements in error cluster are: " + statsOfSpace.getErrorClusterSize());
		System.out.println("The Minimum cluster size is: " + statsOfSpace.getMinClusterSize());
		System.out.println("The Maximum cluster size is: " + statsOfSpace.getMaxClusterSize());
	}

	private static Space grade() {
		Map<String, Object> studentsMap = listOfStudents();
		Space studentSpace = new Space();
		
		
		for (int i = 0; i < studentsMap.size(); i++) {
			Student student = (Student) studentsMap.get(String.valueOf(i));
			Result result = StudentGradingSystem.booleanGrading(student);
			GenericHandler resHandler = ResultHandler.getHandler(result.getStatus());
			resHandler.resolve(studentSpace, result);
		}

		return studentSpace;
	}

	public static Map<String, Object> listOfStudents() {
		Map<String, Object> resourceMap = new HashMap<String, Object>();

		for (int i = 0; i < 10; i++) {
			String randomMarks = "";

			// Method -1: random distribution
			/* randomMarks = String.valueOf(Math.random() * i * 50); */

			// Method-2 bell like distribution
			/*
			 * if(i>5) { randomMarks = String.valueOf(10 -i * 30); } randomMarks =
			 * String.valueOf(i * 30);
			 */

			// Method -3 static distribuion
			randomMarks = marksList[i];
			String id = String.valueOf(i);

			resourceMap.put(id, StudentBuilder.buildsimpleStudent(id, randomMarks));
		}
		return resourceMap;
	}
}
