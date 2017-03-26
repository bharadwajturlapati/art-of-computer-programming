package Threading;

public class RunnableDemo implements Runnable {

  private Thread t;
  private String threadName;

  RunnableDemo(String name) {
    threadName = name;
    System.out.println("In Constructor, thread created name " + threadName);
  }

  @Override
  public void run() {
    // TODO Auto-generated method stub
    System.out.println("Running thread " + threadName);
    try {
      for (int i = 0; i < 4; i++) {
        System.out.println("Thread: " + threadName + ", " + i);
        // Let Thread sleep for a while
        System.out.println(threadName+" " + i + " slept");
        Thread.sleep(50);
        System.out.println(threadName+" " + i + " wokeup");
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    System.out.println("Threading completed");
  }

  public void startThread() {
    System.out.println("Starting " + threadName);
    if (t == null) {
      t = new Thread(this, threadName);
      t.start();
    }
  }
}
