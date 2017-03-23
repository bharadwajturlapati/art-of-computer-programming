package builderpattern;


public class PersonBuilder{
	public PersonBuilder(int age, String email, String password) {
		this.age = age;
		this.email = email;
		this.password = password;
	}
	//Required
	private int age;
	private String phonenumber;
	private String address;
	private Double salary;
	//Required
	private String email;
	//Required password
	private String password;
	public int getAge() {
		return age;
	}
	public PersonBuilder setAge(int age) {
		this.age = age;
		return this;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public PersonBuilder setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
		return this;
	}
	public String getAddress() {
		return address;
	}
	public PersonBuilder setAddress(String Address) {
		this.address = Address;
		return this;
	}
	public Double getSalary() {
		return salary;
	}
	public PersonBuilder setSalary(Double salary) {
		this.salary = salary;
		return this;
	}
	public String getEmail() {
		return email;
	}
	public PersonBuilder setEmail(String email) {
		this.email = email;
		return this;
	}
	public String getPassword() {
		return password;
	}
	public PersonBuilder setPassword(String password) {
		this.password = password;
		return this;
	}
	public Person buildPerson(){
		Person person = new Person();
		person.setAddress(address);
		person.setAge(age);
		person.setEmail(email);
		person.setPassword(password);
		person.setPhonenumber(phonenumber);
		person.setSalary(salary);
		return person;
		
	}
}
