export default function formatObject(obj: Record<string, any>): Record<string, string> {
  const formatted: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (
      value === '' ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return; // skip empty fields
    }

    // Format the key into "Start Date" instead of "startDate"
    const label = key
      .replace(/([A-Z])/g, ' $1') // split camelCase
      .replace(/_/g, ' ')         // replace underscores
      .replace(/\b\w/g, (l) => l.toUpperCase()); // capitalize

    let formattedValue: string;

    if (typeof value === 'boolean') {
      formattedValue = value ? 'Yes' : 'No';
    } else if (Array.isArray(value)) {
      formattedValue = value.join(', ');
    } else {
      formattedValue = String(value);
    }

    formatted[label] = formattedValue;
  });

  return formatted;
}
