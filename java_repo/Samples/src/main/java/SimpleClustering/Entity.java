package SimpleClustering;

public abstract class Entity{

	private String resourceId;

	public String getResourceId() {
		return resourceId;
	}

	public void setResourceId(String resourceId) {
		this.resourceId = resourceId;
	}
	
	public abstract void useVeto();
	public abstract void useFuzzy();
	
}
