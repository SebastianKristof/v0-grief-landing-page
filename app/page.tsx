import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <div className="font-serif text-xl md:text-2xl font-normal text-foreground italic">The Mortality Institute</div>
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 md:px-8 md:py-3 bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm md:text-base"
        >
          Reach Out
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      <section className="px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-8 tracking-wide uppercase text-base md:text-lg font-semibold">
              When Pain Has Meaning: A New Approach to Grief and Mortality
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-balance mb-8 text-foreground">
              Others suppress grief; I help you find its meaning
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              A structured, confidential practice for discerning individuals seeking to transform grief into meaning,
              strength, and renewed purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base bg-primary hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
              >
                DOWNLOAD WHITEPAPER
                <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
              >
                REACH OUT
                <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-8 tracking-wide uppercase text-base md:text-lg font-semibold">The Problem</p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-16 text-balance">
              Conventional approaches fail
            </h2>

            <blockquote className="font-serif text-lg md:text-xl lg:text-2xl font-normal italic text-center text-muted-foreground max-w-3xl mx-auto mb-16 px-4 md:px-8">
              "I don't want to be consoled, distracted, or cheered up! I want someone I can lean on, so I can go through
              this experience safely and make sense of it."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Medicine</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  Reduces grief to a "disorder" or timeline. The result is suppression, not integration.
                </p>
              </div>

              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Psychology</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  Offers generalized stages that rarely fit individual reality, leaving people feeling misunderstood.
                </p>
              </div>

              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Behavioral Therapy</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  Focuses on changing thoughts and behaviors without honoring the depth of emotional experience.
                </p>
              </div>

              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Religious Consolation</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  Helpful to many, but may feel contrived or dismissive of your individual beliefs.
                </p>
              </div>

              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Well-meaning Advice</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  "Be strong, move on" devalues your pain and seems to be more about their comfort than yours.
                </p>
              </div>

              <div className="group border-l-4 border-primary/30 pl-6 md:pl-8 py-6 pr-4 md:pr-6 rounded-r-lg bg-gradient-to-r from-card/50 to-card/80 md:hover:from-background md:hover:to-card md:hover:border-primary/50 md:hover:shadow-sm transition-all duration-300 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground md:group-hover:text-primary transition-colors duration-300">Esoteric Approaches</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300">
                  Often lack evidence-based foundations and tell you what you want to hear.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              All these approaches share a common theme: they feel disrespectful to the value of genuine human pain and
              suffering, and dismissive of your particular situation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-8 tracking-wide uppercase text-base md:text-lg font-semibold">My Approach</p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-12 text-balance">The middle way</h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
            Pain is not the enemy. Where others try to suppress, normalize, or console, I create space to fully feel and
            integrate. I offer a structured, evidence-informed approach grounded in deep respect for your experience.
          </p>

          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 max-w-xl mx-auto">
              <h4 className="font-serif text-lg mb-6 text-left text-foreground">My Core Principles</h4>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <span className="font-medium text-base block mb-1 text-foreground">The middle way</span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      A balanced approach between medicalization and esoteric shortcuts, grounded in evidence and
                      respect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <span className="font-medium text-base block mb-1 text-foreground">
                      Continuing bonds over "moving on"
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      Honoring memory while releasing destructive pain. You don't need to "get over" someone you love.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <span className="font-medium text-base block mb-1 text-foreground">Memory is sacred</span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      Letting go of destructive pain does not mean betrayal of the one who has died.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <span className="font-medium text-base block mb-1 text-foreground">Each person is unique</span>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      There is no single "right" way or timeline to grieve. Your experience is valid and individual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-8 py-4 md:px-12 md:py-6 text-sm md:text-base bg-transparent border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            LEARN MORE
            <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-8 tracking-wide uppercase text-center text-base md:text-lg font-semibold">
            Who I Work With
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-12 text-balance">
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

      <section className="px-8 py-12 md:px-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-8 tracking-wide uppercase text-lg font-semibold">How We Work</p>

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

      <section className="px-8 py-12 md:px-16 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-8 tracking-wide uppercase text-center text-lg font-semibold">
            About Me
          </p>

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

      <section className="px-8 py-12 md:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-8 tracking-wide uppercase text-center text-lg font-semibold">Vision</p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance text-center">
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

      <section className="px-8 py-12 md:px-16 text-background bg-sidebar-foreground">
        <div className="max-w-4xl mx-auto">
          <p className="font-medium text-background/70 mb-8 tracking-wide uppercase text-center text-lg">
            Next Steps
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-balance text-center text-background">
            Interested in learning more?
          </h2>

          <p className="text-lg text-background/80 leading-relaxed max-w-3xl mx-auto mb-16 text-center">
            Download the whitepaper to understand the approach in detail, or reach out directly to discuss your specific
            situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-full px-12 py-6 text-base bg-background text-foreground hover:bg-background/90 transition-all duration-300 shadow-lg"
            >
              DOWNLOAD WHITEPAPER
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-12 py-6 text-base bg-transparent border-2 border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300"
            >
              REACH OUT
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 md:px-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center text-sm">
              <strong>Disclaimer:</strong> This is not medical treatment and does not replace psychiatric or religious
              care. I do not diagnose, prescribe, or treat any illness or disorder. This is a private therapeutic
              practice dedicated to helping people live through the hardest passages of life with dignity. This is not a
              crisis service; in an emergency, please contact local emergency resources or crisis hotlines immediately.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
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
              <div className="text-sm text-muted-foreground">© 2025 The Mortality Institute. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
