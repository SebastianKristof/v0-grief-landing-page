import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

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
                  Reduces grief to a "disorder" or timeline. The result is suppression, not integration
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
                  "Be strong, move on" devalues your pain and seems to be more about their comfort than yours.
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">My Approach</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance">The middle way</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Neither medicalization nor esoteric shortcuts. A structured, evidence-informed approach grounded in deep
            respect for your experience. Pain is not the enemy. Where others try to suppress, normalize, or console, I
            create space to fully feel and integrate.
          </p>

          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 max-w-2xl">
              <h4 className="font-serif text-lg mb-6 text-foreground">My Core Principles</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">The middle way</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A balanced approach between medicalization and esoteric shortcuts, grounded in evidence and
                      respect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">
                      Continuing bonds over "moving on"
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Honoring memory while releasing destructive pain. You don't need to "get over" someone you love.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">Memory is sacred</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Letting go of destructive pain does not mean betrayal of the one who has died.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-base block mb-1 text-foreground">Each person is unique</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      There is no single "right" way or timeline to grieve. Your experience is valid and individual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
            Who is this for?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
            It's not only when death strikes that we become aware of our mortality. Death is a big taboo, the elephant
            in the room. We either try to ignore it or laugh at it. But coming to grips with death is the single most
            important thing one can do in many life situations.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-foreground">When To Reach Out</h3>
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
              M.D. specialized in psychiatry, with postdoctoral fellowships at Yale and UCSD. I chose not to become
              licensed in the U.S. because I did not like the idea of reducing human suffering to diagnoses and
              prescriptions.
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
            Through darkness to the light
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mortality touches every area of life, yet our culture offers little genuine support beyond rigid religious
              practices or medical models that pathologize normal human experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Accepting mortality isn't grim resignation. It's the path to longevity and fulfillment. By facing death
              directly, we allow ourselves to discover our personal meaning and the real joy of life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance">
            Interested in learning more?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
            Download the whitepaper to understand the approach in detail, or reach out directly to discuss your specific
            situation.
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
