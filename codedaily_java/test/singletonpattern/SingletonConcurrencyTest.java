package singletonpattern;

import static org.fest.assertions.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;

import com.mycila.junit.concurrent.Concurrency;
import com.mycila.junit.concurrent.ConcurrentJunitRunner;

@RunWith(ConcurrentJunitRunner.class)
@Concurrency(value = 6)
public class SingletonConcurrencyTest {
  @Test
  public void test0() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test1() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test2() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test3() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test4() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test5() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test6() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test7() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test8() throws Throwable {
    concurrencyTest();
  }

  @Test
  public void test9() throws Throwable {
    concurrencyTest();
  }

  // If this test case passes it means singletons are thread safe.
  void concurrencyTest() throws Throwable {
    Singleton singletonInstance = Singleton.getSingleTonInstance();
    System.out.println("Current thread context:" + Thread.currentThread().getName());
    assertThat(singletonInstance instanceof Singleton).isEqualTo(true);
  }
}
