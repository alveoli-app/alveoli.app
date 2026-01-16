"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          SIGNAL
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="ALVEOLI" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          GitMesh Enterprise Edition
        </h2>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-6">
          <p className="max-w-md md:w-1/2 font-mono text-sm text-muted-foreground leading-relaxed">
            GitMesh Enterprise Edition adds a capacity-aware intelligence layer that correlates those signals with your product surface, roadmap constraints, and team capacity to produce capacity-constrained, ranked backlogs and executable GitHub issues with persistent decision rationale, approval workflows, and audit logs. Leaders interact through an agentic interface with role-based controls to propose, evaluate, and approve prioritization and sprint changes—turning visibility into velocity.
          </p>

            <>
              <style>{`
                @media (max-width:1299px) {
                  .hide-below-1300{display:none !important;}
                  .show-below-1300{display:flex !important;}
                }
                @media (min-width:1300px) {
                  .hide-below-1300{display:block !important;}
                  .show-below-1300{display:none !important;}
                }
              `}</style>

              {/* Large embedded demo for widths >= 1300px */}
              <div className="hidden md:block absolute right-2 bottom-22 z-20 w-[650px] hide-below-1300">
                <div className="relative pt-[56.25%] w-full rounded overflow-hidden bg-black/5 border border-border shadow-lg">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/0EUWYmeCjWM"
                    title="GitMesh Enterprise Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Small "View Demo" button for widths < 1300px */}
              <div className="show-below-1300">
                <a
                  href="https://youtu.be/0EUWYmeCjWM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-foreground/20 rounded font-mono text-xs uppercase tracking-widest text-foreground bg-background hover:bg-accent transition"
                >
                  View Demo
                </a>
              </div>
            </>
        </div>

        <div className="mt-16 flex items-center gap-8">
          <a
            href="https://forms.gle/5XHJjQ4Cg4vZm43o9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Early Access" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="https://gitmesh.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Community Edition
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          GitMesh CE v0.3 / Platform Released
        </div>
      </div>
    </section>
  )
}
