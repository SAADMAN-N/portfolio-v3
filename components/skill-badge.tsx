import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="bg-gray-800 text-gray-100 hover:bg-gray-700">
      {skill}
    </Badge>
  )
}

