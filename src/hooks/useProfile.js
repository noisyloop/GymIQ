import { useState, useEffect, useCallback } from 'react'

// localStorage-backed user profile. Everything stays on the device.
// All keys are namespaced with the gymiq_ prefix.

const PREFIX = 'gymiq_'
const PROFILE_KEY = `${PREFIX}profile`

const defaultProfile = {
  weightKg: null,
  heightCm: null,
  age: null,
  sex: '', // '', 'male', or 'female'
  goal: 'fat_loss',
  activityLevel: 'moderate',
  units: 'metric', // 'metric' | 'imperial'
  restingHR: null,
  configured: false,
}

const readProfile = () => {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return defaultProfile
    return { ...defaultProfile, ...JSON.parse(raw) }
  } catch {
    return defaultProfile
  }
}

export const useProfile = () => {
  const [profile, setProfile] = useState(readProfile)

  // Keep multiple hook consumers in sync across tabs/components.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === PROFILE_KEY) setProfile(readProfile())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const saveProfile = useCallback((updates) => {
    setProfile((prev) => {
      const next = { ...prev, ...updates, configured: true }
      try {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(next))
      } catch {
        // localStorage unavailable (private mode) — state still works in-session.
      }
      return next
    })
  }, [])

  // Wipe every gymiq_ key from localStorage.
  const clearProfile = useCallback(() => {
    try {
      const keys = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(PREFIX)) keys.push(key)
      }
      keys.forEach((k) => localStorage.removeItem(k))
    } catch {
      // ignore
    }
    setProfile(defaultProfile)
  }, [])

  return { profile, saveProfile, clearProfile }
}
