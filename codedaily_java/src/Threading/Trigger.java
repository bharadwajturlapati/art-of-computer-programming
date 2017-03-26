package Threading;

public class Trigger {

  public static void main(String[] args) {
    RunnableDemo r1 = new RunnableDemo("Thread -1");
    r1.startThread();

    RunnableDemo r2 = new RunnableDemo("Thread -2");
    r2.startThread();
  }
}
