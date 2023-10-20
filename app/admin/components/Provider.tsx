"use client";
import React from "react";
import { Router } from "next/router";
import useDialog from "@/hooks/useDialog";
import AlertDialog from "@/components/Dialog";

interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
}

// create new context
const Context = React.createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { isOpen, onClose, buttonText, onSubmit, title, description } =
    useDialog();

  const openSidebar = React.useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close Sidebar on route changes when viewport is less than 1024px
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close side navigation when route changes
  React.useEffect(() => {
    if (sidebarOpen) {
      Router.events.on("routeChangeStart", () => setSidebarOpen(false));
    }

    return () => {
      if (sidebarOpen) {
        Router.events.off("routeChangeStart", () => setSidebarOpen(false));
      }
    };
  }, [sidebarOpen, Router]);

  return (
    <Context.Provider value={{ sidebarOpen, openSidebar, closeSidebar }}>
      {children}
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
        onPress={onSubmit}
        actionText={buttonText}
      />
    </Context.Provider>
  );
}

// custom hook to consume all context values { sidebarOpen, openSidebar, closeSidebar }
export function useDashboardContext() {
  return React.useContext(Context);
}
