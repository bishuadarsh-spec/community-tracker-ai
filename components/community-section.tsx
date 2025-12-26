"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const communities = [
    {
      platform: "If you’re trying to keep up with what people are saying, you already know the pain:",
      followers: "Someone asks for a recommendation… but you see it two days later",
      description: "A competitor gets mentioned in a thread you should’ve joined",
      buttonText: "A complaint starts spreading and you find out when it’s already bigger",
      bgColor: "from-blue-50 to-blue-100",
      link: "https://communitytracker.ai",
    },
    {
      platform: "You spend 45 minutes scrolling… and still miss the one post that mattered",
      followers: "CommunityTracker keeps watch for you",
      description: "so you don’t have to live inside 10 tabs.",
      buttonText: "The problem isn’t “no conversations.” It’s “too many places.”",
      bgColor: "from-red-50 to-red-100",
      link: "https://communitytracker.ai",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-10 md:py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">The problem isn’t “no conversations.” It’s “too many places.”</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-8"
      >
        {communities.map((community, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-gradient-to-br ${community.bgColor} rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg group`}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted-foreground mb-2">{community.followers}</p>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                {community.platform}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{community.description}</p>
            </div>

            <motion.button
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              {community.buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
