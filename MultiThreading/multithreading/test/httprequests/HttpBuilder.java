package httprequests;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;

public class HttpBuilder {

	private static HttpBuilder builder;
	private String response;

	private HttpBuilder() {

	}

	public static HttpBuilder buildHttpAndFetchResponse(String httpRequset) {
		if (builder == null) {
			synchronized (HttpBuilder.class) {
				if (builder == null) {
					builder = new HttpBuilder();
					builder.setResponse(httpRequset);
				}
			}
		}
		return builder;
	}

	private String getResponse(String httpRequset) throws UnsupportedOperationException, IOException {
		HttpClient client = HttpClientBuilder.create().build();
		HttpGet request = new HttpGet(httpRequset);
		HttpResponse response = client.execute(request);
		BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
		StringBuffer result = new StringBuffer();
		String line = "";
		while ((line = rd.readLine()) != null) {
			result.append(line);
		}
		return result.toString();
	}

	private void setResponse(String httpRequset) {
		try {
			this.response = this.getResponse(httpRequset);
		} catch (UnsupportedOperationException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
