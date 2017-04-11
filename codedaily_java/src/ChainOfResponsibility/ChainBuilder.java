package ChainOfResponsibility;

import java.util.ArrayList;
import java.util.List;

public class ChainBuilder {
  private List<Handler> listofhandlers;

  public List<Handler> getListofhandlers() {
    return listofhandlers;
  }

  public void setListofhandlers(List<Handler> listofhandlers) {
    this.listofhandlers = listofhandlers;
  }

  public ChainBuilder() {
    buildListOfHandler();
  }

  private void buildListOfHandler() {
    List<Handler> listofHandlers = new ArrayList<Handler>();
    listofHandlers.add(new DynamicEntity());
    listofHandlers.add(new StaticEntity());
    listofHandlers.add(new StaticService());
    listofHandlers.add(new DynamicService());
    setListofhandlers(listofHandlers);
  }
}
