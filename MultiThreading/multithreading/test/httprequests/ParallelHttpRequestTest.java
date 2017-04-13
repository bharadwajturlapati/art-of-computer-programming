package httprequests;

import org.apache.http.client.HttpClient;
import org.testng.annotations.Test;

public class ParallelHttpRequestTest {
	private static final String getRequest = "";
	private static final HttpBuilder httpBuilder =  HttpBuilder.buildHttpAndFetchResponse(getRequest);
	
	
	@Test(threadPoolSize = 4, invocationCount = 10,  timeOut = 10000)
	public void testHttpGet() {
		
	}
}
