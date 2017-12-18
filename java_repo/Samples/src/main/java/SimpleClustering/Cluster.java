package SimpleClustering;

import java.util.HashMap;
import java.util.Map;

public class Cluster {

	private float efficacyOfCluster = 0.0f;
	// Here String is a resource ID
	private Map<String, Entity> entityMap = new HashMap<String, Entity>();

	public int getSize() {
		return entityMap.size();
	}

	public void setToCluster(String entityId, Entity entity) {
		entityMap.put(entityId, entity);
	}

	public Entity getFromCluster(String id) {
		return entityMap.get(id);
	}

	public synchronized void removeFromCluster(String id) {
		entityMap.remove(id);
	}

	public float getEfficacyOfCluster() {
		return efficacyOfCluster;
	}

	public void setEfficacyOfCluster(float efficacyOfCluster) {
		this.efficacyOfCluster = efficacyOfCluster;
	}
	
	public boolean isClusterEmpty() {
		return this.entityMap.size() == 0;
	}

	public synchronized void removeAll() {
		this.entityMap.clear();
	}
}
