export default function Header() {
    return (
        <div className="flex h-25 items-center justify-between">
            <div className="flex item-center justify-center gap-2">
                <div className="flex rounded-2xl bg-fuchsia-700 h-11 w-11 items-center justify-center bg-linear-to-br from-[#6898ff] to-[#fc9b55] shadow-lg shadow-[#6898ff]-500/25">
                    <div className="font-bold text-xl text-white">M</div>
                </div>
                <div className="flex-col justify-between items-center">
                    <div className="font-bold text-gray-700">Metrik & Logs Explorer</div>
                    <div className="text-gray-500 text-xs">Supervision des consommations & latences LLM</div>
                </div>
            </div>
            <div className="flex justify-arround gap-4 items-center">
                <div className="text-xs text-[#41c47a] rounded-2xl bg-white w-20 p-2 flex justify-center items-center">
                    <div className="w-2 h-2 rounded-lg bg-[#41c47a] mr-2"></div>
                    <span className="font-semibold">Live API</span>
                </div>
                <div className="text-xs text-gray-500 bg-white w-35 text-center rounded-2xl p-2 font-semibold">Next.js 14 App Router</div>
                <div className="rounded-3xl w-9 h-9 bg-white flex justify-center items-center text-sm">Btn</div>
            </div>
        </div>
    );
}