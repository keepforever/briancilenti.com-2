import { useState, useRef, useEffect, useCallback } from 'react'

export const ClipEditor = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(10)
  const [isDraggingStart, setIsDraggingStart] = useState(false)
  const [isDraggingEnd, setIsDraggingEnd] = useState(false)
  const [tooltipTime, setTooltipTime] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 })

  const handleMouseDown = (handle: 'start' | 'end') => {
    if (handle === 'start') setIsDraggingStart(true)
    if (handle === 'end') setIsDraggingEnd(true)
  }

  const handleMouseUp = () => {
    setIsDraggingStart(false)
    setIsDraggingEnd(false)
    setTooltipTime(null)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!videoRef.current || !sliderRef.current) return

      const sliderRect = sliderRef.current.getBoundingClientRect()
      const videoDuration = videoRef.current.duration
      const relativePosition = (e.clientX - sliderRect.left) / sliderRect.width
      const newTime = relativePosition * videoDuration

      if (isDraggingStart) {
        const clampedTime = Math.max(0, Math.min(newTime, endTime - 1))
        setStartTime(clampedTime)
        setTooltipTime(clampedTime)
        const tooltipLeft = Math.max(0, Math.min(e.clientX - sliderRect.left, sliderRect.width))
        setTooltipPosition({ left: tooltipLeft, top: -40 }) // Adjusted top to position tooltip above the slider
        videoRef.current.currentTime = clampedTime // Update video playback position
      } else if (isDraggingEnd) {
        const clampedTime = Math.min(videoDuration, Math.max(newTime, startTime + 1))
        setEndTime(clampedTime)
        setTooltipTime(clampedTime)
        const tooltipLeft = Math.max(0, Math.min(e.clientX - sliderRect.left, sliderRect.width))
        setTooltipPosition({ left: tooltipLeft, top: -50 }) // Adjusted top to position tooltip above the slider
        videoRef.current.currentTime = clampedTime // Update video playback position
      }
    },
    [isDraggingStart, isDraggingEnd, setStartTime, setEndTime, videoRef, sliderRef, endTime, startTime],
  )

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDraggingStart, isDraggingEnd, handleMouseMove])

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setEndTime(videoRef.current.duration)
    }
  }

  return (
    <div className="flex flex-col gap-4 pb-6 text-green-400">
      <video ref={videoRef} src={'/demo-video.mp4'} controls className="w-full" onLoadedMetadata={handleLoadedMetadata}>
        <track kind="captions" />
      </video>

      <div ref={sliderRef} className="relative mt-4 h-12 w-full bg-green-800">
        <div
          role="slider"
          className="absolute bottom-0 top-0 w-2 cursor-ew-resize bg-green-500"
          style={{ left: `${(startTime / (videoRef.current?.duration || 1)) * 100}%` }}
          onMouseDown={() => handleMouseDown('start')}
          tabIndex={0}
          aria-valuenow={startTime}
        />
        <div
          role="slider"
          className="absolute bottom-0 top-0 w-2 cursor-ew-resize bg-green-500"
          style={{ left: `${(endTime / (videoRef.current?.duration || 1)) * 100}%` }}
          onMouseDown={() => handleMouseDown('end')}
          tabIndex={0}
          aria-valuenow={endTime}
        />
        {tooltipTime !== null && (
          <div
            className="absolute rounded border border-green-400 bg-black px-2 py-1 text-white"
            style={{ left: `${tooltipPosition.left}px`, top: `${tooltipPosition.top}px` }}
          >
            {tooltipTime.toFixed(2)} s
          </div>
        )}
      </div>

      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-green-600 px-4 py-2">State</th>
            <th className="border border-green-600 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 px-4 py-2">Start Time</td>
            <td className="border border-green-600 px-4 py-2">{startTime.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border border-green-600 px-4 py-2">End Time</td>
            <td className="border border-green-600 px-4 py-2">{endTime.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border border-green-600 px-4 py-2">Is Dragging Start</td>
            <td className="border border-green-600 px-4 py-2">{isDraggingStart.toString()}</td>
          </tr>
          <tr>
            <td className="border border-green-600 px-4 py-2">Is Dragging End</td>
            <td className="border border-green-600 px-4 py-2">{isDraggingEnd.toString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Video Metadata table */}

      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border border-green-600 px-4 py-2">Metadata</th>
            <th className="border border-green-600 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 px-4 py-2">Duration</td>
            <td className="border border-green-600 px-4 py-2">{videoRef.current?.duration.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border border-green-600 px-4 py-2">Current Time</td>
            <td className="border border-green-600 px-4 py-2">{videoRef.current?.currentTime.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border border-green-600 px-4 py-2">Paused</td>
            <td className="border border-green-600 px-4 py-2">{videoRef.current?.paused.toString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}