import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import FunctionSelector from './components/FunctionSelector';
import ResultDisplay from './components/ResultDisplay';
import SettingsModal from './components/SettingsModal';
import DesignIdeaGenerator from './components/DesignIdeaGenerator';
import DesignVariation from './components/DesignVariation';
import AIModelWearing from './components/AIModelWearing';
import ImageRetouch from './components/ImageRetouch';
import ColorCustomize from './components/ColorCustomize';
import BackgroundChange from './components/BackgroundChange';
import DesignInstruction from './components/DesignInstruction';
import BackgroundSelection from './components/BackgroundSelection';
import AIModelSelection from './components/AIModelSelection';
import { WEBHOOKS } from './config/webhooks';

const FUNCTION_DEFINITIONS = [
  {
    id: 'designIdea',
    name: 'デザインアイデア創出',
    description: 'テキストからAIが方向性を提案',
    icon: '✨',
    component: DesignIdeaGenerator,
  },
  {
    id: 'designVariation',
    name: 'デザインバリエーション',
    description: '変更要素を指定して展開',
    icon: '🎨',
    component: DesignVariation,
  },
  {
    id: 'aiModelWearing',
    name: 'AIモデル着用',
    description: 'モデルや背景を選んで生成',
    icon: '🧍',
    component: AIModelWearing,
  },
  {
    id: 'imageRetouch',
    name: '画像レタッチ',
    description: '汚れ消し・質感調整など',
    icon: '🛠️',
    component: ImageRetouch,
  },
  {
    id: 'colorCustomize',
    name: 'カラーカスタマイズ',
    description: 'カラー変更や差し替え',
    icon: '🎯',
    component: ColorCustomize,
  },
  {
    id: 'backgroundChange',
    name: '背景変更',
    description: '背景プリセット切り替え',
    icon: '🌄',
    component: BackgroundChange,
  },
  {
    id: 'designInstruction',
    name: 'デザイン指示統合',
    description: '自由テキストと画像を送信',
    icon: '📝',
    component: DesignInstruction,
  },
  {
    id: 'backgroundSelection',
    name: '背景画像選択',
    description: '背景素材を指定して合成',
    icon: '🖼️',
    component: BackgroundSelection,
  },
  {
    id: 'aiModelSelection',
    name: 'AIモデル選択',
    description: '着用モデルを選んで生成',
    icon: '🤖',
    component: AIModelSelection,
  },
];

const storageKey = 'nanobananaBaseUrl';

const App = () => {
  const [selectedFunction, setSelectedFunction] = useState(FUNCTION_DEFINITIONS[0].id);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState(null);
  const [source, setSource] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(storageKey) || WEBHOOKS.BASE_URL;
    }
    return WEBHOOKS.BASE_URL;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && baseUrl) {
      localStorage.setItem(storageKey, baseUrl);
    }
  }, [baseUrl]);

  useEffect(() => {
    setResult(null);
    setError(null);
    setDuration(null);
    setSource(null);
  }, [selectedFunction]);

  const handleResult = ({ result: nextResult, error: nextError, duration: nextDuration, source: nextSource }) => {
    setResult(nextResult);
    setError(nextError);
    setDuration(nextDuration);
    setSource(nextSource);
  };

  const CurrentComponent = useMemo(
    () => FUNCTION_DEFINITIONS.find((fn) => fn.id === selectedFunction)?.component,
    [selectedFunction],
  );

  return (
    <div className="min-h-screen bg-warm-cream pb-96">
      {globalLoading && (
        <div className="progress-indicator fixed inset-x-0 top-0 z-50">
          <span className="sr-only">処理中</span>
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-20 py-40 md:px-32 lg:px-48">
        <Header onOpenSettings={() => setIsSettingsOpen(true)} baseUrl={baseUrl} />

        <div className="grid gap-32 lg:grid-cols-[minmax(300px,1fr)_2fr]">
          <FunctionSelector
            functions={FUNCTION_DEFINITIONS}
            selectedFunction={selectedFunction}
            onSelect={setSelectedFunction}
          />

          <div className="glass-panel lg:col-span-1 p-32">
            {CurrentComponent ? (
              <CurrentComponent
                onResult={handleResult}
                baseUrl={baseUrl}
                setGlobalLoading={setGlobalLoading}
              />
            ) : (
              <div className="flex items-center gap-12 text-medium-gray">
                <span className="text-2xl" role="img" aria-hidden="true">⚠️</span>
                <p className="text-sm leading-[22px]">選択したワークフローが見つかりません。</p>
              </div>
            )}
          </div>
        </div>

        <ResultDisplay
          result={result}
          error={error}
          duration={duration}
          isLoading={globalLoading}
          source={source}
        />
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={setBaseUrl}
        baseUrl={baseUrl}
      />
    </div>
  );
};

export default App;
