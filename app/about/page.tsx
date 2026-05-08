export default function About() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-3xl">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Next.js application! This is a modern web application built with
          Next.js 14, React 18, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This template includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Next.js 14 with App Router</li>
          <li>TypeScript support</li>
          <li>Tailwind CSS for styling</li>
          <li>ESLint configuration</li>
          <li>Responsive design</li>
          <li>Error handling pages</li>
          <li>Loading states</li>
        </ul>
      </div>
    </div>
  )
}
