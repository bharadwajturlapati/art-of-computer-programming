package ChainOfResponsibility;

public abstract class Handler {
  public abstract boolean canRecognize(String input);
}
