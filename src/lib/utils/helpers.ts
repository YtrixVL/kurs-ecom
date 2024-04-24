import type { devicetype, frequencytype, memorytype } from '@prisma/client';

export const createErrorResponse = (
  message: string,
  status: number
): Response => {
  return new Response(JSON.stringify({ success: false, message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deviceEnumValueToString = (deviceEnum: devicetype): string => {
  let devType = null;

  switch (deviceEnum) {
    case 'SMARTPHONE':
      devType = 'Смартфон';
      break;
    case 'TABLET':
      devType = 'Планшет';
      break;
    case 'WATCH':
      devType = 'Часы';
      break;
    case 'HEADPHONE':
      devType = 'Наушники';
      break;
    case 'CABLE':
      devType = 'Кабель';
      break;
    case 'CHARGER':
      devType = 'Зарядное устройство';
      break;
    case 'PLAYER':
      devType = 'Проигрыватель';
      break;
    case 'CELLPHONE':
      devType = 'Сотовый телефон';
  }

  return devType;
};

export const memoryEnumValueToString = (memoryEnum: memorytype): string => {
  let memType = null;
  switch (memoryEnum) {
    case 'TB':
      memType = 'ТБ';
      break;
    case 'GB':
      memType = 'ГБ';
      break;
    case 'MB':
      memType = 'МБ';
      break;
    case 'KB':
      memType = 'КБ';
  }

  return memType;
};

export const frequencyEnumValueToString = (
  frequencyEnum: frequencytype
): string => {
  let frequencyType = null;

  switch (frequencyEnum) {
    case 'GHz':
      frequencyType = 'ГГц';
      break;
    case 'MHz':
      frequencyType = 'МГц';
      break;
    case 'KHz':
      frequencyType = 'КГц';
      break;
    case 'Hz':
      frequencyType = 'Гц';
  }

  return frequencyType;
};

export const addSpaceInString = (inputString: string): string => {
  if (inputString.length <= 3) {
    return inputString;
  }

  const insertionPoint = inputString.length - 3;
  const partBeforeInsertion = inputString.slice(0, insertionPoint);
  const partAfterInsertion = inputString.slice(insertionPoint);

  const stringWithSpace = `${partBeforeInsertion} ${partAfterInsertion}`;

  return stringWithSpace;
};

export const handleSubmit = async (
  url: string,
  method: string,
  body: {},
  headers?: {}
) => {
  try {
    const response = await fetch(url, {
      method,
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        ...headers,
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
