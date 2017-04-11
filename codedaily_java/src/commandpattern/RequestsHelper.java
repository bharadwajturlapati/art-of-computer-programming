package commandpattern;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public final class RequestsHelper {
  public static List<Command> produceLists() {
    List<Command> queue = new ArrayList<Command>();
    queue.add(new DomesticEngineer());
    queue.add(new Politician());
    queue.add(new Programmer());
    return queue;
  }

  public static void workOffRequests(List<Command> queue) {
    for (Iterator<Command> it = queue.iterator(); it.hasNext();)
      ((Command)it.next()).execute();
  }
}
