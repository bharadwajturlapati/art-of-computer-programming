package builderpattern;

public class UsePersonBuilder {
	public static void main(String args[]){
		Person person = new PersonBuilder(12, "abc@gmail.com", "abcd").buildPerson();
		System.out.println(person.getAge());
		System.out.println(person.getEmail());
		System.out.println(person.getPassword());
	}
}
