package utilities;

import org.junit.Test;

public class StringUtilsTest {

	@Test
	public void testUUIDgeneration() {
		System.out.println(StringUtils.convertToHexString("9fee1d01-bdb9-30f3-8e5a".getBytes()));
	}
}
