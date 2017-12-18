package SimpleClustering;

import java.util.Map;

public class SpaceStats {

	private Space space = null;
	private Cluster errorCluster = null;
	private Cluster minEfficacyCluster = null;
	private Cluster maxEfficacyCluster = null;
	private Map<String, Entity> exceptionMap;

	public SpaceStats() {
		throw new UnsupportedOperationException("Calling space stats without passing in space is not allowed");
	}

	public SpaceStats(Space space) {
		this.space = space;
		this.minEfficacyCluster = this.space.getMinEfficacyCluster();
		this.maxEfficacyCluster = this.space.getMaxEfficacyCluster();
		this.errorCluster = this.space.getErrorCluster();
		this.exceptionMap = this.space.getExceptionMap();
	}

	public int getSizeOfAllElements() {
		return errorCluster.getSize() + minEfficacyCluster.getSize()
				+ maxEfficacyCluster.getSize()+exceptionMap.size();
	}

	public int getErrorClusterSize() {
		return errorCluster.getSize();
	}

	public int getMinEfficacyClusterSize() {
		return minEfficacyCluster.getSize();
	}

	public int getMaxEfficacyClusterSize() {
		return maxEfficacyCluster.getSize();
	}

	public int getMinClusterSize() {
		return calculateMinOfClusters(maxEfficacyCluster, minEfficacyCluster, errorCluster).getSize();
	}

	public int getMaxClusterSize() {
		return calculateMaxOfClusters(maxEfficacyCluster, minEfficacyCluster, errorCluster).getSize();
	}

	private Cluster calculateMinOfClusters(Cluster... clusters) {
		Cluster minCluster = clusters[0];
		int minSize = minCluster.getSize();

		for (Cluster cluster : clusters) {
			int clusterSize = cluster.getSize();
			if (minSize > cluster.getSize()) {
				minSize = clusterSize;
				minCluster = cluster;
			}
		}
		return minCluster;
	}

	private Cluster calculateMaxOfClusters(Cluster... clusters) {
		Cluster maxCluster = clusters[0];
		int maxSize = maxCluster.getSize();

		for (Cluster cluster : clusters) {
			int clusterSize = cluster.getSize();
			if (maxSize < cluster.getSize()) {
				maxSize = clusterSize;
				maxCluster = cluster;
			}
		}

		return maxCluster;
	}
}
