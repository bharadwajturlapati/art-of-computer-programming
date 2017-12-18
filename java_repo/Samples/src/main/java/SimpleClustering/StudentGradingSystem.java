package SimpleClustering;

public class StudentGradingSystem {
	
	public static Result booleanGrading(Student student) {
		try {
			Float studentMarks = Float.parseFloat(student.getStudentMarks());
			if (studentMarks > 100) {
				System.out.println("Wrong calculation");
				return buildResult(student, ClassificationStatus.ERROR, 0);
			}
			if (studentMarks >= 90) {
				System.out.println(student.getStudentId() + " grant has been accepted : " + studentMarks);
				return buildResult(student, ClassificationStatus.PASS, studentMarks / 90);
			} else {
				System.out.println(student.getStudentId() + "grant has not been accepted: " + studentMarks);
				return buildResult(student, ClassificationStatus.FAIL, studentMarks / 90);
			}
		} catch (NumberFormatException ex) {
			ex.printStackTrace();
		}

		return buildResult(student, ClassificationStatus.SYSTEMEXCEPTION, 0);
	}

	// change this to builder
	private static Result buildResult(Entity entity, ClassificationStatus status, float efficacyPoint) {
		Result result = new Result();
		result.setEfficacyPoint(efficacyPoint);
		result.setStatus(status);
		result.setEntity(entity);
		return result;
	}
}
