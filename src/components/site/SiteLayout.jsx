import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppDock from "@/components/site/WhatsAppDock";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-[74px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppDock />
    </div>
  );
}