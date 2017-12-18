package SimpleClustering;

public class Result {
	private ClassificationStatus status;
	private float efficacyPoint;
	private Entity entity;
	

	public ClassificationStatus getStatus() {
		return status;
	}

	public void setStatus(ClassificationStatus status) {
		this.status = status;
	}

	public float getEfficacyPoint() {
		return efficacyPoint;
	}

	public void setEfficacyPoint(float efficacyPoint) {
		this.efficacyPoint = efficacyPoint;
	}

	public Entity getEntity() {
		return entity;
	}

	public void setEntity(Entity entity) {
		this.entity = entity;
	}

}
