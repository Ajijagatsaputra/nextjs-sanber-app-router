import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  console.log('req => ', searchParams.get('nama'))
  return NextResponse.json({ message: 'Hello World' }, { status: 200 })
}

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json({ payload: body }, { status: 200 })
}

// export async function PUT(req: Request) {
//   return NextResponse.json({ message: 'PUT method' });
// }

// export async function DELETE(req: Request) {
//   return NextResponse.json({ message: 'DELETE method' });
// }
