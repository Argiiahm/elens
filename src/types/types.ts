export interface Photos {
  id: string;
  slug: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

export interface ApiMessageResponse {
  message: string;
}
