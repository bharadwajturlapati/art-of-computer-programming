package MultiThreadedProgramming;

import java.util.ArrayList;
import java.util.List;

public class ArrayListMultiThreadAccess extends Thread implements Runnable {

  private List<String> namesOfArrayList = new ArrayList<String>();

  @Override
  public void run() {
    for (int i = 0; i < 100; i++) {
      namesOfArrayList.add("1234");
      System.out.println(namesOfArrayList.size());
      namesOfArrayList.remove(0);
      System.out.println(namesOfArrayList.size());
    }
  }
}
