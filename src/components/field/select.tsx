'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement
} from 'react';

import { twMerge } from 'tailwind-merge';

import {
  OPTION_HEIGHT_SIZE_PX,
  SPACING_WRAPPER_OPTION,
  WRAPPER_OPTION_HEIGHT_SIZE_PX
} from '@/theme';

import * as Builder from './builder';
import type { SelectDetail, SelectProps } from './types';

export function Select({
  options,
  value,
  label,
  errorMessage,
  onChange,
  renderIcon,
  size = 'medium',
  className = '',
  wrapperClass = '',
  required = false
}: SelectProps): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);
  const outsideRef = useRef<HTMLDivElement>(null);
  const [detail, setDetail] = useState<SelectDetail>({
    left: 0,
    top: 0,
    width: 0
  });

  const handleOnOutsideClick = useCallback((event: MouseEvent) => {
    if (
      outsideRef.current &&
      !outsideRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  }, []);

  const handleOnSelectClick = useCallback(() => {
    setIsExpanded((state) => !state);
  }, []);

  useEffect(
    function listenOnOutsideClick() {
      document.addEventListener('mousedown', handleOnOutsideClick);
      return (): void =>
        document.removeEventListener('mousedown', handleOnOutsideClick);
    },
    [handleOnOutsideClick]
  );

  useEffect(
    function getSelectWidth() {
      if (outsideRef.current && isExpanded) {
        const rect = outsideRef.current.getBoundingClientRect();
        const topPosition =
          window.innerHeight - rect.bottom < WRAPPER_OPTION_HEIGHT_SIZE_PX;
        const optionsListSize = OPTION_HEIGHT_SIZE_PX * options.length;
        const top = !topPosition
          ? OPTION_HEIGHT_SIZE_PX + SPACING_WRAPPER_OPTION
          : optionsListSize > WRAPPER_OPTION_HEIGHT_SIZE_PX
            ? -(WRAPPER_OPTION_HEIGHT_SIZE_PX + SPACING_WRAPPER_OPTION)
            : -(optionsListSize + SPACING_WRAPPER_OPTION);

        setDetail({
          width: rect.width,
          top: rect.top + top,
          left: rect.left
        });
      }
    },
    [isExpanded, options.length]
  );

  const selected = useMemo(
    () => options.find((item) => item.value === value),
    [options, value]
  );

  return (
    <div
      className={twMerge('flex flex-col w-full', wrapperClass)}
      ref={outsideRef}
    >
      <Builder.Label text={label} isRequired={required}>
        <Builder.Select
          size={size}
          data-error={Boolean(errorMessage)}
          value={selected?.label}
          aria-expanded={isExpanded}
          onClick={handleOnSelectClick}
          className={className}
        />
        {isExpanded ? (
          <main
            className="fixed z-50"
            style={{
              minWidth: detail.width,
              top: detail.top,
              left: detail.left
            }}
          >
            <Builder.WrapperOption size={size}>
              {options.length === 0 ? (
                <Builder.EmptyList size={size} />
              ) : (
                options.map((option, index) => (
                  <Builder.Option
                    key={index}
                    size={size}
                    value={option.value}
                    aria-selected={option.value === value}
                    onClick={() => onChange(option)}
                  >
                    {renderIcon ? renderIcon(option) : null}
                    {option.label}
                  </Builder.Option>
                ))
              )}
            </Builder.WrapperOption>
          </main>
        ) : null}
      </Builder.Label>
      <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
    </div>
  );
}
