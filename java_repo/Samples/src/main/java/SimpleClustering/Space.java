package SimpleClustering;

import java.util.HashMap;
import java.util.Map;

/*
 * This class encapsulates all the elements in the environemt
 * currently supports clusters and single entitits not part of cluster.
 */
public class Space {

	// Three mandatory clusters : Max efficacy cluster, Min efficacy cluster, error
	// cluster

	public static final Cluster maximumEfficacyCluster = new Cluster();
	public static final Cluster minEfficacyCluster = new Cluster();
	public static final Cluster errorCluster = new Cluster();
	private Map<String, Entity> systemException = new HashMap<String, Entity>();
	private SpaceStats spaceStats = null;
	
	public SpaceStats getSpaceStats() {
		return spaceStats;
	}
	
	public void refreshSpaceStats() {
		this.unLoadAll();
		setSpaceStats(this);
	}
	
	public void buildSpaceStats() {
		setSpaceStats(this);
	}
	
	private void setSpaceStats(Space space) {
		this.spaceStats = new SpaceStats(space);
	}
	
	//Needs to be enhanced for dynamic clusters if any
	private synchronized void unLoadAll() {
		maximumEfficacyCluster.removeAll();
		minEfficacyCluster.removeAll();
		errorCluster.removeAll();
		this.systemException.clear();
	}

	public void setToErrorCluster(Result result) {
		setToCluster(errorCluster, result.getEntity(), result.getEfficacyPoint());
	}

	public void setToMaximumEfficacyCluster(Result result) {
		setToCluster(maximumEfficacyCluster, result.getEntity(), result.getEfficacyPoint());
	}

	public void setToMinEfficacyCluster(Result result) {
		setToCluster(minEfficacyCluster, result.getEntity(), result.getEfficacyPoint());
	}

	public void setToCluster(Cluster maxorminorerrorCluster, Entity entity, float efficacyOfCluster) {
		maxorminorerrorCluster.setToCluster(entity.getResourceId(), entity);
		maxorminorerrorCluster.setEfficacyOfCluster(efficacyOfCluster);
	}

	public Cluster getMinEfficacyCluster() {
		return minEfficacyCluster;
	}
	
	public Cluster getMaxEfficacyCluster() {
		return maximumEfficacyCluster;
	}
	
	public Cluster getErrorCluster() {
		return errorCluster;
	}
	
	public void setToExceptionsMap(String id, Entity entityObject) {
		this.systemException.put(id, entityObject);
	}
	
	public Map<String, Entity> getExceptionMap() {
		return this.systemException;
	}
}
