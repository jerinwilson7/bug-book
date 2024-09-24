import { TrendingTopics, WhoToFollow } from '@/components/molecules'
import { Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'

export const TrendsSidebar = () => {
  return (
    <div className='sticky top-[5.25rem] hidden md:block lg:w-80 w-72 h-fit flex-none space-y-5'>
        <Suspense fallback={<Loader2 className='mx-auto animate-spin'/>}>
        <WhoToFollow/>
        <TrendingTopics/>
        </Suspense>
    </div>
  )
}
