package messagingqueues;
import javax.jms.Connection;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.MessageProducer;
import javax.jms.Queue;
import javax.jms.Session;
import javax.jms.TextMessage;

import com.ibm.msg.client.jms.JmsConnectionFactory;
import com.ibm.msg.client.jms.JmsFactoryFactory;
import com.ibm.msg.client.wmq.WMQConstants;
public class SimpleJMSClient {
	private static final String DEFAULT_IBM_MQ_CHANNEL_NAME = "SYSTEM.DEF.SVRCONN";
	private static final int RECEIVE_WAIT_PERIOD = 1;

	// Queue manager details
	private String host;
	private String queueManagerName;
	private int port;
	private String channel;
	private String queueName;

	private Connection connection = null;
	private Session session = null;
	private Queue destination = null;

	MessageProducer producer = null;
	MessageConsumer consumer = null;

	public SimpleJMSClient(String host, String queueManagerName, int port, String channel, String queueName) {
		super();
		this.host = host;
		this.queueManagerName = queueManagerName;
		this.port = port;
		this.channel = DEFAULT_IBM_MQ_CHANNEL_NAME;
		this.queueName = queueName;
	}

	public void connect(String userName, String password) throws JMSException {

		JmsFactoryFactory factoryFactory = JmsFactoryFactory.getInstance(WMQConstants.WMQ_PROVIDER);
		JmsConnectionFactory connectionFactory = factoryFactory.createConnectionFactory();
		// Set the properties
		connectionFactory.setStringProperty(WMQConstants.WMQ_HOST_NAME, host);
		connectionFactory.setIntProperty(WMQConstants.WMQ_PORT, port);
		connectionFactory.setStringProperty(WMQConstants.WMQ_CHANNEL, channel);
		connectionFactory.setIntProperty(WMQConstants.WMQ_CONNECTION_MODE, WMQConstants.WMQ_CM_CLIENT);
		connectionFactory.setStringProperty(WMQConstants.WMQ_QUEUE_MANAGER, queueManagerName);

		// Create JMS objects
		connection = connectionFactory.createConnection(userName, password);
		session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
		destination = session.createQueue(queueName);

		// create producer and consumers
		producer = session.createProducer(destination);
		consumer = session.createConsumer(destination);

		// start receiving incomming messages in the connection
		connection.start();
	}
	
	public void connect() throws JMSException {

		JmsFactoryFactory factoryFactory = JmsFactoryFactory.getInstance(WMQConstants.WMQ_PROVIDER);
		JmsConnectionFactory connectionFactory = factoryFactory.createConnectionFactory();
		// Set the properties
		connectionFactory.setStringProperty(WMQConstants.WMQ_HOST_NAME, host);
		connectionFactory.setIntProperty(WMQConstants.WMQ_PORT, port);
		connectionFactory.setStringProperty(WMQConstants.WMQ_CHANNEL, channel);
		connectionFactory.setIntProperty(WMQConstants.WMQ_CONNECTION_MODE, WMQConstants.WMQ_CM_CLIENT);
		connectionFactory.setStringProperty(WMQConstants.WMQ_QUEUE_MANAGER, queueManagerName);

		// Create JMS objects
		connection = connectionFactory.createConnection();
		session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
		destination = session.createQueue(queueName);

		// create producer and consumers
		producer = session.createProducer(destination);
		consumer = session.createConsumer(destination);

		// start receiving incomming messages in the connection
		connection.start();
	}

	public void close() {

		// stop receiving incomming messages in the connection
		try {
			connection.stop();
		} catch (JMSException e1) {

			e1.printStackTrace();
		}

		try {
			if (session != null) {
				session.close();
			}
		} catch (JMSException e) {

			e.printStackTrace();
		}
		try {
			if (connection != null) {
				connection.close();
			}
		} catch (JMSException e) {

			e.printStackTrace();
		}
	}

	public String receiveTextMessage() throws JMSException {
		String text = null;

		Message message = consumer.receive(RECEIVE_WAIT_PERIOD);
		if (message != null && message instanceof TextMessage) {
			TextMessage tm = (TextMessage) message;
			text = tm.getText();
			// System.out.println("Message: " + text);
		} else {
			// System.out.println("Unknown message: " + message);
		}
		return text;
	}

	public void sendTextMessage(String text) throws JMSException {
		Message message = session.createTextMessage(text);
		producer.send(message);

		// message.getJMSMessageID();
		System.out.println("Sent message <" + text + ">");
	}


	public static void main(String[] args) {

		// Queue manager details
		String host = "127.0.0.1";
		String queueManagerName = "climatequeue";
		int port = 1414;
		String channel = "SYSTEM.DEF.SVRCONN";
		String queueName = "newclimatequeue";

		String userName = "kh2034";
		String password = "kony@1234";

		SimpleJMSClient client = new SimpleJMSClient(host, queueManagerName, port, channel, queueName);
		try {
			//client.connect(userName, password);
			client.connect();

			for (int i = 0; i <= 5; i++) {
				client.sendTextMessage("Hello World!" + i);
				String message = client.receiveTextMessage();
				System.out.println("Received message: " + message);
			}
			client.close();

		} catch (JMSException e) {
			e.printStackTrace();
		}

	}
}
