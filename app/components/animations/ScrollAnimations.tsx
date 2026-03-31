'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/app/lib/gsap-config'

export function ScrollAnimations() {
  useEffect(() => {
    // Animate all sections with fade-in on scroll
    const sections = gsap.utils.toArray('.scroll-animate')

    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Animate headings with slide-in effect
    const headings = gsap.utils.toArray('.scroll-heading')

    headings.forEach((heading: any) => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Parallax effect for certain elements
    const parallaxElements = gsap.utils.toArray('.parallax')

    parallaxElements.forEach((element: any) => {
      gsap.to(element, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    // Stagger animation for cards/items
    const cardGroups = gsap.utils.toArray('.scroll-stagger')

    cardGroups.forEach((group: any) => {
      const cards = group.querySelectorAll('.stagger-item')

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return null
}
