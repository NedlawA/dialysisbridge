// src/components/Resources.tsx
import { ExternalLink, FileText, Globe } from "lucide-react";

interface ResourceItem {
  title: string;
  url: string;
  description?: string;
}

interface ResourcesProps {
  resources: ResourceItem[];
}

const Resources = ({ resources }: ResourcesProps) => {
  const getYouTubeId = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1);
      }
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v")!;
      }
    } catch {}
    return null;
  };

  const getThumbnail = (url: string) => {
    // YouTube thumbnail
    const ytId = getYouTubeId(url);
    if (ytId) {
      return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }

    // PDF placeholder
    if (url.endsWith(".pdf")) {
      return "/pdf-thumbnail.png"; // You can replace with your own asset
    }

    // Website favicon fallback
    try {
      const parsed = new URL(url);
      return `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=128`;
    } catch {
      return null;
    }
  };

  const getIcon = (url: string) => {
    if (url.endsWith(".pdf")) return FileText;
    return Globe;
  };

  return (
    <div className="space-y-4">
      {resources.map((res, i) => {
        const Icon = getIcon(res.url);
        const thumbnail = getThumbnail(res.url);

        return (
          <a
            key={i}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors group"
          >
            {/* Thumbnail */}
            <div className="w-24 h-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={res.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Icon className="w-8 h-8 text-primary opacity-70" />
              )}
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{res.title}</h3>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>

              {res.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {res.description}
                </p>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Resources;
