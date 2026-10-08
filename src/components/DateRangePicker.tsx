import { useEffect } from 'react'
import commonScriptsUrl from '../js/common_scripts.js?url'
import pickerCssUrl from '../css/daterangepicker_v2.css?url'
import { loadScript } from '../utils/loadScript'

type Props = {
  id: string
  name?: string
  inline?: boolean
  placeholder?: string
  onChange?: (start: Date, end: Date) => void
}

// easepick (bundled in the template's common_scripts.js). Same options as js/datepicker_inline.js.
function DateRangePicker({ id, name = id, inline = true, placeholder, onChange }: Props) {
  useEffect(() => {
    let picker: { destroy: () => void } | undefined
    let cancelled = false

    loadScript(commonScriptsUrl).then(() => {
      if (cancelled) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const easepick = (window as any).easepick
      picker = new easepick.create({
        element: document.getElementById(id),
        css: [pickerCssUrl],
        lang: 'en-EN',
        format: inline ? 'DD/MM/YYYY' : 'MM/DD/YYYY',
        calendars: 2,
        grid: 2,
        zIndex: inline ? 10 : 99999,
        inline,
        plugins: ['LockPlugin', 'RangePlugin'],
        RangePlugin: {
          tooltipNumber: (num: number) => num - 1,
          locale: { one: 'night', other: 'nights' },
        },
        LockPlugin: { minDate: new Date(), minDays: 1, inseparable: false },
        setup(p: { on: (event: string, cb: (e: CustomEvent) => void) => void }) {
          p.on('select', (e) => onChange?.(e.detail.start, e.detail.end))
        },
      })
    })

    return () => {
      cancelled = true
      picker?.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, inline])

  return <input type={inline ? 'hidden' : 'text'} id={id} name={name} placeholder={placeholder} readOnly={!inline} />
}

export default DateRangePicker
