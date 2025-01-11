import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  date: string
  description: string
  achievements: string[]
}

export function ExperienceCard({
  title,
  company,
  date,
  description,
  achievements,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <p className="text-gray-200">{company}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-200">{description}</p>
          <ul className="space-y-2 text-gray-200">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

