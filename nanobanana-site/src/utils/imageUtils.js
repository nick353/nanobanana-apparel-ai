export const imageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  const maxSize = 10 * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    throw new Error('JPG、PNG、WEBP形式の画像のみアップロード可能です');
  }

  if (file.size > maxSize) {
    throw new Error('画像サイズは10MB以下にしてください');
  }

  return true;
};
