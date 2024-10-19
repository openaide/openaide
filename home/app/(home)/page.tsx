import dynamic from 'next/dynamic'

const ToolsComponent = dynamic(() => import('@/components/tools'), {
  ssr: false
})

export const metadata = {
  title: 'AIDE',
  description: 'Awesome AI Tools.',
  metadataBase: new URL('http://home.openaide.localhost')
}

export default async function IndexPage() {
  return (
    <div>
      <ToolsComponent />
    </div>
  )
}
