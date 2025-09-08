import { ContentBlock } from '@/data/projects';

interface ContentRendererProps {
  content: ContentBlock[];
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case 'header':
            const HeaderTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
            const headerClasses = {
              1: 'text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary',
              2: 'text-3xl font-playfair font-bold text-portfolio-primary',
              3: 'text-2xl font-playfair font-semibold text-portfolio-primary'
            };
            
            const level = block.level || 2;
            const marginTopClasses = level === 2
              ? (index > 0 ? 'mt-24 md:mt-28' : '')
              : level === 3
              ? (index > 0 ? 'mt-12 md:mt-16' : '')
              : '';

            return (
              <HeaderTag 
                key={index} 
                className={`${headerClasses[block.level || 2]} ${marginTopClasses}`}
              >
                {block.content}
              </HeaderTag>
            );

          case 'image':
            return (
              <figure key={index} className="my-6">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={block.image} 
                    alt={block.alt || ''}
                    className="w-full h-full object-cover"
                  />
                </div>
                {(block.caption || block.content) && (
                  <figcaption className="mt-2 text-sm text-muted-foreground/80 text-center">
                    {block.caption || block.content}
                  </figcaption>
                )}
              </figure>
            );

          case 'text':
          default:
            return (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {block.content}
              </p>
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;
