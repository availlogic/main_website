import { useEffect, useRef, useState, useCallback } from 'react';
import mermaid from 'mermaid';
import { RefreshCw } from 'lucide-react';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const renderChart = useCallback(async (isMounted: { current: boolean }) => {
    if (!containerRef.current) return;

    try {
      // Clear previous content
      containerRef.current.innerHTML = '';
      setError(null);

      // Generate a truly unique ID to avoid collisions during React Strict Mode concurrent renders
      const uniqueId = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 15);
      const id = `mermaid-${uniqueId}`;

      // Render the chart
      const { svg } = await mermaid.render(id, chart);

      if (!isMounted.current) return;

      containerRef.current.innerHTML = svg;

      // Make SVG responsive
      const svgElement = containerRef.current.querySelector('svg');
      if (svgElement) {
        svgElement.removeAttribute('height');
        svgElement.style.maxWidth = '100%';
        svgElement.style.height = 'auto';
      }
    } catch (err) {
      if (!isMounted.current) return;
      console.error('Mermaid rendering error:', err);
      setError('Failed to render diagram');
    }
  }, [chart]);

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

    const isMounted = { current: true };
    renderChart(isMounted);

    return () => {
      isMounted.current = false;
    };
  }, [renderChart, retryCount]);

  if (error) {
    return (
      <div className="text-red-400 text-sm p-4 bg-red-500/10 rounded-lg flex items-center justify-between">
        <span>{error}</span>
        <button
          onClick={() => {
            setError(null);
            setRetryCount((c) => c + 1);
          }}
          className="p-2 hover:bg-red-500/20 rounded-md transition-colors"
          title="Retry"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return <div ref={containerRef} className="mermaid-container" />;
}
