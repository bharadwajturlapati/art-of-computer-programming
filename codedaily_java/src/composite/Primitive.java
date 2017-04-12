package composite;

public class Primitive implements Component {

  private int value;

  public Primitive(int val) {
    value = val;
  }

  @Override
  public void traverse() {
    System.out.print(value + "  ");
  }

}
