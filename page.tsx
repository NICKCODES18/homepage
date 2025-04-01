import Image from "next/image"
import { Bell, Menu, QrCode, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <Menu className="h-6 w-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-sm font-medium">Current Location</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <span className="text-sm">Modinagar, UP</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          <Bell className="h-6 w-6 text-gray-500" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-16">
        {/* Search Bar */}
        <div className="relative mx-4 my-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              className="pl-10 pr-10 py-6 bg-gray-100 rounded-full text-gray-500"
              placeholder="What are you looking for"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Promotional Banner/Slider - Using the exact image */}
        <div className="mx-4 my-4">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/slider-image.png"
              alt="50% OFF On First Service"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 my-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Photography Categories */}
        <div className="px-4 mt-6">
          <h2 className="text-xl font-semibold mb-4">Explore our photography</h2>

          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Birthday"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Birthday</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Wedding"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Wedding</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Pre-Wedding"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Pre-Wedding</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Anniversary"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Anniversary</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Trips"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Trips</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Couple Photoshoot"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Couple Photoshoot</span>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Group Gathering"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Group Gathering</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Asthetic Photoshoot"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">Asthetic Photoshoot</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden w-full aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Surprise on the spot photoshoot"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center text-xs">Surprise on the spot photoshoot</span>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex items-center justify-between px-4 mt-8">
          <span className="text-gray-500 text-sm">SCAN THE QR TO GET YOUR PHOTOS</span>
          <div className="bg-blue-600 p-2 rounded-full">
            <QrCode className="h-5 w-5 text-white" />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t py-2">
        <div className="flex justify-around items-center">
          <Link href="#" className="flex flex-col items-center text-blue-600">
            <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-xs">Home</span>
          </Link>

          <Link href="#" className="flex flex-col items-center text-gray-500">
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <span className="text-xs">Event</span>
          </Link>

          <Link href="#" className="flex flex-col items-center text-gray-500">
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
            </div>
            <span className="text-xs">Photos</span>
          </Link>

          <Link href="#" className="flex flex-col items-center text-gray-500">
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

