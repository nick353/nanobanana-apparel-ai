import React, { useState } from 'react';
import { getLocalizedContent } from '../utils/i18n';

const WorkflowGuidePanel = ({ definition, locale }) => {
  if (!definition) return null;
  const localized = getLocalizedContent(definition, locale);
  const tips = localized.tips || [];
  const [open, setOpen] = useState(false);

  if (!tips.length) {
    return (
      <aside className="rounded-16 border border-very-light-gray bg-soft-white/90 px-20 py-16 shadow-level-1">
        <p className="text-sm text-medium-gray">
          {localized.description}
        </p>
      </aside>
    );
  }

  return (
    <aside className="rounded-16 border border-muted-teal/20 bg-muted-teal-light px-20 py-16 shadow-level-1 space-y-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-teal">
            Tips
          </p>
          <h3 className="text-base font-semibold text-charcoal mt-4">
            {locale === 'en' ? 'Workflow Pointers' : 'このワークフローの活用ヒント'}
          </h3>
        </div>
        <span className="text-sm text-muted-teal font-semibold">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <ul className="space-y-10 text-sm text-charcoal/90">
          {tips.map((tip, index) => (
            <li key={tip} className="flex gap-10">
              <span className="text-muted-teal font-semibold">{index + 1}.</span>
              <p className="leading-[22px]">{tip}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default WorkflowGuidePanel;
