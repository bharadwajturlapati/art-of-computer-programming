package pubsubmodelthreading;

import org.apache.activemq.ActiveMQConnectionFactory;

public class Trigger {
  public static void main(String[] args) {
    String activeMQListenerURL = "tcp://localhost:61616";
    // Create the connection Factory
    ActiveMQConnectionFactory connectionFactory = new ActiveMQConnectionFactory(
        activeMQListenerURL);

    // Create the consumer. it will listen to the Thread to which the producer
    // is dumping the message to.
    Thread topicConsumerthread = new Thread(new TopicConsumer(connectionFactory));
    topicConsumerthread.start();
    try {
      Thread.sleep(1000);
      System.out.println("End of Program");
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
