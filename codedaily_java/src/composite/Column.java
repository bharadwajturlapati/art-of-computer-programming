package composite;

public class Column extends Composite {

	public Column(int val) {
		super(val);
	}
	public void traverse(){
		System.out.println("Col");
		super.traverse();
	}
	
}
