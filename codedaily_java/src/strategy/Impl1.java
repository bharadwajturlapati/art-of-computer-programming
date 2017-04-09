package strategy;

public class Impl1 extends TemplateMethod1 {
  private int state = 1;

  protected void start() {
    System.out.println("Start ");
  }

  protected void stop() {
    System.out.println("Stop ");
  }

  protected boolean nextTry() {
    System.out.println(" nextTry-" + state++ + " ");
    return true;
  }

  protected boolean isSolution() {
    System.out.println("isSolution- "+ (state==3) + " " );
    return (state == 3);
  }

}
