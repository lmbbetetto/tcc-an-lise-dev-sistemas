export function stringToBase64(value: string): string {
  return Buffer.from(value).toString('base64');
}

export function base64ToString(value: string): string {
  return Buffer.from(value.replace(/\%3D/g, '='), 'base64').toString('utf-8');
}

export function toggleItemFromList<T>(
  list: Array<T>,
  item: T,
  compareFn: (listItem: T) => boolean = (listItem: T): boolean =>
    listItem !== item
): Array<T> {
  const removed = list.filter(compareFn);

  if (removed.length !== list.length) {
    return removed;
  }

  return [...list, item];
}

export function formatDateInput(value: string, format: string): string {
  const dateStr = onlyNumber(value).slice(0, 8);
  let formattedDate = '';

  switch (format) {
    case 'dd/MM/yyyy':
      if (value.length == 5 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{2})(\d{1})/, '$1/$2');
      else if (dateStr.length >= 4)
        formattedDate = dateStr.replace(/(\d{2})(\d{2})/, '$1/$2/');
      else if (value.length == 2 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{2})/, '$1');
      else if (dateStr.length >= 2)
        formattedDate = dateStr.replace(/(\d{2})/, '$1/');
      else formattedDate = dateStr;
      break;
    case 'yyyy/MM/dd':
      if (value.length == 7 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{4})(\d{2})/, '$1/$2');
      else if (dateStr.length >= 6)
        formattedDate = dateStr.replace(/(\d{4})(\d{2})/, '$1/$2/');
      else if (value.length == 4 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{4})/, '$1');
      else if (dateStr.length >= 4)
        formattedDate = dateStr.replace(/(\d{4})/, '$1/');
      else formattedDate = dateStr;
      break;
    case 'MM/dd/yyyy':
      if (value.length == 5 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{2})(\d{1})/, '$1/$2');
      else if (dateStr.length >= 4)
        formattedDate = dateStr.replace(/(\d{2})(\d{2})/, '$1/$2/');
      else if (value.length == 2 && value.charAt(value.length - 1) !== '/')
        formattedDate = dateStr.replace(/(\d{2})/, '$1');
      else if (dateStr.length >= 2)
        formattedDate = dateStr.replace(/(\d{2})/, '$1/');
      else formattedDate = dateStr;
      break;
    default:
      formattedDate = dateStr;
  }

  return formattedDate;
}

function getDigit(value: string, index: number): number {
  return parseInt(value.charAt(index), 10);
}

const DECIMAL: number = 10;

export function isValidCNPJ(value: string): boolean {
  if (!value) {
    return false;
  }
  const rawCnpj = value.replace(/\D+/g, '');

  if (rawCnpj === '') {
    return false;
  }

  if (rawCnpj.length !== 14) {
    return false;
  }

  if (
    rawCnpj === '00000000000000' ||
    rawCnpj === '11111111111111' ||
    rawCnpj === '22222222222222' ||
    rawCnpj === '33333333333333' ||
    rawCnpj === '44444444444444' ||
    rawCnpj === '55555555555555' ||
    rawCnpj === '66666666666666' ||
    rawCnpj === '77777777777777' ||
    rawCnpj === '88888888888888' ||
    rawCnpj === '99999999999999'
  )
    return false;

  let size = rawCnpj.length - 2;
  let numbers = rawCnpj.substring(0, size);
  const digits = rawCnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += getDigit(numbers, size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== getDigit(digits, 0)) {
    return false;
  }

  size = size + 1;
  numbers = rawCnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += getDigit(numbers, size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== getDigit(digits, 1)) {
    return false;
  }

  return true;
}

export function isValidCPF(value: string): boolean {
  let sum: number;
  let remain: number;

  const cpf = value.replace(/[^\d]+/g, '');

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum = sum + getDigit(cpf, i - 1) * (11 - i);
  }

  remain = (sum * 10) % 11;

  if (remain === 10 || remain === 11) {
    remain = 0;
  }

  if (remain !== parseInt(cpf.substring(9, 10), DECIMAL)) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + getDigit(cpf, i - 1) * (12 - i);
  }

  remain = (sum * 10) % 11;

  if (remain === 10 || remain === 11) {
    remain = 0;
  }

  if (remain !== parseInt(cpf.substring(10, 11), DECIMAL)) {
    return false;
  }

  return true;
}

export function onlyNumber(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatToCNPJ(value: string): string {
  value = onlyNumber(value);

  if (value.length > 14) {
    value = value.substring(0, 14);
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  } else if (value.length > 13) {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-');
  } else if (value.length > 8) {
    return value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3/');
  } else if (value.length > 5) {
    return value.replace(/(\d{2})(\d{3})/, '$1.$2.');
  } else if (value.length > 2) {
    return value.replace(/(\d{2})/, '$1.');
  } else {
    return value;
  }
}

export function formatPhoneToBrazilFormat(
  value: string,
  option: { withoutDDI?: boolean; withoutDDD?: boolean } = {}
): string {
  value = onlyNumber(value);

  if (option.withoutDDD) {
    if (value.length > 10) {
      return value
        .substring(0, 11)
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length === 10) {
      return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6 && value.length < 11) {
      return value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    } else if (value.length > 2) {
      return value.replace(/(\d{2})(\d+)/, '($1) $2');
    } else {
      return value;
    }
  }

  if (option.withoutDDI) {
    if (value.length > 8) {
      return value.substring(0, 9).replace(/(\d{5})(\d{4})/, '$1-$2');
    } else if (value.length === 8) {
      return value.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else if (value.length > 4 && value.length < 8) {
      return value.replace(/(\d{4})(\d+)/, '$1-$2');
    } else {
      return value;
    }
  }

  if (value.length > 12) {
    return value
      .substring(0, 13)
      .replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  } else if (value.length === 12) {
    return value.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 ($2) $3-$4');
  } else if (value.length > 8 && value.length < 12) {
    return value.replace(/(\d{2})(\d{2})(\d{4})(\d+)/, '+$1 ($2) $3-$4');
  } else if (value.length > 4) {
    return value.replace(/(\d{2})(\d{2})/, '+$1 ($2) ');
  } else if (value.length > 2) {
    return value.replace(/(\d{2})(\d+)/, '+$1 $2');
  } else {
    return value;
  }
}

export function formatPhoneToUSAFormat(
  value: string,
  option: { withoutDDI?: boolean; withoutDDD?: boolean } = {}
): string {
  value = onlyNumber(value);

  if (option.withoutDDD) {
    if (value.length > 9) {
      return value
        .substring(0, 10)
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
      return value.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
    } else if (value.length > 3) {
      return value.replace(/(\d{3})/, '($1) ');
    } else {
      return value;
    }
  }

  if (option.withoutDDI) {
    if (value.length > 6) {
      return value.substring(0, 7).replace(/(\d{3})(\d{4})/, '$1-$2');
    } else if (value.length > 3) {
      return value.replace(/(\d{3})/, '$1-');
    } else {
      return value;
    }
  }

  if (value.length > 10) {
    return value
      .substring(0, 11)
      .replace(/(\d)(\d{3})(\d{3})(\d{4})/, '+$1 ($2) $3-$4');
  } else if (value.length > 7) {
    return value.replace(/(\d)(\d{3})(\d{3})(\d+)/, '+$1 ($2) $3-$4');
  } else if (value.length > 4) {
    return value.replace(/(\d)(\d{3})/, '+$1 ($2) ');
  } else if (value.length > 1) {
    return value.replace(/(\d)(\d+)/, '+$1 $2');
  } else {
    return value;
  }
}

export function inputPhoneMask(
  locale: string,
  value: string,
): string {
  const mask = formatPhoneToBrazilFormat(value);
  return mask;
}

export function capitalizeFirstLetter(value: string): string {
  if (!value) {
    return '';
  }

  return value[0].toLocaleUpperCase() + value.slice(1);
}

export function formatToCurrency(
  numberStr: string | number
): string {
  const digits = onlyNumber(numberStr.toString());

  if (digits.length <= 2) {
    return digits;
  } else {
    const wholePart = digits.slice(0, -2);
    const decimalPart = digits.slice(-2);

    const formattedWholePart = wholePart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    );
    return `${formattedWholePart},${decimalPart}`;
  }
}

export function formatPercentage(percentage: string): string {
  return percentage.replace(/[^0-9.]/g, '');
}
