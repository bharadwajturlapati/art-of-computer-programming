package commandpattern;

import java.util.List;

public class CommandPatternTrigger {
  public static void main(String[] args) {
    List<Command> queue = RequestsHelper.produceLists();
    RequestsHelper.workOffRequests(queue);
  }
}
