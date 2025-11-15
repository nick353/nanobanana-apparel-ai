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
import WorkflowGuidePanel from './components/WorkflowGuidePanel';
import { WEBHOOKS } from './config/webhooks';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './utils/i18n';

const FUNCTION_DEFINITIONS = [
  {
    id: 'designIdea',
    icon: '✨',
    component: DesignIdeaGenerator,
    category: 'ideation',
    copy: {
      ja: {
        name: 'デザインアイデア創出',
        description: 'テキストからAIが方向性を提案',
        tips: [
          '抽象的なキーワードと具体的な要素を組み合わせるとAIが精度高く提案します。',
          '気に入った案は履歴タブからコピーして保存できます。',
        ],
      },
      en: {
        name: 'Design Ideation',
        description: 'Let AI suggest apparel directions from your text prompt.',
        tips: [
          'Blend abstract mood keywords with concrete materials or silhouettes for best results.',
          'Copy standout ideas from the history tab to reuse them later.',
        ],
      },
    },
  },
  {
    id: 'designVariation',
    icon: '🎨',
    component: DesignVariation,
    category: 'ideation',
    copy: {
      ja: {
        name: 'デザインバリエーション',
        description: '変更要素を指定して展開',
        tips: [
          '色・素材・シルエットなど変更したい要素は箇条書きで入力すると整理しやすいです。',
          '基となるアイデアのIDやキーワードも合わせて渡すと意図が伝わります。',
        ],
      },
      en: {
        name: 'Design Variations',
        description: 'Specify what to tweak and let AI branch out ideas.',
        tips: [
          'List color, fabric, and silhouette changes as bullet points to keep prompts tidy.',
          'Reference the source idea ID or keywords so the model keeps context.',
        ],
      },
    },
  },
  {
    id: 'aiModelWearing',
    icon: '🧍',
    component: AIModelWearing,
    category: 'modeling',
    copy: {
      ja: {
        name: 'AIモデル試着（クイック）',
        description: 'モデルと背景をざっくり選び素早く生成',
        tips: [
          '撮影テストやシェア用のクイックプレビューに最適です。',
          'ラフな確認用途なので細かい調整は後続の編集ステップで行うと効率的です。',
        ],
      },
      en: {
        name: 'AI Model Quick Try-on',
        description: 'Pick a vibe and backdrop to create fast previews.',
        tips: [
          'Use it for quick approvals or sharing early styling ideas.',
          'Keep it high-level and handle fine edits later in the workflow.',
        ],
      },
    },
  },
  {
    id: 'imageRetouch',
    icon: '🛠️',
    component: ImageRetouch,
    category: 'editing',
    copy: {
      ja: {
        name: '画像レタッチ',
        description: '汚れ消し・質感調整など',
        tips: [
          '気になる箇所を具体的に記述するとピンポイントで修正できます。',
        ],
      },
      en: {
        name: 'Image Retouch',
        description: 'Remove stains, tweak materials, and refine outputs.',
        tips: [
          'Describe the fix area precisely for targeted retouching.',
        ],
      },
    },
  },
  {
    id: 'colorCustomize',
    icon: '🎯',
    component: ColorCustomize,
    category: 'editing',
    copy: {
      ja: {
        name: 'カラーカスタマイズ',
        description: 'カラー変更や差し替え',
        tips: [
          '色コード（HEX）やPANTONE番号を指定するとブランドカラーに揃えやすいです。',
        ],
      },
      en: {
        name: 'Color Customize',
        description: 'Swap hues or recolor garments precisely.',
        tips: [
          'Provide HEX or PANTONE codes to align with brand palettes.',
        ],
      },
    },
  },
  {
    id: 'backgroundChange',
    icon: '🌄',
    component: BackgroundChange,
    category: 'editing',
    copy: {
      ja: {
        name: '背景変更',
        description: '背景プリセット切り替え',
        tips: [
          'ブランド撮影風の背景を複数ストックしておくとシーン差分が楽に作れます。',
        ],
      },
      en: {
        name: 'Background Switch',
        description: 'Swap preset backgrounds instantly.',
        tips: [
          'Save a few on-brand presets so you can create scene variations quickly.',
        ],
      },
    },
  },
  {
    id: 'designInstruction',
    icon: '📝',
    component: DesignInstruction,
    category: 'advanced',
    copy: {
      ja: {
        name: 'デザイン指示統合',
        description: '自由テキストと画像を送信',
        tips: [
          '参考画像とテキストを併用するとニュアンスが伝わりやすくなります。',
        ],
      },
      en: {
        name: 'Design Instruction Hub',
        description: 'Send free-form text plus reference images.',
        tips: [
          'Combine references and copy so the AI understands both look and context.',
        ],
      },
    },
  },
  {
    id: 'backgroundSelection',
    icon: '🖼️',
    component: BackgroundSelection,
    category: 'assets',
    copy: {
      ja: {
        name: '背景画像選択',
        description: '背景素材を指定して合成',
        tips: [
          '事前にブランド固有の背景をアップロードしておくと統一感が出ます。',
        ],
      },
      en: {
        name: 'Background Asset Merge',
        description: 'Choose custom backgrounds for compositing.',
        tips: [
          'Upload branded sets ahead of time to keep campaigns consistent.',
        ],
      },
    },
  },
  {
    id: 'aiModelSelection',
    icon: '🤖',
    component: AIModelSelection,
    category: 'modeling',
    copy: {
      ja: {
        name: 'AIモデル撮影（詳細設定）',
        description: 'ポーズや撮影条件まで指定して生成',
        tips: [
          'カメラアングルやライト条件など、撮影ディレクションを詳しく入力できます。',
          '一度作成した撮影プリセットはメモしておくと、他案件で再利用しやすいです。',
        ],
      },
      en: {
        name: 'AI Model Studio (Advanced)',
        description: 'Control poses and shoot settings for refined renders.',
        tips: [
          'Detail the camera, lighting, and mood for consistent photoshoots.',
          'Save your favorite presets so other campaigns can reuse them.',
        ],
      },
    },
  },
];

const storageKey = 'nanobananaBaseUrl';

const createHistoryId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `history-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const App = () => {
  const [selectedFunction, setSelectedFunction] = useState(FUNCTION_DEFINITIONS[0].id);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState(null);
  const [source, setSource] = useState(null);
  const [resultHistory, setResultHistory] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
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
    setResultHistory([]);
  }, [selectedFunction]);

  const handleResult = ({ result: nextResult, error: nextError, duration: nextDuration, source: nextSource }) => {
    setResult(nextResult);
    setError(nextError);
    setDuration(nextDuration);
    setSource(nextSource);
    const entry = {
      id: createHistoryId(),
      timestamp: new Date().toISOString(),
      result: nextResult,
      error: nextError,
      duration: nextDuration,
      source: nextSource,
    };
    setResultHistory((prev) => [entry, ...prev].slice(0, 8));
  };

  const currentDefinition = useMemo(
    () => FUNCTION_DEFINITIONS.find((fn) => fn.id === selectedFunction),
    [selectedFunction],
  );
  const CurrentComponent = currentDefinition?.component;

  return (
    <div className="min-h-screen bg-warm-cream pb-48 md:pb-96">
      {globalLoading && (
        <div className="progress-indicator fixed inset-x-0 top-0 z-50">
          <span className="sr-only">処理中</span>
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-24 py-32 md:gap-40 md:px-40 lg:px-64 lg:py-48">
        <Header
          onOpenSettings={() => setIsSettingsOpen(true)}
          baseUrl={baseUrl}
          locale={locale}
          onLocaleChange={setLocale}
          supportedLocales={SUPPORTED_LOCALES}
        />

        <div className="grid gap-24 lg:grid-cols-[minmax(320px,1fr)_1.8fr] lg:gap-32">
          <div className="lg:self-start">
            <FunctionSelector
              functions={FUNCTION_DEFINITIONS}
              selectedFunction={selectedFunction}
              onSelect={setSelectedFunction}
              locale={locale}
            />
          </div>

          <div className="space-y-20 lg:space-y-24">
            <div className="glass-panel p-24 md:p-32 shadow-card">
              <div className="space-y-16">
                {CurrentComponent ? (
                  <CurrentComponent
                    onResult={handleResult}
                    baseUrl={baseUrl}
                    setGlobalLoading={setGlobalLoading}
                    locale={locale}
                  />
                ) : (
                  <div className="flex items-start gap-12 text-medium-gray">
                    <span className="text-2xl" role="img" aria-hidden="true">⚠️</span>
                    <p className="text-sm leading-[22px]">選択したワークフローが見つかりません。</p>
                  </div>
                )}

                <WorkflowGuidePanel definition={currentDefinition} locale={locale} />
              </div>
            </div>

            <ResultDisplay
              result={result}
              error={error}
              duration={duration}
              isLoading={globalLoading}
              source={source}
              history={resultHistory}
              onClearHistory={() => setResultHistory([])}
              variant="inline"
            />
          </div>
        </div>
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
