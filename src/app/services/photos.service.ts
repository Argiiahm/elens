import axios from 'axios';
import { ApiMessageResponse, Photos } from '@/types/types';

export const getPhotos = async ({
  query,
  page,
}: {
  query?: string;
  page?: number;
}): Promise<Photos[]> => {
  try {
    const response = await axios.get<Photos[]>('/api/photos', {
      params: { query, page },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ApiMessageResponse>(error)) {
      throw new Error(error.response?.data?.message ?? 'Unsplash API Error');
    }

    throw new Error('Failed to fetch photos');
  }
};
