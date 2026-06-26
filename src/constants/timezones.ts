import { getTimeZones } from "@vvo/tzdb";

export const TIMEZONES = getTimeZones()
  .map((tz) => ({
    value: tz.name,
    label: `${tz.abbreviation} — ${tz.currentTimeFormat} (${tz.rawOffsetInMinutes >= 0 ? "+" : "-"}${String(
      Math.floor(Math.abs(tz.rawOffsetInMinutes) / 60)
    ).padStart(2, "0")}:${String(
      Math.abs(tz.rawOffsetInMinutes) % 60
    ).padStart(2, "0")}) • ${tz.name.replace(/\//g, " → ")}`,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));