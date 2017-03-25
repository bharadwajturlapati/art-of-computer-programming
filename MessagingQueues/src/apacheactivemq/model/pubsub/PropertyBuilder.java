package apacheactivemq.model.pubsub;

import java.util.Properties;

import javax.naming.Context;

public class PropertyBuilder {
  private String initialContextFactory;
  private String providerUrl;
  private String contextQueue;
  private String topicName;

  public String getInitialContextFactory() {
    return initialContextFactory;
  }

  public void setInitialContextFactory(String initialContextFactory) {
    this.initialContextFactory = initialContextFactory;
  }

  public String getProviderUrl() {
    return providerUrl;
  }

  public void setProviderUrl(String providerUrl) {
    this.providerUrl = providerUrl;
  }

  public String getContextQueue() {
    return contextQueue;
  }

  public void setContextQueue(String contextQueue) {
    this.contextQueue = contextQueue;
  }

  public String getTopicName() {
    return topicName;
  }

  public void setTopicName(String topicName) {
    this.topicName = topicName;
  }

  public Properties buildProperties() {
    Properties properties = new Properties();
    properties.setProperty(Context.INITIAL_CONTEXT_FACTORY, getInitialContextFactory());
    properties.setProperty(Context.PROVIDER_URL, getProviderUrl());
    properties.setProperty("queue.MyQueue", getContextQueue());
    properties.setProperty("topic.MyTopic", getTopicName());
    return properties;
  }
}
