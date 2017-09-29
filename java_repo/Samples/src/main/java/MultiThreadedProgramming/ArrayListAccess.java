package MultiThreadedProgramming;

public class ArrayListAccess {

  public static void main(String[] args) {
    int NUM = 500000;
    Thread[] multiThread = new Thread[NUM];
    for (int i = 0; i < NUM; i++) {
      multiThread[i] = new ArrayListMultiThreadAccess();
      multiThread[i].start();
    }
  }
}
