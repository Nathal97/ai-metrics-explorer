import KpiCard from "./kpi-card";

const metrics = [
    {
        title : "Tokens consommés",
        icon : "globe.svg",
        value : "1,420,500",
        rmq : "+12.4% / 24h", 
        state : "up"
    },
    {
        title : "Coût estimé (jour)",
        icon : "globe.svg",
        value : "$18.45",
        rmq : "+$2.10 aujourd'hui", 
        state : "up"
    },
    {
        title : "Latence moyenne",
        icon : "globe.svg",
        value : "320 ms",
        rmq : "-15 ms vs hier", 
        state : "down"
    },
]
export default function KpiGrid() {
    return (
        <div className="flex flex-col md:flex-row justify-between flex-1 gap-4 w-full">
            {metrics.map((item, index) =>(
                <KpiCard 
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    value={item.value}
                    rmq={item.rmq}
                    state={item.state}
                />
            ))}
        </div>
        
    );
}