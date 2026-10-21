interface KpiCardProps {
  title: string;
  icon: string;
  value: string;
  rmq: string;
  state?: string;
}
export default function KpiCard({ title, icon, value, rmq, state }: KpiCardProps) {
    return (
        <div className="w-[30vw] h-35 flex flex-col justify-center gap-2 rounded-xl p-4 shadow-md shadow-gray-400">
            <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <img src={icon} alt={title} className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${state === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {rmq}
            </p>
           
        </div>
    );
}