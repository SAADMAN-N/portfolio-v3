import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  date: string
  achievements: string[]
}

export function ProjectCard({
  title,
  description,
  technologies,
  date,
  achievements,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors h-full">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl font-bold">{title}</CardTitle>
            <span className="text-sm text-white-400">{date}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-200">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gray-800 text-gray-100 hover:bg-gray-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
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

