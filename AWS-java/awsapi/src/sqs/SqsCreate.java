package sqs;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.AmazonSQSClientBuilder;
import com.amazonaws.services.sqs.model.AmazonSQSException;
import com.amazonaws.services.sqs.model.CreateQueueRequest;

public class SqsCreate {
  private static final String QUEUE_NAME = "climate_queue";

  public SqsCreate() {

  }

  public void Create() {
    AmazonSQS sqs = AmazonSQSClientBuilder.standard()
         .withRegion(Regions.US_WEST_1).build();
    CreateQueueRequest create_request = new CreateQueueRequest(QUEUE_NAME)
        .addAttributesEntry("DelaySeconds", "60")
        .addAttributesEntry("MessageRetentionPeriod", "86400");
    
    try {
      sqs.createQueue(create_request);
      System.out.println("Queue has been created in the region");
    } catch (AmazonSQSException amazonSQSException) {
      if (!amazonSQSException.getErrorCode().equals("QueueAlreadyExists")) {
        throw amazonSQSException;
      } else {
        amazonSQSException.printStackTrace();
      }
    }
  }
}
