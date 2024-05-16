export function parseFormattedDate(dateStr: string): Date {
  // Проверяем, что строка имеет правильную длину
  if (dateStr.length !== 8) {
    throw new Error("Invalid date string format");
  }

  // Извлекаем компоненты даты из строки
  const year = parseInt(dateStr.slice(0, 4), 10);
  const month = parseInt(dateStr.slice(4, 6), 10) - 1; // Месяцы в Date начинаются с 0
  const day = parseInt(dateStr.slice(6, 8), 10);

  // Создаем объект Date
  const date = new Date(year, month, day);

  // Проверяем, что дата валидна
  if (isNaN(date.getTime())) {
    throw new TypeError("Invalid date");
  }

  return date;
}
