package utilities;

import org.junit.Test;

public class StringUtilsTest {

	@Test
	public void testUUIDgeneration() {
		System.out.println(StringUtils.convertToHexString("ab0ecf10-c0e5-3c77-809d".getBytes()));
	}
}
