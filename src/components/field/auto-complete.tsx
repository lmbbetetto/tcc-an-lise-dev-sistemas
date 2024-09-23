'use client';

import {
  ChangeEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement
} from 'react';

import { IconX } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import {
  COMPONENT_STYLE,
  OPTION_HEIGHT_SIZE_PX,
  SPACING_WRAPPER_OPTION,
  WRAPPER_OPTION_HEIGHT_SIZE_PX
} from '@/theme';

import * as Builder from './builder';
import type { SelectDetail, AutoCompleteProps, Option } from './types';

const { select } = COMPONENT_STYLE;

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  function AutoComplete(
    {
      options,
      value,
      label,
      errorMessage,
      onChange,
      onChangeText,
      onClean,
      renderIcon,
      customerFilterOption,
      onlyOption = false,
      loading = false,
      size = 'medium',
      wrapperClass = '',
      className = '',
      required = false,
      ...props
    },
    ref
  ): ReactElement {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const outsideRef = useRef<HTMLDivElement>(null);
    const { iconSize } = select.size[size];
    const { iconColor } = select.apperance;
    const [detail, setDetail] = useState<SelectDetail>({
      left: 0,
      top: 0,
      width: 0
    });

    const handleOnOutsideClick = useCallback(
      (event: MouseEvent) => {
        if (
          outsideRef.current &&
          !outsideRef.current.contains(event.target as Node)
        ) {
          setIsExpanded(false);
          if (onlyOption && !value) {
            setSearchText('');
          }
        }
      },
      [onlyOption, value]
    );

    const handleOnSelectClick = useCallback(() => {
      if (!isExpanded) {
        setIsExpanded(true);
      }
    }, [isExpanded]);

    const handleOnChangeFilterText: ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (event) => {
          setSearchText(event.target.value);
          if (onChangeText) {
            onChangeText(event);
          }

          if (onlyOption && value) {
            onClean();
          }
        },
        [onChangeText, onClean, onlyOption, value]
      );

    const handleOnSelectOption = useCallback(
      (option: Option) => {
        setIsExpanded(false);
        setSearchText(option.label);
        onChange(option);
      },
      [onChange]
    );

    const handleOnCleanClick = useCallback(() => {
      setSearchText('');
      onClean();
    }, [onClean]);

    const filteredOption = useMemo(
      () =>
        customerFilterOption
          ? customerFilterOption(searchText, options)
          : options.filter((item) =>
              item.label.toLowerCase().includes(searchText.toLowerCase())
            ),
      [customerFilterOption, options, searchText]
    );

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
          const optionsListSize = OPTION_HEIGHT_SIZE_PX * filteredOption.length;
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
      [isExpanded, filteredOption.length]
    );

    return (
      <div
        className={twMerge('flex flex-col w-full', wrapperClass)}
        ref={outsideRef}
      >
        <Builder.Label text={label} isRequired={required}>
          <Builder.Input
            {...props}
            ref={ref}
            size={size}
            data-error={Boolean(errorMessage)}
            value={searchText}
            aria-expanded={isExpanded}
            onClick={handleOnSelectClick}
            onChange={handleOnChangeFilterText}
            className={className}
            isPasswordType
          />
          <div className="absolute top-1/4 right-3">
            {Boolean(value) ? (
              <IconX
                aria-expanded={isExpanded}
                className={twMerge(iconSize, iconColor)}
                onClick={handleOnCleanClick}
              />
            ) : null}
          </div>
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
                {loading ? (
                  <Builder.Loading size={size} />
                ) : filteredOption.length === 0 ? (
                  <Builder.EmptyList size={size} />
                ) : (
                  filteredOption.map((option, index) => (
                    <Builder.Option
                      key={index}
                      size={size}
                      value={option.value}
                      aria-selected={option.value === value}
                      onClick={() => handleOnSelectOption(option)}
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
);
