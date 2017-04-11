package ChainOfResponsibility;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class TriggerChainOfResponsibility {
  public static void main(String[] args) {
    Set<String> requestSet = new HashSet<String>();
    final String one = "i can handle staticService";
    requestSet.add(one);
    final String two = "i can handle dynamicService";
    requestSet.add(two);
    final String three = "i can handle staticEntity";
    requestSet.add(three);
    final String four = "i can handle dynamicEntity";
    requestSet.add(four);
    List<Handler> canRecognize = new ChainBuilder().getListofhandlers();
    for (String request : requestSet) {
      for (Handler handler : canRecognize) {
        if (handler.canRecognize(request)) {
          callTemplateMethod(handler);
        } else {
          silentlyIgnoreAndPasstotheNextElementInChain();
        }
      }
    }
  }

  private static void silentlyIgnoreAndPasstotheNextElementInChain() {
    System.out.println("passing to the next elements in chain to recognize");

  }

  private static void callTemplateMethod(Handler handler) {
    System.out.println(handler.getClass().getName() + "will start implementing sequence of steps");
  }
}
