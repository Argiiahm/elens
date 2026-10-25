import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET({}, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const response = await axios.get(
      `${process.env.UNSPLASH_BASE_URL}/photos/${id}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? (error.response?.data?.errors[0] ?? 'Unplash Error')
      : 'Failed to load photos';
    return NextResponse.json({ message }, { status: 500 });
  }
}
