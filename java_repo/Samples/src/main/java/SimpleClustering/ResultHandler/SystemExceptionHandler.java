package SimpleClustering.ResultHandler;

import SimpleClustering.Result;
import SimpleClustering.Space;

public class SystemExceptionHandler extends GenericHandler {

	@Override
	public void resolve(Space studentSpace, Result result) {
		studentSpace.setToExceptionsMap(result.getEntity().getResourceId(), result.getEntity());
	}

}
