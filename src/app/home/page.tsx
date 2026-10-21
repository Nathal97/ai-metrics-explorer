import KpiGrid from "@/src/features/metrics/components/kpi-grid";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center font-sans ">
            <KpiGrid />
        </div>
    );
}