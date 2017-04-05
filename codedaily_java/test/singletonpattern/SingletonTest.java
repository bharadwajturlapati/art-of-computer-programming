package singletonpattern;

import org.junit.Test;
import static org.fest.assertions.api.Assertions.assertThat;

public class SingletonTest {

  @Test
  public void testSingleTon() {
    Singleton singletonInstance = Singleton.getSingleTonInstance();
    assertThat(singletonInstance instanceof Singleton).isEqualTo(true);
  }
}
