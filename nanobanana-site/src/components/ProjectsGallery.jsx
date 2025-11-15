import React from 'react';

const ProjectsGallery = ({ projects, onSelect }) => {
  return (
    <section className="glass-panel p-24 md:p-32 space-y-16" aria-label="プロジェクト一覧">
      <div className="flex items-start justify-between gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-teal font-semibold mb-6">Projects</p>
          <h2 className="text-2xl font-bold text-charcoal">プロジェクトを選択</h2>
          <p className="text-sm text-medium-gray mt-8">最近の企画を一覧表示します。カードをクリックするとワークスペースに入ります。</p>
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(project)}
            className="group rounded-16 border border-very-light-gray bg-soft-white p-16 text-left shadow-level-1 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-level-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal"
            aria-label={`${project.title} を開く`}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-12 bg-gradient-to-br from-muted-teal/20 via-soft-gold/10 to-dusty-purple/15 flex items-center justify-center text-4xl">
              <span role="img" aria-hidden="true">{project.emoji}</span>
            </div>
            <h3 className="mt-12 text-lg font-semibold text-charcoal line-clamp-2">{project.title}</h3>
            <p className="text-xs text-medium-gray mt-6 line-clamp-2">{project.summary}</p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-medium-gray">更新日 {project.updatedAt}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
