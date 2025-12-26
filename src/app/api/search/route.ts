// src/app/search/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
        return NextResponse.redirect(new URL('/search', request.url))
    }

    // Redirect to search page with query parameter
    return NextResponse.redirect(new URL(`/search?q=${encodeURIComponent(query)}`, request.url))
}