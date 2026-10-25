import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') ?? 'nature';
  const page = request.nextUrl.searchParams.get('page') ?? '1';

  try {
    const response = await axios.get(
      `${process.env.UNSPLASH_BASE_URL}/search/photos`,
      {
        params: { query, page, per_page: 15 },
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data.results);
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? (error.response?.data?.errors?.[0] ?? 'Unsplash API Error')
      : 'Failed to load photos';

    return NextResponse.json({ message }, { status: 500 });
  }
}
