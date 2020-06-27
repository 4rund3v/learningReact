export class Client {
  constructor(name, client_id, status, enabled_features, client_details) {
    this.name = name;
    this.clientId = client_id;
    this.status = status;
    this.enabledFeatures = enabled_features;
    this.clientDetails = client_details;
  }
  getClientName = () => this.clientId;
  getClientId = () => this.clientId;
  getEnabledFeatures = () => this.enabledFeatures;
  getClientDetails = () => this.clientDetails;
  getClientStatus = () => this.status;
}
