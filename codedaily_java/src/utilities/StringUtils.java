package utilities;

import java.util.UUID;

public final class StringUtils {
	private static final int startIndex = 0xff;
	private static final int endIndex = 0x100;
	private static final int count = 16;

	public static String convertToHexString(byte[] messageAsByteArray) {
		String result = "";
		for (int i = 0; i < messageAsByteArray.length; i++) {
			result += Integer.toString((messageAsByteArray[i] & startIndex) + endIndex, count).substring(1);
		}
		return result;
	}

	private static String generateRandomUUID() {
		return UUID.randomUUID().toString();
	}

	public static void main(String[] args) {
		String randomID = generateRandomUUID();
		System.out.println("Random ID : " +randomID);
		System.out.println(convertToHexString(randomID.getBytes()));
	}
}
