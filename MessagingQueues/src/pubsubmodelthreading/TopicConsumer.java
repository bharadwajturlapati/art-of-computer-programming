package pubsubmodelthreading;

import javax.jms.Connection;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.Session;
import javax.jms.TextMessage;

import org.apache.activemq.ActiveMQConnectionFactory;

public class TopicConsumer implements Runnable {

  ActiveMQConnectionFactory connectionFactory = null;
  
  // Create a Topic Consumer constructor method
  public TopicConsumer(ActiveMQConnectionFactory connectionFactory){
    this.connectionFactory = connectionFactory;
  }
  
  
  public void run() {
    // TODO Auto-generated method stub
    Connection connection;
    try {
      // Create a connection
      connection = connectionFactory.createConnection();
      connection.start();
      
      // Now create a session
      Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
      
      // Create a topic. If topic exists it will return That
      Destination topicDestination = session.createTopic("CLIMATE");
      
      // Create a message producer from the session to the topic or queue
      MessageConsumer messageConsumer = session.createConsumer(topicDestination);
      
      // Get the message
      Message message = messageConsumer.receive();
      TextMessage textMessage = (TextMessage)message;
      
      System.out.println(textMessage.getText());
      session.close();
      connection.close();
      
    } catch (JMSException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  
  }

}
