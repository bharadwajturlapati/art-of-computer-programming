package org.codedaily.recursion;

public class Factorial {
  public static void main(String args[]) {
    int n = 4;
    int result = fact(n);
    System.out.println(result);
  }

  private static int fact(int n) {
    return n == 0 ? 1 : (n * fact(n - 1));
  }

}
