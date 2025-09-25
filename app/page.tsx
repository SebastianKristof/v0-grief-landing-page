import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-center px-8 py-6">
        <div className="font-bold text-xl text-black tracking-wide">THE MORTALITY INSTITUTE</div>
      </nav>

      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Product mockup */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 transform rotate-3 shadow-xl">
                <div className="bg-white rounded p-6 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MI</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">THE GUIDE TO</h3>
                    <h3 className="font-bold text-lg mb-4">MEANINGFUL GRIEF</h3>
                    <div className="text-xs text-gray-600 mb-4">
                      YOUR GREATEST
                      <br />
                      ALLY TO
                      <br />
                      HEALING
                    </div>
                    <div className="bg-black text-white text-xs py-2 px-4 rounded">
                      BREAKING THE
                      <br />
                      SILENCE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form and content */}
            <div>
              <h1 className="font-black text-5xl lg:text-6xl mb-6 leading-tight">
                THE GUIDE TO
                <br />
                MEANINGFUL GRIEF
              </h1>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover evidence-based strategies to transform grief into meaning and strength. Download your free
                guide and learn the structured approach that helps discerning individuals navigate life's deepest
                transitions.
              </p>

              {/* Form */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="tel"
                    placeholder="📞 Phone Number"
                    className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
                />
                <div className="text-xs text-gray-600">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>I agree to the terms and conditions and want to join The Going Viral Newsletter!</span>
                  </label>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-bold">
                  Get My Free Grief Guide Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-3xl mb-12 text-center">
            WHAT YOU'LL LEARN
            <br />
            IN THIS FREE GUIDE
            <br />
            TO MEANINGFUL GRIEF
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold">How to create meaning from grief in just 3 principles.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold">
                  The proven frameworks used by leading grief specialists to help clients grow exponentially.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold">
                  Actionable strategies to increase stability, engagement, and healing across all life platforms.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold">Real-world examples of grief success stories you can replicate.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-black text-3xl mb-12">FROM THE AUTHOR OF:</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center gap-8">
              <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-red-500 text-4xl mb-4">☂</div>
                  <h3 className="font-bold text-lg mb-2">THE MORTALITY</h3>
                  <h3 className="font-bold text-lg mb-2">INSTITUTE</h3>
                  <div className="text-sm">EVIDENCE-BASED GRIEF WORK</div>
                </div>
              </div>
              <div>
                <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="flex text-yellow-400 text-sm">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <div className="text-white font-bold text-lg">4.9</div>
                    <div className="text-white text-xs">Amazon</div>
                  </div>
                </div>
                <h4 className="font-bold text-lg">The Mortality Institute</h4>
                <p className="text-sm text-gray-600">Evidence-based grief work</p>
                <p className="text-sm text-gray-600 mt-2">
                  "A must read in a world of constant transformation. This book is the answer to anyone looking to
                  understand and grow your future of business."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex text-yellow-400 text-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <div className="text-white font-bold text-lg">4.3</div>
                  <div className="text-white text-xs">Amazon</div>
                </div>
              </div>
              <div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-lg mb-2">HEALING THROUGH</h4>
                  <h4 className="font-bold text-lg mb-2">MORTALITY</h4>
                  <div className="text-sm text-gray-600">HOW I BUILT A MASSIVE GRIEF</div>
                  <div className="text-sm text-gray-600">PRACTICE IN 30 DAYS</div>
                  <div className="text-xs text-gray-500 mt-4">DR. [YOUR NAME]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-3xl text-center mb-12">
            MEET DR. [YOUR NAME]—THE STRATEGIST BEHIND
            <br />
            MEANINGFUL GRIEF SUCCESS
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">DR. [YOUR NAME]</h3>
              </div>
            </div>

            <div>
              <p className="text-lg mb-6">
                Dr. [Your Name] is a grief specialist who has helped celebrities, Fortune 500 companies, and
                entrepreneurs navigate social media.
              </p>
              <p className="text-lg mb-6">
                Over the past 10 years, Dr. [Your Name] has worked with over 1 million in just 30 days. Dr. [Your Name]
                specializes in data-driven strategies that cut through the noise and drive massive engagement.
              </p>
              <p className="text-lg mb-6">
                His methods have generated millions in revenue for his clients —and now he's sharing them with you.
              </p>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Trusted By The World's Most Loved Brands</h4>
                <div className="flex items-center gap-8 text-gray-400">
                  <span className="font-bold">NETFLIX</span>
                  <span className="font-bold">GOOGLE</span>
                  <span className="font-bold">APPLE</span>
                  <span className="font-bold">MICROSOFT</span>
                  <span className="font-bold">AMAZON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-3xl text-center mb-12">
            WHAT OTHERS ARE SAYING ABOUT THE MORTALITY INSTITUTE AND DR. [YOUR NAME]
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-bold mb-2">Dr. Jordan Davis</h4>
                <p className="text-sm text-gray-600">"Best grief guide I've ever read as a Cardiologist Doctor!"</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-bold mb-2">Chris Cobb</h4>
                <p className="text-sm text-gray-600">
                  "I gained 10 lbs because 3 people content turned into 6 figures by Chris"
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-bold mb-2">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">"This approach transformed how I process grief completely"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl lg:text-5xl mb-8">
            Don't Miss Out—Start
            <br />
            Your Healing Journey
            <br />
            Today
          </h2>

          <p className="text-xl mb-12 text-gray-300">
            Download your free guide and discover the evidence-based approach to meaningful grief recovery.
          </p>

          <Button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-bold rounded">
            GET MY FREE GUIDE NOW
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      <footer className="px-8 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed text-center mb-8">
            <strong>Disclaimer:</strong> This is not medical treatment and does not replace psychiatric or religious
            care. I do not diagnose, prescribe, or treat any illness or disorder. This is a private therapeutic practice
            dedicated to helping people live through the hardest passages of life with dignity. This is not a crisis
            service; in an emergency, please contact local emergency resources or crisis hotlines immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="mailto:contact@example.com" className="hover:text-black transition-colors">
                Contact
              </a>
            </div>
            <div className="text-sm text-gray-600">© 2025 The Mortality Institute. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
