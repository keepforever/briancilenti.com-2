import type { Route } from "./+types/video-clip-demo";
import { ClipEditor } from '~/components/clip-editor'

export default function VideoClipDemo() {
  return (
    <div>
      <h2 className="px-2 py-6 text-3xl font-bold tracking-tighter text-green-400 sm:text-4xl lg:px-0">
        Video Clip Demo
      </h2>

      <ClipEditor />
    </div>
  )
}