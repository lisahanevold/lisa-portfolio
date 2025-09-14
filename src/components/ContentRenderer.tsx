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
              3: 'text-2xl font-playfair font-semibold text-portfolio-primary',
              4: 'text-lg font-playfair font-semibold text-portfolio-primary'
            };
            
            const level = block.level || 2;
            const marginTopClasses = level === 2
              ? (index > 0 ? 'mt-24 md:mt-28' : '')
              : level === 3
              ? (index > 0 ? 'mt-12 md:mt-16' : '')
              : level === 4
              ? (index > 0 ? 'mt-8 md:mt-10' : '')
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
              <figure key={index} className={block.fullWidth ? "w-full" : "my-6"}>
                <div className={block.transparentBackground ? "w-full" : "w-full rounded-lg overflow-hidden shadow-lg"}>
                  <img 
                    src={block.image} 
                    alt={block.alt || ''}
                    className={block.fullWidth ? "w-full h-auto" : "w-full h-auto object-contain max-h-[70vh]"}
                  />
                </div>
                {(block.caption || block.content) && (
                  <figcaption className="mt-2 text-sm text-muted-foreground/80 text-center">
                    {block.caption || block.content}
                  </figcaption>
                )}
              </figure>
            );

          case 'video':
            return (
              <figure key={index} className={block.fullWidth ? "w-full" : "my-6"}>
                <div className={block.transparentBackground ? "w-full" : "w-full rounded-lg overflow-hidden shadow-lg"}>
                  <video 
                    src={block.content}
                    controls={block.controls !== false}
                    autoPlay={block.autoplay || false}
                    loop={block.loop || false}
                    muted={block.muted || false}
                    className={block.fullWidth ? "w-full h-auto" : "w-full h-auto object-contain max-h-[70vh]"}
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                {(block.caption || block.alt) && (
                  <figcaption className="mt-2 text-sm text-muted-foreground/80 text-center">
                    {block.caption || block.alt}
                  </figcaption>
                )}
              </figure>
            );

          case 'list':
            const listItems = block.content.split('\n').filter(item => item.trim() !== '');
            const ListTag = block.listType === 'numbered' ? 'ol' : 'ul';
            const listClasses = block.listType === 'numbered' 
              ? 'list-decimal list-outside space-y-2 text-muted-foreground leading-relaxed pl-6'
              : 'list-disc list-outside space-y-2 text-muted-foreground leading-relaxed pl-6';
            
            return (
              <ListTag key={index} className={listClasses}>
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className='pl-2' dangerouslySetInnerHTML={{ __html: item.trim() }} />
                ))}
              </ListTag>
            );

          case 'text':
          default:
            return (
              <p key={index} className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;