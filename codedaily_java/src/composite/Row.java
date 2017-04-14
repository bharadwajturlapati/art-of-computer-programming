package composite;

public class Row extends Composite {
	public Row(int val) {
		super(val);
	}
	public void traverse(){
		System.out.println("Row");
		super.traverse();
	}
}
