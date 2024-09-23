'use client';
import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import { DayPicker } from 'react-day-picker';

import { IconCalendar } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import 'react-day-picker/dist/style.css';

import { COMPONENT_STYLE } from '@/theme';

import type { DatePickerProps } from './types';
import { SelectDayPicker } from '../types';

const { input, datePicker } = COMPONENT_STYLE;

export function DatePicker({
  size,
  onClick,
  className = '',
  selectedDay,
  onDateSelect,
  onToggleVisible,
  visible
}: DatePickerProps): ReactElement {
  const { iconSize } = useMemo(() => input.size[size], [size]);
  const outsideRef = useRef<HTMLButtonElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [changeMonth, setChangeMonth] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(selectedDay);
  const [detail, setDetail] = useState<SelectDayPicker>({
    left: 0,
    top: 0
  });
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const {
    cursor,
    backgroundColor,
    button,
    daySelected,
    border,
    textColor,
    dropdown
  } = datePicker;

  useEffect(
    function setPositionDayPicker() {
      if (datePickerRef.current && visible && outsideRef.current) {
        const rect = outsideRef.current.getBoundingClientRect();
        const calendarHeight = datePickerRef.current.clientHeight;
        const calendarWidth = datePickerRef.current.clientWidth;
        const isTopPosition = window.innerHeight - rect.bottom < calendarHeight;
        setDetail({
          top: isTopPosition ? -calendarHeight + rect.top - 35 : rect.top + 25,
          left: rect.left + -calendarWidth
        });
      }
    },
    [visible, changeMonth, selectedDay]
  );

  useEffect(() => setMonth(selectedDay), [selectedDay]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (event.target instanceof Node) {
        if (
          outsideRef.current &&
          !outsideRef.current.contains(event.target) &&
          visible
        ) {
          onToggleVisible();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onToggleVisible, visible]);

  return (
    <button type="button" tabIndex={-1} ref={outsideRef}>
      <IconCalendar
        width={20}
        height={20}
        className={twMerge(
          'transition-colors hover:opacity-60 absolute top-1/4 right-4',
          input.apperance.iconColor,
          iconSize,
          className
        )}
        onClick={onClick}
      />
      {visible ? (
        <div
          ref={datePickerRef}
          className={twMerge(backgroundColor, border, 'fixed')}
          style={{
            top: detail.top,
            left: detail.left
          }}
        >
          <DayPicker
            mode="single"
            selected={selectedDay}
            month={month}
            onSelect={onDateSelect}
            onMonthChange={() => {
              setMonth(undefined);
              setChangeMonth(!changeMonth);
            }}
            showOutsideDays
            initialFocus
            captionLayout="dropdown-buttons"
            fromYear={currentYear - 100}
            toYear={currentYear + 100}
            classNames={{
              dropdown: twMerge(textColor, dropdown),
              button_reset: twMerge(cursor),
              button: twMerge(cursor, button.backgroundColor, button.textColor),
              day_selected: twMerge(
                daySelected.backgroundColor,
                daySelected.textColor
              )
            }}
          />
        </div>
      ) : null}
    </button>
  );
}
