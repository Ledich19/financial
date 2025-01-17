import { useState } from 'react';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000); // Початкова сума
  const [monthlyContribution, setMonthlyContribution] = useState(100); // Щомісячний внесок
  const [years, setYears] = useState(10); // Кількість років
  const [averageIndexReturn, setAverageIndexReturn] = useState(0.1); // Середня дохідність індексу (10%)
  const [averageInflationRate, setAverageInflationRate] = useState(0.03); // Середня інфляція (3%)

  const calculateFutureValue = (investment: number, monthly: number, years: number, returnRate: number, inflationRate: number) => {
    let futureValue = investment;
    for (let i = 0; i < years * 12; i++) {
      futureValue += monthly;
      futureValue *= 1 + returnRate / 12;
    }
    const inflationAdjustedValue = futureValue / Math.pow(1 + inflationRate, years);
    return { futureValue, inflationAdjustedValue };
  };

  const { futureValue, inflationAdjustedValue } = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    years,
    averageIndexReturn,
    averageInflationRate
  );

  const annualRealReturn = (
    ((1 + averageIndexReturn) / (1 + averageInflationRate) - 1) * 100
  ).toFixed(2);

  return (
    <div className='flex flex-col items-center'>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Початкова сума ($):</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Щомісячний внесок ($):</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Кількість років:</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Середня дохідність індексу (%):</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={(averageIndexReturn * 100).toFixed(2)}
          onChange={(e) => setAverageIndexReturn(Number(e.target.value) / 100)}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Середня інфляція (%):</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          value={(averageInflationRate * 100).toFixed(2)}
          onChange={(e) => setAverageInflationRate(Number(e.target.value) / 100)}
        />
      </label>

      <div className="stats stats-vertical lg:stats-horizontal shadow mt-10">
        <div className="stat">
          <div className="stat-title">Сума через {years} років:</div>
          <div className="stat-value">${futureValue.toFixed(2)}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Сума з урахуванням інфляції:</div>
          <div className="stat-value">${inflationAdjustedValue.toFixed(2)}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Річна реальна дохідність:</div>
          <div className="stat-value">{annualRealReturn}%</div>
        </div>

        <div className="stat">
          <div className="stat-title">Річний прибуток у доларах:</div>
          <div className="stat-value">
            ${((futureValue - initialInvestment - monthlyContribution * 12 * years) / years).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
