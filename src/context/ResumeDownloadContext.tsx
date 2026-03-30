"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ResumeDownloadContextType {
  isDownloaded: boolean;
  triggerDownload: () => void;
}

const ResumeDownloadContext = createContext<ResumeDownloadContextType | undefined>(undefined);

export function ResumeDownloadProvider({ children }: { children: ReactNode }) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const triggerDownload = useCallback(() => {
    setIsDownloaded(true);
    // Reset after 5 seconds so user can download again if needed
    setTimeout(() => setIsDownloaded(false), 5000);
  }, []);

  return (
    <ResumeDownloadContext.Provider value={{ isDownloaded, triggerDownload }}>
      {children}
    </ResumeDownloadContext.Provider>
  );
}

export function useResumeDownload() {
  const context = useContext(ResumeDownloadContext);
  // Return safe fallback if context is not available (prevents crashes)
  if (context === undefined) {
    return {
      isDownloaded: false,
      triggerDownload: () => {},
    };
  }
  return context;
}
