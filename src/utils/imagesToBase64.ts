export const imagesToBase64 = (files: FileList | null): string[] => {
  if (!files) return [];

  const reader = new FileReader();
  let output: string[] = [];

  for (var i = 0; i < files.length; i++) {
    reader.readAsDataURL(files[i]);
    reader.onload = () => output.push(reader.result as string);
    reader.onerror = (error) => console.error(error);
  }

  return output;
};
