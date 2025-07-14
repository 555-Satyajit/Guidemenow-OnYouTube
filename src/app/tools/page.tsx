import ProdCard from '@/components/Analytics&Productivity'
import CameraCard from '@/components/Camera&Gear'
import GrowthCard from '@/components/ChannelGrowthTools'
import PluginCard from '@/components/EditingPlugins&Templates'
import EngagementToolsCard from '@/components/EngagementTools'
import GamersCard from '@/components/gamers'
import LegalCard from '@/components/Legal&Copyright'
import MoneitizationCard from '@/components/Monetization&Merch'
import MusicCard from '@/components/Music&Sound'
import AutoCard from '@/components/Scheduling&Automation'
import SeoCard from '@/components/SEO&Growth'
import SystemCard from '@/components/systems'
import ThumbCard from '@/components/Thumbnails&Design'
import ToolCard from '@/components/toolcard'
import { ColourfulTexts } from '@/components/toolhero'
import React from 'react'

const page = () => {
  return (
    <div>
      <ColourfulTexts />
      <ToolCard />
      <ThumbCard />
      <MusicCard />
      <SeoCard />
      <GrowthCard />
      <ProdCard />
      <CameraCard />
      <PluginCard />
      <EngagementToolsCard />
      < MoneitizationCard />
      <AutoCard />
      <LegalCard />
      <GamersCard />
      <SystemCard />
    </div>
  )
}

export default page
