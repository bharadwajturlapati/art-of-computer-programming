package SimpleClustering.ResultHandler;

import SimpleClustering.ClassificationStatus;

public class ResultHandler {

	public static GenericHandler getHandler(ClassificationStatus classificationStatus) {
		if (classificationStatus == ClassificationStatus.ERROR) {
			return new ErrorHandler();
		}
		if (classificationStatus == ClassificationStatus.SYSTEMEXCEPTION) {
			return new SystemExceptionHandler();
		}
		if (classificationStatus == ClassificationStatus.FAIL) {
			return new FailHandler();
		}
		if (classificationStatus == ClassificationStatus.PASS) {
			return new SuccessHandler();
		}

		return null;
	}
}
