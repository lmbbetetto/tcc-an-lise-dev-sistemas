import { Inter } from 'next/font/google';

import type { Config } from './types';

const inter = Inter({ subsets: ['latin'] });

export const COMPONENT_STYLE: Config = {
  body: {
    backgroundColor: 'transition-colors bg-surface dark:bg-surface-700',
    textColor: 'text-surface-800 dark:text-surface-100'
  },
  font: inter.className,
  button: {
    size: {
      small: {
        padding: {
          top: 'pt-3',
          left: 'pl-4',
          right: 'pr-4',
          bottom: 'pb-3'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        minWidth: 'min-w-32',
        width: '',
        maxWidth: '',
        gap: 'gap-3',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: 'pt-3',
          left: 'pl-4',
          right: 'pr-4',
          bottom: 'pb-3'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        minWidth: 'min-w-[9.5rem]',
        width: '',
        maxWidth: '',
        gap: 'gap-3',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      large: {
        padding: {
          top: 'pt-3',
          left: 'pl-4',
          right: 'pr-4',
          bottom: 'pb-3'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        minWidth: 'min-w-48',
        width: '',
        maxWidth: '',
        gap: 'gap-3',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      xlarge: {
        padding: {
          top: 'pt-3',
          left: 'pl-4',
          right: 'pr-4',
          bottom: 'pb-3'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        minWidth: 'lg:min-w-[29rem] min-w-full !rounded-2xl',
        width: '',
        maxWidth: '',
        gap: 'gap-3',
        minHeight: '',
        height: '',
        maxHeight: ''
      }
    },
    variant: {
      primary: {
        backgroundColor: 'bg-primary outline-none',
        borderColor: 'border-primary',
        textColor: 'text-surface-100 group-disabled:text-surface-400',
        iconColor: 'text-surface-100 group-disabled:text-surface-400',
        hover: 'hover:bg-primary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-primary/70'
      },
      primaryOutline: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-primary dark:border-surface-100',
        textColor:
          'text-primary dark:text-surface-100 group-disabled:text-surface-400 group-hover:text-surface-100 dark:group-hover:text-surface-700',
        iconColor:
          'text-primary group-disabled:text-surface-400 group-hover:text-surface-100 dark:group-hover:text-surface-100',
        hover: 'hover:bg-primary/70 dark:hover:bg-surface-100',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: ''
      },
      secondary: {
        backgroundColor: 'bg-secondary outline-none',
        borderColor: 'border-secondary',
        textColor: 'text-surface-100 group-disabled:text-surface-400',
        iconColor: 'text-surface-100 group-disabled:text-surface-400',
        hover: 'hover:bg-secondary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-secondary/70'
      },
      secondaryOutline: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-secondary',
        textColor:
          'text-secondary group-disabled:text-surface-400 group-hover:text-surface-100',
        iconColor:
          'text-secondary group-disabled:text-surface-400 group-hover:text-surface-100',
        hover: 'hover:bg-secondary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-secondary/70'
      },
      tertiary: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiaryOutline: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      dangerOutline: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      successOutline: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      infoOutline: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warningOutline: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      ghost: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-none',
        textColor:
          'text-primary dark:text-primary-300 group-disabled:text-surface-400 group-data-[loading=true]:text-primary dark:group-data-[loading=true]:text-primary-300',
        iconColor:
          'text-primary dark:text-primary-300 group-disabled:text-surface-400 group-data-[loading=true]:text-primary dark:group-data-[loading=true]:text-primary-300',
        hover: 'hover:bg-primary-100/10',
        active: 'active:bg-primary-100/20',
        disabled: '',
        focus: 'focus:bg-primary/10 dark:focus:bg-primary-300/10'
      }
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: 'rounded-bl-lg',
      borderBottomRightRadius: 'rounded-br-lg'
    }
  },
  fabButton: {
    size: {
      small: {
        padding: {
          top: 'pt-2',
          left: 'pl-2',
          right: 'pr-2',
          bottom: 'pb-2'
        },
        iconSize: 'size-6',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: 'pt-2',
          left: 'pl-2',
          right: 'pr-2',
          bottom: 'pb-2'
        },
        iconSize: 'size-6',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      large: {
        padding: {
          top: 'pt-2',
          left: 'pl-2',
          right: 'pr-2',
          bottom: 'pb-2'
        },
        iconSize: 'size-6',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      xlarge: {
        padding: {
          top: 'pt-3',
          left: 'pl-4',
          right: 'pr-4',
          bottom: 'pb-3'
        },
        iconSize: 'size-6',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      }
    },
    variant: {
      primary: {
        backgroundColor: 'bg-primary outline-none',
        borderColor: 'border-primary',
        iconColor: 'text-surface-100 group-disabled:text-surface-400',
        hover: 'hover:bg-primary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-primary/70'
      },
      primaryOutline: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-primary',
        iconColor:
          'text-primary group-disabled:text-surface-400 group-hover:text-surface-100',
        hover: 'hover:bg-primary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-primary/70'
      },
      secondary: {
        backgroundColor: 'bg-secondary outline-none',
        borderColor: 'border-secondary',
        iconColor: 'text-surface-100 group-disabled:text-surface-400',
        hover: 'hover:bg-secondary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-secondary/70'
      },
      secondaryOutline: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-secondary',
        iconColor:
          'text-secondary group-disabled:text-surface-400 group-hover:text-surface-100',
        hover: 'hover:bg-secondary/70',
        active: '',
        disabled: 'disabled:bg-surface-300',
        focus: 'focus:bg-secondary/70'
      },
      tertiary: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiaryOutline: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-none',
        iconColor:
          'text-danger group-disabled:text-surface-400 group-data-[loading=true]:text-danger',
        hover: 'hover:bg-danger-100/10',
        active: 'active:bg-surface-600',
        disabled: '',
        focus: 'focus:bg-danger/10'
      },
      dangerOutline: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      successOutline: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      infoOutline: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warningOutline: {
        backgroundColor: '',
        borderColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      ghost: {
        backgroundColor: 'bg-none outline-none',
        borderColor: 'border-none',
        iconColor:
          'text-primary dark:text-primary-300 group-disabled:text-surface-400 group-data-[loading=true]:text-primary dark:group-data-[loading=true]:text-primary',
        hover: 'hover:bg-primary-100/10',
        active: 'active:bg-surface-600',
        disabled: '',
        focus: 'focus:bg-primary/10 dark:focus:bg-primary-300/10'
      }
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: 'rounded-bl-lg',
      borderBottomRightRadius: 'rounded-br-lg'
    }
  },
  link: {
    size: {
      small: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: 'text-base',
          weight: 'font-regular',
          font: ''
        },
        iconSize: 'text-base',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: 'text-base',
          weight: 'font-regular',
          font: ''
        },
        iconSize: 'text-base',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      large: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: 'text-base',
          weight: 'font-semibold',
          font: ''
        },
        iconSize: 'text-base',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      }
    },
    variant: {
      underline: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-primary group-hover/link:text-primary-100',
        textDecoration:
          'underline decoration-primary group-hover/link:decoration-primary-100 group-focus:decoration-primary-100',
        iconColor:
          'text-primary group-hover/link:text-primary-100 group-focus:text-primary-100',
        hover: 'hover:text-primary-100',
        opacity: '',
        focus: 'focus:text-primary-100',
        active: '',
        disabled: ''
      },
      withoutUnderline: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-primary group-hover/link:text-primary-100',
        textDecoration: '',
        iconColor:
          'text-primary group-hover/link:text-primary-100 group-focus:text-primary-100',
        hover: 'hover:text-primary-100',
        opacity: '',
        focus: 'focus:text-primary-100',
        active: '',
        disabled: ''
      }
    },
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: 'rounded-bl-lg',
      borderBottomRightRadius: 'rounded-br-lg'
    }
  },
  input: {
    size: {
      small: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        withIconPadding: {
          top: 'pt-4',
          left: 'pl-9',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: '',
        spacingShowPassord: 'pr-10'
      },
      medium: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        withIconPadding: {
          top: 'pt-4',
          left: 'pl-9',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: '',
        spacingShowPassord: 'pr-10'
      },
      large: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-sm',
        withIconPadding: {
          top: 'pt-4',
          left: 'pl-9',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: '',
        spacingShowPassord: 'pr-10'
      }
    },
    apperance: {
      backgroundColor: 'bg-surface-100',
      borderColor: 'border-primary',
      hover: '',
      focus: 'focus:border-secondary',
      active: '',
      error: 'data-[error=true]:border-danger',
      disabled:
        'disabled:border-surface-500 disabled:bg-surface-300 disabled:text-surface-500',
      placeholder:
        'placeholder:text-surface-500 placeholder:font-medium placeholder:text-sm',
      iconColor: 'text-tertiary',
      textColor: 'text-tertiary font-medium',
      outline: 'outline-none',
      readOnly:
        'read-only:border-surface-500 read-only:bg-surface-300 read-only:text-surface-500'
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-full',
      borderTopRightRadius: 'rounded-tr-full',
      borderBottomLeftRadius: 'rounded-bl-full',
      borderBottomRightRadius: 'rounded-br-full'
    }
  },
  textArea: {
    size: {
      padding: {
        top: 'pt-4',
        left: 'pl-6',
        right: 'pr-6',
        bottom: 'pb-4'
      },
      text: {
        size: 'text-sm',
        weight: 'font-medium',
        font: ''
      },
      minWidth: '',
      width: 'w-full',
      maxWidth: '',
      gap: '',
      minHeight: 'h-[5.125rem]',
      height: 'h-auto',
      maxHeight: ''
    },
    apperance: {
      backgroundColor: 'bg-surface-100',
      borderColor: 'border-primary',
      hover: '',
      focus: 'focus:border-secondary',
      active: '',
      error: 'data-[error=true]:border-danger',
      disabled:
        'disabled:border-surface-500 disabled:bg-surface-300 disabled:text-surface-500',
      placeholder:
        'placeholder:text-surface-500 placeholder:font-medium placeholder:text-sm',
      iconColor: 'text-tertiary',
      textColor: 'text-tertiary font-medium',
      outline: 'outline-none',
      readOnly:
        'read-only:border-surface-500 read-only:bg-surface-300 read-only:text-surface-500'
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-2xl',
      borderTopRightRadius: 'rounded-tr-2xl',
      borderBottomLeftRadius: 'rounded-bl-2xl',
      borderBottomRightRadius: 'rounded-br-2xl'
    }
  },
  label: {
    textColor: 'text-surface-800 dark:text-surface-100',
    textSize: 'text-base',
    textWeight: 'font-regular',
    active: '',
    focus: '',
    hover: '',
    disabled: '',
    error: '',
    gap: 'gap-2',
    required: {
      textColor: 'text-primary dark:text-primary-300',
      textSize: 'text-base',
      textWeight: 'font-regular',
      active: '',
      focus: '',
      hover: '',
      disabled: '',
      error: ''
    }
  },
  fieldErrorMessage: {
    textColor: 'text-danger',
    textSize: 'text-base',
    textWeight: 'font-medium',
    margin: {
      bottom: '',
      left: '',
      right: '',
      top: '!mt-2'
    }
  },
  card: {
    appearance: {
      active: '',
      backgroundColor: 'bg-surface-100 dark:bg-surface-700',
      borderColor: 'border-surface-150 dark:border-surface-500',
      disabled: '',
      focus: '',
      hover: ''
    },
    size: {
      small: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: '',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: '',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      large: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: '',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      },
      full: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: '',
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: ''
      }
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-[0.875rem]',
      borderTopRightRadius: 'rounded-tr-[0.875rem]',
      borderBottomLeftRadius: 'rounded-bl-[0.875rem]',
      borderBottomRightRadius: 'rounded-br-[0.875rem]'
    }
  },
  cardHeader: {
    padding: {
      bottom: 'pb-4',
      left: 'pl-4',
      right: 'pr-4',
      top: 'pt-4'
    },
    width: 'w-full',
    variant: {
      primary: {
        backgroundColor: 'bg-primary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      secondary: {
        backgroundColor: 'bg-secondary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiary: {
        backgroundColor: 'bg-tertiary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: 'bg-danger',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: 'bg-warning',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: 'bg-success',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: 'bg-info',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      none: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      }
    },
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  cardContent: {
    padding: {
      bottom: 'pb-3',
      left: 'pl-5',
      right: 'pr-5',
      top: 'pt-4'
    },
    width: 'w-full',
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  cardFooter: {
    padding: {
      bottom: '',
      left: '',
      right: '',
      top: ''
    },
    width: 'w-full',
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  select: {
    size: {
      small: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'size-5',
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'size-5',
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: ''
      },
      large: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-sm',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'size-5',
        minWidth: '',
        width: 'w-full',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: '',
        height: 'h-[2.813rem]',
        maxHeight: ''
      }
    },
    apperance: {
      backgroundColor: 'bg-surface-100 dark:border',
      borderColor: 'border-primary',
      hover: '',
      focus: 'focus:border-secondary',
      active: '',
      error: 'data-[error=true]:border-danger',
      disabled:
        'disabled:border-surface-500 disabled:bg-surface-300 disabled:text-surface-500',
      placeholder:
        'placeholder:text-surface-500 placeholder:font-medium placeholder:text-sm',
      iconColor: 'text-tertiary',
      textColor: 'text-tertiary font-medium',
      outline: 'outline-none',
      readOnly:
        'read-only:border-surface-500 read-only:bg-surface-300 read-only:text-surface-500'
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-full',
      borderTopRightRadius: 'rounded-tr-full',
      borderBottomLeftRadius: 'rounded-bl-full',
      borderBottomRightRadius: 'rounded-br-full'
    }
  },
  option: {
    size: {
      small: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-xs',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-xs',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: 'min-h-[3.25rem]',
        height: 'h-[3.25rem]',
        maxHeight: 'max-h-[3.25rem]'
      },
      medium: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-xs',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-xs',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: 'min-h-[3.25rem]',
        height: 'h-[3.25rem]',
        maxHeight: 'max-h-[3.25rem]'
      },
      large: {
        padding: {
          top: 'pt-4',
          left: 'pl-6',
          right: 'pr-6',
          bottom: 'pb-4'
        },
        text: {
          size: 'text-xs',
          weight: 'font-medium',
          font: ''
        },
        iconSize: 'text-xs',
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: 'min-h-[3.25rem]',
        height: 'h-[3.25rem]',
        maxHeight: 'max-h-[3.25rem]'
      }
    },
    apperance: {
      backgroundColor: 'bg-surface-100',
      borderColor: 'border-surface-500',
      hover: 'hover:bg-surface-300',
      focus: '',
      active: '',
      disabled: '',
      iconColor: '',
      textColor: 'text-surface-500'
    },
    shape: {
      borderWidth: 'border-b',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  wrapperOption: {
    size: {
      small: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: 'max-h-96'
      },
      medium: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: 'max-h-96'
      },
      large: {
        padding: {
          top: '',
          left: '',
          right: '',
          bottom: ''
        },
        minWidth: '',
        width: '',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: '',
        maxHeight: 'max-h-96'
      }
    },
    apperance: {
      backgroundColor: 'bg-surface-100',
      borderColor: 'border-primary'
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: 'rounded-bl-lg',
      borderBottomRightRadius: 'rounded-br-lg'
    }
  },
  toggle: {
    size: {
      small: {
        width: 'w-[2.91119rem]',
        height: 'h-6',
        dot: {
          width: 'w-5 left-0.5 peer-checked:left-[0.300rem]',
          height: 'h-5'
        },
        icon: {
          width: 'w-5',
          heigth: 'h-5'
        }
      },
      medium: {
        width: 'w-[4.5rem] left-0.5 peer-checked:left-[0.375rem]',
        height: 'h-9',
        dot: {
          width: 'w-8',
          height: 'h-8'
        },
        icon: {
          width: 'w-6',
          heigth: 'h-6'
        }
      },
      large: {
        width: 'w-[4.5rem] left-0.5 peer-checked:left-[0.375rem]',
        height: 'h-9',
        dot: {
          width: 'w-8',
          height: 'h-8'
        },
        icon: {
          width: 'w-6',
          heigth: 'h-6'
        }
      }
    },
    appearance: {
      backgroundColor: 'bg-surface-200 peer-checked:bg-primary',
      borderColor: 'border-surface-200',
      textColor: '',
      iconColor: 'text-surface-700',
      hover: '',
      active: '',
      disabled: 'peer-disabled:bg-surface-200',
      focus: ''
    },
    dotAppearance: {
      backgroundColor: 'bg-surface-100 peer-checked:bg-surface-100',
      borderColor: '',
      textColor: '',
      iconColor: '',
      hover: '',
      active: '',
      disabled: 'peer-disabled:bg-surface-100',
      focus: ''
    },
    shape: {
      borderRadius: 'rounded-full',
      border: ''
    },
    dotShape: {
      borderRadius: 'rounded-full',
      border: ''
    }
  },
  typography: {
    type: {
      'heading-1': {
        size: 'text-[4rem]',
        font: '',
        weight: 'font-semibold'
      },
      'heading-2': {
        size: 'text-5xl',
        font: '',
        weight: 'font-semibold'
      },
      'heading-3': {
        size: 'text-[2rem]',
        font: '',
        weight: 'font-semibold'
      },
      'heading-4': {
        size: 'text-2xl',
        font: '',
        weight: 'font-semibold'
      },
      'heading-5': {
        size: 'text-xl',
        font: '',
        weight: 'font-semibold'
      },
      subtitle: {
        size: 'text-xl',
        font: '',
        weight: 'font-semibold'
      },
      paragraph: {
        size: 'text-sm',
        font: '',
        weight: ''
      },
      body: {
        size: 'text-sm',
        font: '',
        weight: ''
      },
      fields: {
        size: 'text-sm',
        font: '',
        weight: 'font-medium'
      },
      button: {
        size: 'text-sm',
        font: '',
        weight: 'font-medium'
      },
      label: {
        size: 'text-base',
        font: '',
        weight: 'font-normal'
      }
    },
    variant: {
      primary: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-primary dark:text-primary-100',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      secondary: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-secondary',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiary: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-tertiary dark:text-surface-100',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-danger',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-warning',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-success',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      none: {
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: '',
        borderColor: '',
        textColor: 'text-surface-500 dark:text-surface-400',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      }
    }
  },
  chip: {
    size: {
      small: {
        padding: {
          top: '',
          left: 'pl-2',
          right: 'pr-2',
          bottom: ''
        },
        text: {
          size: 'text-sm',
          weight: '',
          font: ''
        },
        iconSize: 'ml-2 mr-2',
        minWidth: '',
        width: 'w-[10.375rem]',
        maxWidth: '',
        gap: '',
        minHeight: '',
        height: 'h-[2.375rem]',
        maxHeight: ''
      },
      medium: {
        padding: {
          top: '',
          left: 'pl-2',
          right: 'pr-2',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: 'ml-2 mr-2',
        minWidth: '',
        width: 'w-[14.75rem]',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: '',
        height: 'h-[2.375rem]',
        maxHeight: ''
      },
      large: {
        padding: {
          top: '',
          left: 'pl-2',
          right: 'pr-2',
          bottom: ''
        },
        text: {
          size: '',
          weight: '',
          font: ''
        },
        iconSize: 'ml-2 mr-2',
        minWidth: '',
        width: 'w-[17rem]',
        maxWidth: '',
        gap: 'gap-2',
        minHeight: '',
        height: 'h-[2.375rem]',
        maxHeight: ''
      }
    },
    variant: {
      primary: {
        backgroundColor: 'bg-primary-100',
        borderColor: 'border-primary-100',
        textColor: 'text-primary dark:text-primary',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      secondary: {
        backgroundColor: 'bg-secondary/20',
        borderColor: 'border-secondary/20',
        textColor: 'text-secondary dark:text-secondary',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiary: {
        backgroundColor: 'bg-tertiary/20',
        borderColor: 'border-tertiary/20',
        textColor: 'text-tertiary dark:text-tertiary',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: 'bg-danger-100',
        borderColor: 'border-danger-100',
        textColor: 'text-danger dark:text-danger',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: 'bg-warning-100',
        borderColor: 'border-warning-100',
        textColor: 'text-warning dark:text-warning',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: 'bg-success-100',
        borderColor: 'border-success-100',
        textColor: 'text-success dark:text-success',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      none: {
        backgroundColor: 'bg-none',
        borderColor: 'border-none',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: 'bg-info-100',
        borderColor: 'bg-info-100',
        textColor: 'text-info dark:text-info',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      }
    },
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-full',
      borderBottomLeftRadius: 'rounded-bl-full',
      borderTopRightRadius: 'rounded-tr-full',
      borderBottomRightRadius: 'rounded-br-full'
    }
  },
  table: {
    appearance: {
      backgroundColor: 'bg-surface-100 dark:bg-surface-700',
      borderColor: 'border-surface-150 dark:border-surface-500'
    },
    shape: {
      borderWidth: 'border',
      borderStyle: '',
      borderBottomLeftRadius: 'rounded-bl-2xl',
      borderBottomRightRadius: 'rounded-br-2xl',
      borderTopLeftRadius: 'rounded-tl-2xl',
      borderTopRightRadius: 'rounded-tr-2xl'
    },
    size: {
      padding: {
        bottom: 'pb-6',
        left: 'pl-6',
        right: 'pr-6',
        top: 'pt-7'
      },
      gap: '',
      height: '',
      maxHeight: '',
      minHeight: 'min-h-96',
      width: 'w-full',
      maxWidth: '',
      minWidth: ''
    }
  },
  tableHeader: {
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderStyle: '',
      borderWidth: 'border-b'
    },
    size: {
      padding: {
        bottom: '',
        left: '',
        right: '',
        top: ''
      },
      gap: '',
      iconSize: 'text-xl',
      height: '',
      maxHeight: '',
      minHeight: '',
      width: 'w-full',
      maxWidth: '',
      minWidth: '',
      text: {
        size: 'text-xl mb-6',
        weight: 'font-semibold',
        font: ''
      }
    },
    variants: {
      danger: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      info: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      none: {
        active: '',
        backgroundColor: '',
        borderColor: 'border-secondary-200 dark:border-surface-100',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: 'text-tertiary dark:text-surface-100',
        textColor: 'text-tertiary dark:text-surface-100'
      },
      primary: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      secondary: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      success: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      tertiary: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      },
      warning: {
        active: '',
        backgroundColor: '',
        borderColor: '',
        disabled: '',
        focus: '',
        hover: '',
        iconColor: '',
        textColor: ''
      }
    }
  },
  tableColumn: {
    size: {
      padding: {
        bottom: 'pb-4',
        left: '',
        right: '',
        top: ''
      },
      gap: 'gap-3',
      height: '',
      maxHeight: '',
      minHeight: '',
      width: '',
      maxWidth: '',
      minWidth: 'min-w-28',
      iconSize: 'w-6 h-6',
      text: {
        size: 'text-base',
        weight: 'font-medium',
        font: ''
      }
    },
    appearance: {
      backgroundColor: 'rounded data-[with-sort=true]:cursor-pointer',
      active: '',
      borderColor: '',
      disabled: '',
      focus: '',
      hover: '',
      iconColor:
        'rounded transition-colors fill-tertiary dark:fill-surface-200 hover:dark:bg-surface-500 hover:bg-surface-150',
      textColor: 'text-secondary-200 dark:text-surface-100'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderWidth: ''
    }
  },
  tableRow: {
    size: {
      padding: {
        bottom: 'pb-5',
        left: 'pl-1',
        right: 'pr-1',
        top: 'pt-5'
      },
      gap: '',
      height: '',
      maxHeight: '',
      minHeight: '',
      width: '',
      maxWidth: '',
      minWidth: 'min-w-28',
      iconSize: '',
      text: {
        size: 'text-sm',
        weight: 'font-medium',
        font: ''
      }
    },
    appearance: {
      backgroundColor: '',
      active: '',
      borderColor: 'border-surface-150 dark:border-surface-500',
      disabled: '',
      focus: '',
      hover: '',
      iconColor: '',
      textColor: 'text-tertiary dark:text-surface-100'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderWidth: 'border-b-[0.031rem]'
    }
  },
  tableFooter: {
    size: {
      padding: {
        bottom: '',
        left: '',
        right: 'pt-5',
        top: ''
      },
      gap: 'gap-6',
      height: '',
      maxHeight: '',
      minHeight: '',
      width: '',
      maxWidth: '',
      minWidth: '',
      iconSize: '',
      text: {
        size: 'text-sm',
        weight: 'font-normal',
        font: ''
      }
    },
    appearance: {
      backgroundColor: '',
      active: '',
      borderColor: '',
      disabled: '',
      focus: '',
      hover: '',
      iconColor: '',
      textColor: 'text-surface-800 dark:text-surface-100',
      align: 'justify-end',
      nextButton:
        'size-5 hover:dark:bg-surface-500 hover:bg-surface-150 rounded-full flex items-center justify-center',
      nextIcon: 'stroke-surface-800 w-3 h-2 dark:stroke-surface-100',
      previousButton:
        'size-5 hover:dark:bg-surface-500 hover:bg-surface-150 rounded-full flex items-center justify-center',
      previousIcon: 'stroke-surface-800 w-3 h-2 dark:stroke-surface-100'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderWidth: ''
    }
  },
  tableCheckbox: {
    size: {
      gap: '',
      height: 'h-6',
      maxHeight: '',
      minHeight: '',
      width: 'w-6',
      minWidth: '',
      maxWidth: '',
      iconSize: '',
      padding: {
        bottom: '',
        left: '',
        right: '',
        top: ''
      }
    },
    appearance: {
      active: 'active:bg-primary',
      backgroundColor: 'aria-checked:bg-primary',
      borderColor: 'border-surface-400 aria-checked:border-primary',
      disabled: 'aria-disabled:border-surface-500',
      focus: '',
      hover: '',
      iconColor: 'invisible group-aria-checked:visible text-surface-100',
      textColor: ''
    },
    shape: {
      borderBottomLeftRadius: 'rounded-bl-full',
      borderBottomRightRadius: 'rounded-br-full',
      borderTopLeftRadius: 'rounded-tl-full',
      borderTopRightRadius: 'rounded-tr-full',
      borderStyle: '',
      borderWidth: 'border'
    }
  },
  tablePagination: {
    size: {
      gap: 'gap-4',
      height: '',
      maxHeight: '',
      minHeight: '',
      width: '',
      maxWidth: '',
      minWidth: '',
      iconSize: '',
      text: {
        size: 'text-sm',
        weight: 'font-medium',
        font: ''
      },
      padding: {
        bottom: '',
        left: '',
        right: '',
        top: ''
      }
    },
    appearance: {
      active: 'aria-checked:text-secondary dark:aria-checked:text-primary',
      backgroundColor: '',
      borderColor: '',
      disabled: '',
      focus: '',
      hover: 'hover:text-secondary',
      iconColor: '',
      textColor: 'text-primary dark:text-surface-100'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderStyle: '',
      borderWidth: ''
    }
  },
  inputOtp: {
    containerShape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderBottomLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomRightRadius: '',
      height: 'sm:h-20 h-[3rem]',
      width: 'sm:w-[29rem] w-[19.875rem]',
      gap: 'gap-4',
      backgroundColor: '',
      padding: {
        bottom: '',
        left: '',
        right: '',
        top: ''
      },
      marging: {
        marginBottom: 'mb-6',
        marginTop: 'mt-6',
        marginLeft: '',
        marginRight: ''
      }
    },
    inputShape: {
      inputBorderWidth: '',
      inputBorderStyle: '',
      inputBorderTopLeftRadius: 'rounded-tl-2xl sm:rounded-tl-[1.176rem]',
      inputBorderBottomLeftRadius: 'rounded-bl-2xl sm:rounded-bl-[1.176rem]',
      inputBorderTopRightRadius: 'rounded-tr-2xl sm:rounded-tr-[1.176rem]',
      inputBorderBottomRightRadius: 'rounded-br-2xl sm:rounded-br-[1.176rem]',
      inputpadding: {
        bottom: '',
        left: 'sm:pl-5 pl-3',
        right: 'sm:pr-0 pr-0',
        top: ''
      },
      inputBackgroundColor: '',
      inputWidth: 'sm:w-16 w-10',
      inputHeight: 'sm:h-20 h-[3.125rem]',
      inputText: {
        size: 'sm:text-4xl text-2xl',
        weight: 'font-bold',
        textColor: 'text-secondary',
        font: ''
      }
    }
  },
  sidebar: {
    appearance: {
      backgroundColor: 'bg-surface dark:bg-surface-700',
      borderColor: '',
      active: '',
      disabled: '',
      focus: '',
      hover: '',
      iconColor: 'text-secondary dark:text-surface-100',
      textColor:
        'text-secondary-200 dark:text-surface-100 hover:text-primary dark:hover:text-primary-300'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderWidth: ''
    },
    size: {
      gap: 'gap-5',
      height: 'h-screen',
      minHeight: '',
      maxHeight: '',
      width: 'w-0 aria-expanded:w-screen lg:aria-expanded:w-[16.25rem]',
      widthExplicitRem: 16.25,
      minWidth:
        'min-w-0 aria-expanded:min-w-screen lg:aria-expanded:min-w-[16.25rem]',
      maxWidth: '',
      iconSize: 'text-2xl',
      padding: {
        bottom: '',
        left: 'aria-expanded:pl-6',
        right: 'aria-expanded:pr-6',
        top: ''
      },
      text: {
        font: '',
        size: 'text-base',
        weight: 'font-medium'
      }
    }
  },
  navItem: {
    appearance: {
      active: '',
      backgroundColor: '',
      borderColor: '',
      disabled: '',
      focus: '',
      hover: 'hover:text-primary dark:hover:text-primary-300',
      iconColor:
        'text-tertiary-100 dark:text-surface-100 aria-selected:text-primary aria-selected:dark:text-primary-300 group-hover:text-primary dark:group-hover:text-primary-300',
      textColor:
        'text-tertiary-100 dark:text-surface-100 aria-seleced:text-primary dark:aria-selected:text-primary-300'
    },
    shape: {
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderStyle: '',
      borderWidth: ''
    },
    size: {
      gap: 'gap-2',
      height: 3.5,
      maxHeight: 5,
      fontSizeRem: 1,
      iconSize: 'min-w-6 w-6 min-h-6 h-6',
      maxWidth: '',
      minWidth: '',
      width: 'w-full',
      padding: {
        bottom: 'pb-4',
        left: '',
        right: 'pr-4',
        top: 'pt-4'
      },
      text: {
        font: '',
        size: 'text-base',
        weight: 'font-normal'
      }
    }
  },
  stepperContainer: {
    containerHeight: 'h-[3.75rem] sm:h-[4.625rem]',
    containerWidth: '',
    containerOverflow: 'overflow-x-hidden',
    containerBackgroundColor: 'bg-surface dark:bg-surface-700',
    containerShape: {
      borderWidth: '',
      borderStyle: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderTopLeftRadius: ''
    }
  },
  stepperSteps: {
    width: 'w-[8.75rem] sm:w-[12.75rem]',
    height: 'h-full',
    textColor: 'text-surface-800',
    activeStyle: 'bg-surface-100',
    disabledStyle: 'bg-surface-500 text-surface-100',
    padding: {
      paddingTop: 'pt-2',
      paddingBottom: 'pb-2',
      paddingLeft: 'pl-2',
      paddingRight: 'pr-2'
    },
    margin: {
      marginBottom: '',
      margingTop: '',
      marginLeft: '',
      marginRight: 'mr-0.5'
    },
    evenStepStyle: {
      backgroundColor: 'bg-primary',
      hover: 'hover:bg-surface-100 hover:text-surface-800',
      textColor: 'text-surface-100',
      styles: 'cursor-pointer'
    },
    oddStepStyle: {
      backgroundColor: 'bg-secondary-100',
      hover: 'hover:bg-surface-100 hover:text-surface-800',
      textColor: 'text-surface-100',
      styles: 'cursor-pointer'
    },
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopRightRadius: 'rounded-tr-3xl',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: '',
      borderTopLeftRadius: 'rounded-tl-3xl'
    }
  },
  modal: {
    shape: {
      borderWidth: 'border border-surface-500',
      borderStyle: 'shadow-lg',
      borderTopLeftRadius: 'rounded-tl-3xl',
      borderTopRightRadius: 'rounded-tr-3xl',
      borderBottomLeftRadius: 'rounded-bl-3xl',
      borderBottomRightRadius: 'rounded-br-3xl'
    },
    padding: {
      bottom: 'pb-8',
      top: 'pt-8',
      left: 'pl-6',
      right: 'pr-6'
    },
    backgroundColor: 'bg-surface-100 dark:bg-surface-700'
  },
  modalOverlay: {
    backgroundColor: 'bg-surface-600/85 backdrop-blur-sm',
    padding: {
      bottom: '',
      left: '',
      right: '',
      top: ''
    },
    position: 'items-center justify-center'
  },
  modalHeader: {
    padding: {
      bottom: '',
      left: 'pl-4',
      right: 'pr-4',
      top: 'pt-4'
    },
    width: 'w-full',
    variant: {
      primary: {
        backgroundColor: 'bg-primary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      secondary: {
        backgroundColor: 'bg-secondary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      tertiary: {
        backgroundColor: 'bg-tertiary',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      danger: {
        backgroundColor: 'bg-danger',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      warning: {
        backgroundColor: 'bg-warning',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      success: {
        backgroundColor: 'bg-success',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      info: {
        backgroundColor: 'bg-info',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      },
      none: {
        backgroundColor: 'bg-none',
        borderColor: '',
        textColor: '',
        iconColor: '',
        hover: '',
        active: '',
        disabled: '',
        focus: ''
      }
    },
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: 'rounded-tl-lg',
      borderTopRightRadius: 'rounded-tr-lg',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  modalContent: {
    padding: {
      bottom: 'pb-8',
      left: 'pl-4',
      right: 'pr-4',
      top: 'pt-8'
    },
    width: 'w-full',
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  modalFooter: {
    padding: {
      bottom: 'pb-4',
      left: 'pl-4',
      right: 'pr-4',
      top: ''
    },
    width: 'w-full',
    shape: {
      borderWidth: '',
      borderStyle: '',
      borderTopLeftRadius: '',
      borderTopRightRadius: '',
      borderBottomLeftRadius: '',
      borderBottomRightRadius: ''
    }
  },
  logoutOverlay: {
    backgroundColor: 'bg-surface-100/90 dark:bg-surface-700/85',
    blur: 'backdrop-blur-sm'
  },
  datePicker: {
    backgroundColor: 'bg-surface-100 dark:bg-surface-700',
    border: 'rounded-md border border-surface-400',
    cursor: 'cursor-pointer',
    textColor: 'dark:text-surface-800',
    dropdown:
      'appearance-none absolute z-[2] top-0 bottom-0 left-0 w-full m-0 p-0 cursor-pointer opacity-0 border-none bg-transparent font-inherit text-inherit leading-inherit',
    button: {
      textColor: 'hover:text-surface-100',
      backgroundColor: 'hover:bg-secondary dark:hover:bg-primary'
    },
    daySelected: {
      textColor: 'hover:text-surface-100 focus:text-surface-100',
      backgroundColor:
        'hover:bg-secondary focus:bg-secondary dark:hover:bg-primary dark:focus:bg-primary'
    }
  }
};

export const SELECT_HEIGHT_SIZE_PX = 45;
export const SPACING_WRAPPER_OPTION = 24;
export const OPTION_HEIGHT_SIZE_PX = 52;
export const WRAPPER_OPTION_HEIGHT_SIZE_PX = 384;
