export interface DrawingSummary {
  id: string;
  name: string;
  createdAt: string;
}

export interface Drawing extends DrawingSummary {
  /** PNG codificado como data URL */
  dataUrl: string;
}
