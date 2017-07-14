package regexp;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ZeroOrMoreMatch {
	public static void main(String[] args) {
		String pattern = "com.ibm.mq.*jar";
		System.out.println(Pattern.matches(pattern,"com.ibm.mq.jar"));
		System.out.println(Pattern.matches(pattern,"com.ibm.mq-1.0.0.jar"));
		System.out.println("END");
	}
}
