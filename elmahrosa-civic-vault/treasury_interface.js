export function trackTreasuryImpact(trade) {
  return {
    contributor: trade.user,
    asset: trade.asset,
    amount: trade.amount,
    impact: trade.amount * 0.02, // 2% auto-contribution
    timestamp: trade.timestamp
  };
}
