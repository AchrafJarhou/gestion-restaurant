"use client";

import React, { useState } from "react";
import SideBareContent from "./sidebare-content";
import { Clock, Menu, Utensils, X } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function RestaurantDashboard() {
  // Declaration d'un state pour gerer l'affichage de la barre lateral
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <aside className="hidden lg:block w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <SideBareContent />
      </aside>

      {/* Affichage conditionnel de la barre latérale sur les petits ecrans */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Utensils className="h-6 w-6 text-amber-500" />
                <span className="text-lg font-semibold">Gourmet Hub</span>
              </div>
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <SideBareContent />
          </aside>
        </div>
      )}

      {/* Contenu principal */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-sm md:p-6 dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">Gourmet Hub</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant={"outline"} size={"sm"} className="hidden md:flex">
              <Clock className="mr-2 h-4 w-4" />
              Ouvrir le restaurant
            </Button>
            <Avatar style={{ cursor: "pointer" }}>
              <AvatarFallback>CH</AvatarFallback>
            </Avatar>
          </div>
        </header>
      </div>
    </div>
  );
}

export default RestaurantDashboard;
