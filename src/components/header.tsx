export default function Header() {
    return (
        <div className="flex h-25 items-center justify-between">
            <div className="flex item-center justify-center gap-2">
                <div className="flex rounded-2xl bg-fuchsia-700 h-11 w-11 items-center justify-center bg-linear-to-br from-[#6898ff] to-[#fc9b55] shadow-lg shadow-[#6898ff]-500/25">
                    <div className="font-bold text-xl text-white">M</div>
                </div>
                <div className="flex-col justify-between items-center">
                    <div className="font-bold text-black">Metrik & Logs Explorer</div>
                    <div className="text-gray-500 text-xs">Supervision des consommations & latences LLM</div>
                </div>
            </div>
            <div className="flex justify-arround gap-2 items-center">
                <div>Live API</div>
                <div>Next.js 14 App Router</div>
                <div>Btn</div>
            </div>
        </div>
    );
}