package pubsubmodelthreading;

import java.util.Date;

import javax.jms.Connection;
import javax.jms.DeliveryMode;
import javax.jms.Destination;
import javax.jms.MessageProducer;
import javax.jms.Session;
import javax.jms.TextMessage;

import org.apache.activemq.ActiveMQConnectionFactory;

public class TopicProducer implements Runnable {

  // Connection factory which will help connecting to active MQ server
  ActiveMQConnectionFactory connectionFactory = null;

  // constructor with apache connection factory
  public TopicProducer(ActiveMQConnectionFactory connectionFactory) {
    this.connectionFactory = connectionFactory;
  }

  public void run() {
    // TODO Auto-generated method stub
    try {
      // First create a connection
      Connection connection = connectionFactory.createConnection();
      connection.start();

      // Now create a Session for the connection
      Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);

      // Create a topic. If the topic exist, it will return that
      Destination destination = session.createTopic("CLIMATE");

      // Create a MessageProducer from the session to the topic or queue
      MessageProducer producer = session.createProducer(destination);
      // what are these modes ?
      producer.setDeliveryMode(DeliveryMode.PERSISTENT);

      // create a message for the current climate
      String text = "Today is HOT Date: " + new Date().toString();
      TextMessage message = session.createTextMessage(text);

      // Send the message to topic
      producer.send(message);

      // Clean up Activity
      session.close();
      connection.close();

    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}
