package singletonpattern;

public class Singleton {
  private static Singleton singletonInstance;

  // private constructor create a constructor and mark it as private.
  // This will ensure, no other instance is created in the program.
  // Maintaining singleton property.

  private Singleton() {

  }

  public static Singleton getSingleTonInstance() {
    if (singletonInstance == null) {
      synchronized (Singleton.class) {
        if (singletonInstance == null) {
          singletonInstance = new Singleton();
        }
      }
    }
    return singletonInstance;
  }

}
