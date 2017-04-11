package ChainOfResponsibility;

public class DynamicService extends Handler{

  @Override
  public boolean canRecognize(String input) {
    return input.contains("dynamicService");
  }
}
