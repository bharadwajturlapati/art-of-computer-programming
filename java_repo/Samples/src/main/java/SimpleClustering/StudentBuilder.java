package SimpleClustering;

public class StudentBuilder {

	private String id;
	private String marks;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMarks() {
		return marks;
	}

	public void setMarks(String marks) {
		this.marks = marks;
	}

	
	public static Student buildsimpleStudent(String id, String marks) {
		Student s = new Student(id, marks);
		s.setResourceId(id);
		return s;
	}

}
