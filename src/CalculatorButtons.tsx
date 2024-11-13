export default function CalculatorButtons() {
    const buttons = [
        ["?", "?", "/", "X"],
        ["7", "8", "9", "-"],
        ["4", "5", "6", "+"],
        ["1", "2", "3", "E"],
    ]
    return (
        <div className="CalculatorButtons">
            {buttons.map((row) => (
                <div className="button-row" key={row.join("")}>
                    {row.map((button) => (
                        <button className="btn calculator-button">
                            {button}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}
