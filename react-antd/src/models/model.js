// class to represent a model,
// this is then inherited by face recognition model, object detection model, emotion detection
// This is to have a coherent structure for the model
class Model {
  constructor(name, model_id, client_id, created_time, updated_time) {
    this.name = name;
    this.modelId = model_id;
    this.clientId = client_id;
    this.createdTime = created_time;
    this.updatedTime = updated_time;
  }

  getName = () => this.name;
  getModelId = () => this.modelId;
}

export class FaceRecognitionModel extends Model {
  constructor(
    name,
    model_id,
    client_id,
    dataset_stats,
    created_time,
    updated_time
  ) {
    super(name, model_id, client_id, created_time, updated_time);
    this.stats = {};
    this.stats.dataset_size = dataset_stats.dataset_size;
    this.stats.train_count = dataset_stats.train_count;
    this.stats.test_count = dataset_stats.test_score;
    this.stats.train_score = dataset_stats.train_count;
    this.stats.test_score = dataset_stats.test_score;
  }

  getStats = () => this.stats;
}

export class ObjectDetectionModel extends Model {
  constructor(
    name,
    model_id,
    client_id,
    created_time,
    updated_time,
    dataset_stats
  ) {
    super(name, model_id, client_id, created_time, updated_time);
    this.stats = {};
    this.stats.accuracy = dataset_stats.accuracy;
  }

  getStats = () => this.stats;
}
