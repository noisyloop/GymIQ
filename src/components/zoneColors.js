// Static Tailwind class maps for the five HR zones, keyed by zone id.
// Full class strings are written as literals so Tailwind's content scanner
// includes them in the build. Shared by ZoneBar and the Zones page.

export const zoneBarClass = {
  1: 'bg-blue-400',
  2: 'bg-teal-400',
  3: 'bg-yellow-400',
  4: 'bg-orange-400',
  5: 'bg-red-500',
}

export const zoneTextClass = {
  1: 'text-blue-400',
  2: 'text-teal-400',
  3: 'text-yellow-400',
  4: 'text-orange-400',
  5: 'text-red-500',
}

export const zoneBorderClass = {
  1: 'border-blue-400/40',
  2: 'border-teal-400/40',
  3: 'border-yellow-400/40',
  4: 'border-orange-400/40',
  5: 'border-red-500/40',
}
