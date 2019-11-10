import { Moment } from "moment"
import { useUpdateUnitDigit } from "redux-store/actions/unit-digits"
import { getNounType } from "utils"
import { useToggleUnitName } from "redux-store/actions/unit-names"

export const useUpdateCountdown = () => {
  const {toggleUnitName} = useToggleUnitName()
  const {updateUnitDigit} = useUpdateUnitDigit()

  const updateCountdown = (now: Moment, nextBirthday: Moment) => {
    enum UnitTypes {
      days = "days",
      hours = "hours",
      minutes = "minutes",
      seconds = "seconds",
    }

    const days = nextBirthday.diff(now, UnitTypes.days)

    toggleUnitName({ unitType: UnitTypes.days, nounType: getNounType(days) })
    updateUnitDigit({ unitType: UnitTypes.days, value: days })

    nextBirthday.subtract(days, UnitTypes.days)

    const hours = nextBirthday.diff(now, UnitTypes.hours)
    toggleUnitName({ unitType: UnitTypes.hours, nounType: getNounType(hours) })
    updateUnitDigit({ unitType: UnitTypes.hours, value: hours })

    nextBirthday.subtract(hours, UnitTypes.hours)

    const minutes = nextBirthday.diff(now, UnitTypes.minutes)
    toggleUnitName({ unitType: UnitTypes.minutes, nounType: getNounType(minutes) })
    updateUnitDigit({ unitType: UnitTypes.minutes, value: minutes })

    nextBirthday.subtract(minutes, UnitTypes.minutes)

    const seconds = nextBirthday.diff(now, UnitTypes.seconds)
    toggleUnitName({ unitType: UnitTypes.seconds, nounType: getNounType(seconds) })
    updateUnitDigit({ unitType: UnitTypes.seconds, value: seconds })
  }

  return {updateCountdown}
}
