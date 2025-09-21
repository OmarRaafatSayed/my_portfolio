
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Target, Bot, Users, Rocket } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Typing animation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const titles = ["Business Technologist", "Software engineer Trainer", "UI UX | Brand identity Designer", "Web | App developer"]

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTextIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % titles.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, titles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-background">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-foreground via-muted to-primary opacity-20 dark:opacity-10"
        style={{ y: y1 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, hsl(var(--muted)) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, hsl(var(--foreground)) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>

      {/* Floating Marketing Icons */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: y2 }}>
        {[
          { icon: Bot, x: "10%", y: "20%" },
          { icon: Zap, x: "80%", y: "30%" },
          { icon: Users, x: "15%", y: "70%" },
          { icon: Rocket, x: "85%", y: "80%" },
          { icon: Target, x: "70%", y: "15%" },
          { icon: TrendingUp, x: "25%", y: "85%" },
        ].map((item, i) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              <IconComponent className="w-8 h-8 text-primary opacity-30" />
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div className="relative z-10 text-center max-w-5xl mx-auto" style={{ opacity }}>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            AI-Powered Marketing Solutions
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Omar</span>
          <span className="block text-primary">Dawood</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-4 min-h-[3rem] flex items-center justify-center">
            {currentText}
            <motion.span
              className="inline-block w-1 h-8 bg-primary ml-2 rounded-sm"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-foreground dark:text-muted-foreground mt-6 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to achieve your business vision through technology? 
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("experience")}
            className="w-full sm:w-auto text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group w-full sm:w-auto flex justify-center gap-2 items-center shadow-xl text-lg bg-background text-foreground font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-primary-foreground before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden relative z-10 h-11 px-8 border-2 rounded-full"
          >
            Let's Achieve Your Vision
            <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-background text-foreground ease-linear duration-300 rounded-full border border-current group-hover:border-primary-foreground p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-current group-hover:fill-primary" />
            </svg>
          </button>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "500+", label: "Youth Empowered" },
            { number: "213%", label: "Engagement Increase" },
            { number: "40%", label: "Efficiency Boost" },
            { number: "95%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-foreground dark:text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-foreground dark:border-muted-foreground rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <p className="text-sm text-foreground dark:text-muted-foreground mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
