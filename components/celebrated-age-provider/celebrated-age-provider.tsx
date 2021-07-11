import moment from "moment"
import { createContext, ReactNode, useContext } from "react"
import { getCelebratedAge } from "utils/get-celebrated-age"
import type { CelebratedAge } from "utils/get-celebrated-age"

/**
 * Context
 */

type CelebratedAgeContextValue = CelebratedAge | undefined

const CelebratedAgeContext = createContext<CelebratedAgeContextValue>(undefined)

/**
 * Provider
 */

type Props = {
  children: ReactNode
}

export const CelebratedAgeProvider = ({ children }: Props) => {
  const now = moment.utc()
  const celebratedAge = getCelebratedAge(now)

  return <CelebratedAgeContext.Provider value={celebratedAge}>{children}</CelebratedAgeContext.Provider>
}

/**
 * Hook
 */

export const useCelebratedAge = () => {
  const context = useContext(CelebratedAgeContext)

  if (context === undefined) {
    throw new Error("useCelebratedAge must be used within a CelebratedAgeProvider")
  }

  return context
}
