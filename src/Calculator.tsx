import CalculatorButtons from "./CalculatorButtons"

export default function Calculator() {
    return (
        <div className="Calculator">
            <div className="calculator-box">
                <div className="display">Display</div>
                <CalculatorButtons />
            </div>
        </div>
    )
}
