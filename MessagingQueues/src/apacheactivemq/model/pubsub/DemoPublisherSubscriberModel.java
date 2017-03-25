package apacheactivemq.model.pubsub;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Properties;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.jms.Topic;
import javax.jms.TopicConnection;
import javax.jms.TopicConnectionFactory;
import javax.jms.TopicPublisher;
import javax.jms.TopicSession;
import javax.jms.TopicSubscriber;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.apache.log4j.BasicConfigurator;

import com.sun.istack.logging.Logger;

public class DemoPublisherSubscriberModel implements javax.jms.MessageListener {
  private static final Logger LOGGER = Logger.getLogger(DemoPublisherSubscriberModel.class);
  private TopicSession pubSession;
  private TopicPublisher publisher;
  private TopicConnection connection;

  // constructor
  public DemoPublisherSubscriberModel(String topicName, String username, String password, Properties props)
      throws NamingException, JMSException {
    // obtain a JNDI connection
    InitialContext jndi = new InitialContext(props);
    // create a JMS connection factory
    TopicConnectionFactory conFactory = (TopicConnectionFactory)jndi
        .lookup("topicConnectionFactory");
    // create a JMS connection
    connection = conFactory.createTopicConnection(username, password);

    // create JMS session objects for publisher and subscriber
    pubSession = connection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);
    TopicSession subSession = connection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);

    // Look up a JMS topic
    Topic chatTopic = (Topic)jndi.lookup(topicName);

    // Create a JMS publisher and subsriber
    publisher = pubSession.createPublisher(chatTopic);
    TopicSubscriber subscriber = subSession.createSubscriber(chatTopic);

    // Set a JMS message listener
    subscriber.setMessageListener(this);

    // Start the JMS connection
    connection.start();

    // Create and send message using topic publisher
    TextMessage message = pubSession.createTextMessage();
    message.setText(username + ": Hello guys");
    publisher.publish(message);
  }

  // implement class of javax java message listener
  public void onMessage(Message message) {
    // TODO Auto-generated method stub
    try {
      TextMessage textMessage = (TextMessage)message;
      String text = textMessage.getText();
      System.out.println(text);
    } catch (JMSException jmse) {
      LOGGER.fine("Fatal Error occurred", jmse);
    }
  }

  public static void main(String[] args) {
    BasicConfigurator.configure();
    try {
      PropertyBuilder propertiesBean = new PropertyBuilder();
      propertiesBean.setContextQueue("example.MyQueue");
      propertiesBean.setInitialContextFactory("org.apache.activemq.jndi.ActiveMQInitialContextFactory");
      propertiesBean.setProviderUrl("vm://localhost");
      propertiesBean.setTopicName("example.topicConnectionFactory");
      Properties props = propertiesBean.buildProperties();
      DemoPublisherSubscriberModel demo = new DemoPublisherSubscriberModel(
          "sample topic", "root", "password",props);
      demo.connection.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}
