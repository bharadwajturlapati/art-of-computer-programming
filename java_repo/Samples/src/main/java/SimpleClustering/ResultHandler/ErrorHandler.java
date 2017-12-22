package SimpleClustering.ResultHandler;

import SimpleClustering.Result;
import SimpleClustering.Space;

public class ErrorHandler extends GenericHandler {

	@Override
	public void resolve(Space studentSpace, Result result) {
		studentSpace.setToErrorCluster(result);
	}

}
