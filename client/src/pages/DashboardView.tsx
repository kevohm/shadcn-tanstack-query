"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { StudentDashboard } from "@/components/StudentDashboard"
import { MentorDashboard } from "@/components/MentorDashboard"
import { GoalSettingView } from "@/components/GoalSettingView"
import { ProgressTrackingView } from "@/components/ProgressTrackingView"
import { MilestoneView } from "@/components/MilestoneView"

type ViewType = "student" | "mentor" | "goals" | "progress" | "milestones"

export function DashboardView() {
  const [currentView, setCurrentView] = useState<ViewType>("student")
  const [userType, setUserType] = useState<"student" | "mentor">("student")

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view)
  }

  const handleUserTypeChange = (type: "student" | "mentor") => {
    setUserType(type)
    setCurrentView(type)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar onViewChange={handleViewChange} userType={userType} onUserTypeChange={handleUserTypeChange} />
        <div className="flex-1">
          <DashboardHeader currentView={currentView} userType={userType} />
          <main className="p-4 md:p-6">
            {currentView === "student" && <StudentDashboard />}
            {currentView === "mentor" && <MentorDashboard />}
            {currentView === "goals" && <GoalSettingView userType={userType} />}
            {currentView === "progress" && <ProgressTrackingView userType={userType} />}
            {currentView === "milestones" && <MilestoneView userType={userType} />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
