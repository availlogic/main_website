import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize mermaid with custom theme
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#10B981',
        primaryTextColor: '#E2E8F0',
        primaryBorderColor: '#10B981',
        lineColor: '#64748B',
        secondaryColor: '#6366F1',
        tertiaryColor: '#1E293B',
        background: '#0F172A',
        mainBkg: '#1E293B',
        nodeBorder: '#10B981',
        clusterBkg: '#1E293B',
        titleColor: '#F1F5F9',
        edgeLabelBackground: '#1E293B',
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });

    const renderChart = async () => {
      if (!containerRef.current) return;

      try {
        // Clear previous content
        containerRef.current.innerHTML = '';

        // Generate unique ID
        const id = `mermaid-${Date.now()}`;

        // Render the chart
        const { svg } = await mermaid.render(id, chart);
        containerRef.current.innerHTML = svg;

        // Make SVG responsive
        const svgElement = containerRef.current.querySelector('svg');
        if (svgElement) {
          svgElement.removeAttribute('height');
          svgElement.style.maxWidth = '100%';
          svgElement.style.height = 'auto';
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError('Failed to render diagram');
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className="text-red-400 text-sm p-4 bg-red-500/10 rounded-lg">
        {error}
      </div>
    );
  }

  return <div ref={containerRef} className="mermaid-container" />;
}
