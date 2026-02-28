// Cloudflare Worker - Telegram Signal Bot
// Deploy at: https://workers.cloudflare.com

const TELEGRAM_BOT_TOKEN = "8725923151:AAH5ucn_lsiZ3SERWk9_VoprOpbAhCtuRIg";
const TELEGRAM_CHAT_ID = "7687741230";

export default {
  async fetch(request, env) {
    // CORS headers
    if (request.method === "OPTIONS") {
      return new Response("", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }
    
    if (request.method === "POST") {
      const signal = await request.json();
      
      const message = `🚨 *PROTRADE SIGNAL*\n\n` +
        `� PAIR: ${signal.symbol}/USDT\n` +
        `📊 Direction: ${signal.direction}\n` +
        `💰 Entry: $${signal.entry.toFixed(2)}\n` +
        `🎯 TP: $${signal.takeProfit.toFixed(2)}\n` +
        `🛡️ SL: $${signal.stopLoss.toFixed(2)}\n` +
        `📈 R:R: ${signal.riskReward}:1\n` +
        `⚡ Leverage: ${signal.leverage}\n` +
        `⭐ Grade: ${signal.grade}\n` +
        `🗺️ HTF: ${signal.htfBias.toUpperCase()}`;
      
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown"
          })
        }
      );
      
      return new Response("Signal sent!", { 
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" }
    });
    }
    return new Response("OK", { status: 200 });
  }
};
