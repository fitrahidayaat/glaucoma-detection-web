import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, AlertTriangle, Microscope } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 mt-20">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Glaucoma Risk Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Early detection is key. Use our AI-powered tool to assess your risk of glaucoma from an eye image.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Eye className="w-12 h-12 text-gray-900 dark:text-gray-100 mb-4" />
              <CardTitle>Easy to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Simply upload an image of your eye, and our AI will analyze it for signs of glaucoma.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <AlertTriangle className="w-12 h-12 text-gray-900 dark:text-gray-100 mb-4" />
              <CardTitle>Early Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Catch potential issues early. Regular screenings can help prevent vision loss.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Microscope className="w-12 h-12 text-gray-900 dark:text-gray-100 mb-4" />
              <CardTitle>AI-Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Our advanced AI model is trained on thousands of eye images to provide accurate risk assessments.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/predict">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Assessment
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

