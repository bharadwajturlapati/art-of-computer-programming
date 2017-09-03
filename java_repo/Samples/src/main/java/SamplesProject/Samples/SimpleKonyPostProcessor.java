package SamplesProject.Samples;

import com.konylabs.middleware.common.DataPostProcessor2;
import com.konylabs.middleware.controller.DataControllerRequest;
import com.konylabs.middleware.controller.DataControllerResponse;
import com.konylabs.middleware.dataobject.Param;
import com.konylabs.middleware.dataobject.Result;

public class SimpleKonyPostProcessor implements DataPostProcessor2 {

  public Object execute(Result result, DataControllerRequest arg1, DataControllerResponse arg2)
      throws Exception {
    result.addParam(generateSampleParam());
    return result;
  }

  private Param generateSampleParam() {
    Param param = new Param();
    param.setName("post_processor_param");
    param.setValue("test-value");
    return param;
  }

}
