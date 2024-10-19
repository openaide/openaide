import Link from 'next/link'

interface AppLinkProps {
  href: string
  title: string
  description: string
  className?: string
}

const AppLink: React.FC<AppLinkProps> = ({
  href,
  title,
  description,
  className
}) => {
  return (
    <Link href={href} className={className}>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </Link>
  )
}

export default AppLink
