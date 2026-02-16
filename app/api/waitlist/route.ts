import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Invalid email address' },
                { status: 400 }
            )
        }

        const filePath = path.join(process.cwd(), 'waitlist.csv')
        const csvLine = `${new Date().toISOString()},"${email}"\n`

        fs.appendFileSync(filePath, csvLine)

        return NextResponse.json({ message: 'Success' }, { status: 200 })
    } catch (error) {
        console.error('Waitlist error:', error)
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
