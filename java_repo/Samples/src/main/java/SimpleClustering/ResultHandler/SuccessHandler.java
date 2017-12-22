package SimpleClustering.ResultHandler;

import SimpleClustering.Result;
import SimpleClustering.Space;

public class SuccessHandler extends GenericHandler {

	@Override
	public void resolve(Space studentSpace, Result result) {
		studentSpace.setToMaximumEfficacyCluster(result);

	}

}
