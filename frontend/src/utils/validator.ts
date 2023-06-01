export const validateInputLength = (input: string, min: number, max: number) => {
  const length = input.length;
  if (length < min || length > max) return false;

  return true;
};
