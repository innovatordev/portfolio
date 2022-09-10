const homeWork = (sum, percentage) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
    Sum before tip: ${sum}
    Tip percentage: ${percentage}%
    Tip:            ${tip.toFixed(2)}
    Total:          ${total.toFixed(2)}
  `);
};

homeWork(29.95, 28);