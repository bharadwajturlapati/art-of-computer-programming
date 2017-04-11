package ChainOfResponsibility;

public class StaticService extends Handler {
  @Override
  public boolean canRecognize(String input) {
    return input.contains("staticService");
  }
}
