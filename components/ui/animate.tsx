'use client'

export function FadeIn({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`animate-fade-in-up ${className ?? ''}`}>
      {children}
    </div>
  )
}

export function ScaleIn({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`animate-fade-in-up ${className ?? ''}`}>
      {children}
    </div>
  )
}

export function SlideIn({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`animate-fade-in-up ${className ?? ''}`}>
      {children}
    </div>
  )
}

export function Stagger({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function HoverLift({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`${className} hover:-translate-y-0.5 transition-transform duration-150`}>
      {children}
    </div>
  )
}

export function PressScale({
  children, className,
}: {
  children: React.ReactNode; className?: string
}) {
  return (
    <div className={`${className} active:scale-[0.98] transition-transform duration-100`}>
      {children}
    </div>
  )
}

export function SkeletonPulse({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-muted ${className ?? ''}`} />
  )
}
