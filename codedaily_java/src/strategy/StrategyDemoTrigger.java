package strategy;

public class StrategyDemoTrigger {
  
    public static void clientCode( Strategy strat ) {
      strat.solve();
    }
    public static void main( String[] args ) {
       Strategy[] algorithms = { new Impl1(), new Impl2() };
       for (int i=0; i < algorithms.length; i++) {
          clientCode( algorithms[i] );
       }
    }
 
}
