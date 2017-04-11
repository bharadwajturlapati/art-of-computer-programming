package ChainOfResponsibility;

public class DynamicEntity extends Handler {
  @Override
  public boolean canRecognize(String input) {
    return input.contains("dynamicEntity");
  }
}
