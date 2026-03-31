'use client'

import { Scene3D } from './Scene3D'
import { FloatingObjects } from './FloatingObjects'
import { MouseTracker } from './MouseTracker'

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Scene3D>
        <MouseTracker>
          <FloatingObjects />
        </MouseTracker>
      </Scene3D>
    </div>
  )
}
