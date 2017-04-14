package composite;

import java.util.ArrayList;
import java.util.List;

public class Composite implements Component {

	private List<Component> children = new ArrayList<Component>();
	private int total = 0;
	private int value;

	public Composite(int val) {
		value = val;
	}

	public void add(Component c) {
		children.add(c);
		total++;
	}

	@Override
	public void traverse() {
		System.out.print(value + "  ");
		for (int i = 0; i < total; i++) {
			children.get(i).traverse();
		}
	}

}
