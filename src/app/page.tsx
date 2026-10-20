import SiteHeader from "@/components/SiteHeader";
import { Cover, Company, Principles, Contents } from "@/components/sections/front";
import { CabinSheets } from "@/components/sections/cabins";
import { Doors, CeilingLight, FloorFittings } from "@/components/sections/details";
import { MaterialsPage, PalettesPage } from "@/components/sections/materials";
import {
  SystemChoice,
  Traction,
  Hydraulic,
  ControlSafety,
  Accessibility,
} from "@/components/sections/systems";
import { Residential, Commercial } from "@/components/sections/apps";
import { Process, ChecklistContact, BackCover } from "@/components/sections/process";

export default function CatalogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Cover />
        <Company />
        <Principles />
        <Contents />
        <CabinSheets />
        <Doors />
        <CeilingLight />
        <FloorFittings />
        <MaterialsPage />
        <PalettesPage />
        <SystemChoice />
        <Traction />
        <Hydraulic />
        <ControlSafety />
        <Accessibility />
        <Residential />
        <Commercial />
        <Process />
        <ChecklistContact />
        <BackCover />
      </main>
    </>
  );
}
