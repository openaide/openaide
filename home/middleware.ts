import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  if (host !== 'home.openaide.localhost') {
    url.hostname = 'home.openaide.localhost';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
