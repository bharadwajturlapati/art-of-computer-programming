package ChainOfResponsibility;

public class StaticEntity extends Handler {

  @Override
  public boolean canRecognize(String input) {
    return input.contains("staticEntity");
  }

}
