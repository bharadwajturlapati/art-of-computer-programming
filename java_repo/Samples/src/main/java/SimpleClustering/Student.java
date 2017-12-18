package SimpleClustering;

// User will write this class extending the entity object
public class Student extends Entity{
	private String studentId;
	private String studentMarks;

	public Student(String id, String marks) {
		this.studentId = id;
		this.studentMarks = marks;
	}

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public String getStudentMarks() {
		return studentMarks;
	}

	public void setStudentMarks(String studentMarks) {
		this.studentMarks = studentMarks;
	}

	// TODO: return the byte array stream of rules to execute in the veto function
	@Override
	public void useVeto() {
		
	}

	// TODO return the byte array stream of the algorithm
	@Override
	public void useFuzzy() {
		
	}
}
