package SimpleClustering.ResultHandler;

import SimpleClustering.Result;
import SimpleClustering.Space;

public class FailHandler extends GenericHandler {

	@Override
	public void resolve(Space studentSpace, Result result) {
		studentSpace.setToMinEfficacyCluster(result);
	}

}
