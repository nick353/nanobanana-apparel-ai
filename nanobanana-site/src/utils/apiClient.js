import { WEBHOOKS } from '../config/webhooks';

export const callWebhook = async (
  endpoint,
  data,
  baseUrl = WEBHOOKS.BASE_URL,
  { timeout = 30000 } = {},
) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (!response.ok) {
      const message = `HTTPエラー: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('リクエストがタイムアウトしました（30秒以内に応答がありません）');
    }
    console.error('Webhook呼び出しエラー:', error);
    throw error;
  } finally {
    clearTimeout(timer);
  }
};
