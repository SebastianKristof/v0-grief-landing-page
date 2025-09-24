import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-8 py-8 md:px-16">
        <div className="font-serif text-2xl font-light text-foreground italic">The Mortality Institute</div>
        <Button
          variant="outline"
          className="rounded-full px-8 py-3 bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Reach Out
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      <section className="px-8 py-12 md:px-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
              When Pain Has Meaning: A New Approach to Grief and Mortality
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance mb-12 text-foreground">
              Where others suppress grief, I help you live through it
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16">
              A structured, confidential practice for discerning individuals seeking to transform grief into meaning,
              strength, and renewed purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full px-12 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                DOWNLOAD WHITEPAPER
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 py-6 text-base bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                REACH OUT
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase text-center">
            The Problem
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16 text-balance">
            Conventional approaches fail
          </h2>

          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-center text-muted-foreground max-w-3xl mx-auto mb-20 ml-24 mr-6">
            "I don't want to be consoled, distracted, or cheered up! I want someone I can lean on, so I can go through
            this experience safely and make sense of it."
          </blockquote>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Medicine</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reduces grief to a "disorder" or timeline. The result is suppression, not integration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Psychology</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Offers generalized stages that rarely fit individual reality, leaving people feeling misunderstood.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Behavioral Therapy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Focuses on changing thoughts and behaviors without honoring the depth of emotional experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Religious Consolation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Helpful to many, but may feel contrived or dismissive of your individual beliefs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Well-meaning Advice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Be strong, move on" — devalues your pain and seems to be more about their comfort than yours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-serif text-lg mb-3 text-foreground">Esoteric Approaches</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Often lack evidence-based foundations and tell you what you want to hear.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            All these approaches share a common theme: they feel disrespectful to the value of genuine human pain and
            suffering, and dismissive of your particular situation.
          </p>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 max-w-2xl">
              <h4 className="font-serif text-lg mb-6 text-center text-foreground">My Core Principles</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">The middle way</span>
                    <p className="text-sm text-muted-foreground">
                      A balanced approach between medicalization and esoteric shortcuts, grounded in evidence and
                      respect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">
                      Continuing bonds over "moving on"
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Honoring memory while releasing destructive pain — you don't need to "get over" someone you love.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">Memory is sacred</span>
                    <p className="text-sm text-muted-foreground">
                      Letting go of destructive pain does not mean betrayal of the one who has died.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">Each person is unique</span>
                    <p className="text-sm text-muted-foreground">
                      There is no single "right" way or timeline to grieve — your experience is valid and individual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">My Approach</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance">The middle way</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Neither medicalization nor esoteric shortcuts — a structured, evidence-informed approach grounded in deep
            respect for your experience. Pain is not the enemy. Where others try to suppress, normalize, or console, I
            create space to fully feel and integrate.
          </p>

          <Button
            variant="outline"
            className="rounded-full px-12 py-6 text-base bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            LEARN MORE
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase text-center">
            Who I Work With
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-12 text-balance">
            Mortality awareness
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
            It's not only when death strikes that we come into the awareness of our mortality. Death is a big taboo, the
            elephant in the room. We either try to ignore it, or laugh at it. But coming to grips with death is the
            single most important thing one can do in many life situations.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-foreground">When Most Clients Reach Out</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Acute grief (first months after loss)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Stuck or complicated grief</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Preparation for anticipated loss</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-xl text-foreground">Additional Situations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Diagnosis with uncertain prognosis</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Existential and midlife transitions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">Professional burnout with mortality</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Whether you're facing fresh loss, stuck in patterns that no longer serve you, or confronting mortality in
              unexpected ways, this work offers a structured path through the complexity. You don't have to navigate
              this alone, and you don't have to accept approaches that feel dismissive of your experience. There is a
              way to honor both your pain and your capacity for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">How We Work</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-16 text-balance">Structured programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-xl mb-4 text-foreground">Quick Relief</h3>
                <p className="text-sm text-muted-foreground mb-6">Single focused session</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Immediate stabilization and resourcing when grief feels acute. Creating safety during the most
                  difficult moments.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  REACH OUT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm ring-2 ring-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3 className="font-serif text-xl text-foreground">Core Series</h3>
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">5-6 week structured program</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Comprehensive processing and integration work. Addressing unfinished matters, guilt, and creating a
                  path toward living forward with clarity.
                </p>
                <Button className="rounded-full px-8 py-3 bg-primary hover:bg-primary/90 transition-all duration-300">
                  REACH OUT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-xl mb-4 text-foreground">Extended Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Up to 6 months</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Ongoing accompaniment for complex grief, professional burnout, or existential transitions requiring
                  deeper work.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  REACH OUT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase text-center">About Me</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-12 text-balance">
            A different path
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              M.D. with postdoctoral fellowships at Yale and UCSD. I chose not to pursue a U.S. medical license,
              refusing to reduce human suffering to diagnoses and prescriptions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through years of research and practice, I developed a method integrating subconscious work, regression,
              and therapeutic rituals — structured, evidence-based, and deeply transformative.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase text-center">Vision</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-12 text-balance">
            Facing the elephant in the room
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mortality touches every area of life, yet our culture offers little genuine support beyond rigid religious
              practices or medical models that pathologize normal human experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Accepting mortality isn't grim resignation — it's the path to longevity and fulfillment. By facing death
              directly, we discover life more fully.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">LEARN MORE</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance">Download whitepaper</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Get the full methodology, principles, and approach to transforming grief into meaning. A comprehensive guide
            for those ready to explore a different path.
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email"
              className="rounded-full px-6 py-4 text-center bg-card border-2 border-primary/20 focus:border-primary transition-all duration-300"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 rounded-full px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300">
                DOWNLOAD
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full px-8 py-4 bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                REACH OUT
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              <Mail className="h-5 w-5" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 md:px-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl font-light italic text-foreground">The Mortality Institute</div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="mailto:contact@example.com" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8">
            © 2025 The Mortality Institute. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
