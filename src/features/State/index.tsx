import CountState from "./Element/CountState";
import StateFee from "./Element/StateFee";
import StateFree from "./Element/StateFree";

export default function State() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Buổi học State</h1>
            {/* <CountState /> */}
            {/* <StateFee /> */}
            <StateFree />
        </div>
    )
}
