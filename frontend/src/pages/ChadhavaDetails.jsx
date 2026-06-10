import { useState } from "react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────
// CSS VARIABLES & GLOBAL STYLES (injected once)
// ─────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --saffron: #E8621A; --saffron-pale: #FFF1E6;
      --gold: #C9940A; --gold-light: #F5D57A; --gold-pale: #FFF9E6;
      --maroon: #7B1B2A; --maroon-deep: #4A0E18;
      --cream: #FFFAF4; --cream-dark: #F5EDD8; --cream-bg: #F5F0E8;
      --text-dark: #1C0A06; --text-mid: #5C3D2A; --text-muted: #9C7B65;
      --border: rgba(74,14,24,0.1);
      --white: #fff;
      --green: #1E8C50; --green-pale: #EAF5F0;
      --rose: #A0272B; --rose-deep: #6B1020; --rose-mid: #C0392B;
      --rose-pale: #FDF0EE; --rose-border: rgba(160,39,43,0.15);
      --blush: #D4527A; --blush-light: #F9A8C9;
      --shadow-rose: 0 4px 24px rgba(160,39,43,0.14);
      --shadow-warm: 0 4px 24px rgba(200,100,10,0.12);
    }

    body { font-family: 'DM Sans', sans-serif; background: #F0E8D8; color: var(--text-dark); }

    /* ── Scrollbar ── */
    ::-webkit-scrollbar { width: 0; }

    /* ── Navbar ── */
    .desk-nav { background: var(--maroon-deep); height: 56px; display: flex; align-items: center; padding: 0 32px; position: sticky; top: 0; z-index: 100; }
    .desk-nav-inner { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
    .desk-logo { display: flex; align-items: center; gap: 10px; }
    .desk-logo-icon { width: 36px; height: 36px; background: var(--saffron); border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .desk-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--gold-light); }
    .desk-nav-back { color: rgba(255,255,255,0.7); font-size: 14px; display: flex; align-items: center; gap: 6px; cursor: pointer; margin-left: 12px; }
    .desk-breadcrumb { font-size: 13px; color: rgba(255,255,255,0.4); display: flex; align-items: center; gap: 6px; margin-left: 12px; }
    .desk-breadcrumb span { color: rgba(255,255,255,0.65); }
    .desk-nav-right { display: flex; align-items: center; gap: 10px; }
    .desk-history-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); font-size: 13px; padding: 7px 14px; border-radius: 8px; cursor: pointer; }
    .desk-offer-cta { background: var(--rose); color: #fff; font-size: 13px; font-weight: 600; padding: 8px 18px; border-radius: 8px; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; }

    /* ── Layout ── */
    .desk-page { background: var(--cream-bg); min-height: 100vh; }
    .desk-layout { max-width: 1200px; margin: 0 auto; padding: 28px 32px 80px; display: grid; grid-template-columns: 1fr 360px; gap: 28px; align-items: start; }

    /* ── Hero Image ── */
    .desk-img { width: 100%; height: 300px; border-radius: 16px; overflow: hidden; position: relative; background: linear-gradient(135deg, #6B1020 0%, #A0272B 50%, #C0392B 100%); display: flex; align-items: center; justify-content: center; font-size: 80px; margin-bottom: 22px; }
    .desk-img-tag { position: absolute; top: 16px; left: 16px; background: var(--gold); color: #fff; font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 6px; letter-spacing: 0.04em; }
    .desk-img-petals { position: absolute; bottom: 16px; left: 16px; font-size: 22px; opacity: 0.8; letter-spacing: 4px; }
    .desk-img-offered { position: absolute; bottom: 16px; right: 16px; background: rgba(0,0,0,0.45); color: #fff; font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 8px; }
    .desk-img-dots { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); display: flex; flex-direction: column; gap: 5px; }
    .desk-img-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.35); }
    .desk-img-dot.active { background: #fff; height: 18px; border-radius: 4px; }

    /* ── Header Info ── */
    .desk-chadava-type { font-size: 12px; font-weight: 700; color: var(--rose); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 7px; }
    .desk-chadava-name { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 700; color: var(--text-dark); line-height: 1.2; margin-bottom: 14px; }
    .desk-meta { display: flex; flex-direction: column; gap: 7px; margin-bottom: 14px; }
    .desk-meta-row { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-mid); }
    .desk-social { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--rose-pale); border-radius: 10px; border: 1px solid var(--rose-border); margin-bottom: 20px; }
    .desk-offered-count { font-size: 14px; font-weight: 600; color: var(--rose); }
    .desk-offered-count span { color: var(--text-mid); font-weight: 400; }
    .desk-rating { margin-left: auto; font-size: 14px; font-weight: 600; color: var(--text-dark); display: flex; align-items: center; gap: 4px; }
    .desk-stars { color: var(--gold); }

    /* ── WYG Strip ── */
    .desk-wyg { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 18px; margin-bottom: 22px; }
    .desk-wyg-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--text-dark); margin-bottom: 14px; }
    .desk-wyg-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; }
    .desk-wyg-item { text-align: center; padding: 14px 8px; background: var(--rose-pale); border-radius: 10px; }
    .desk-wyg-icon { font-size: 20px; margin-bottom: 5px; }
    .desk-wyg-label { font-size: 11px; font-weight: 600; color: var(--rose); line-height: 1.4; }

    /* ── Tabs ── */
    .desk-tabs { display: flex; gap: 0; border-bottom: 2px solid var(--border); margin-bottom: 22px; overflow-x: auto; }
    .desk-tab { padding: 10px 18px; font-size: 14px; font-weight: 500; color: var(--text-muted); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap; transition: all 0.2s; }
    .desk-tab.active { color: var(--rose); border-bottom-color: var(--rose); font-weight: 600; }

    /* ── About Tab ── */
    .desk-about-desc { font-size: 14.5px; color: var(--text-mid); line-height: 1.8; margin-bottom: 16px; }
    .desk-includes { background: var(--gold-pale); border: 1px solid rgba(200,148,10,0.2); border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; }
    .desk-includes-title { font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 0.06em; margin-bottom: 8px; }
    .desk-includes-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-mid); margin-bottom: 5px; }
    .desk-includes-item::before { content: '✓'; color: var(--green); font-weight: 700; }

    /* ── Items Tab ── */
    .desk-items-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .desk-item-box { background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 16px; display: flex; align-items: flex-start; gap: 12px; }
    .desk-item-icon { font-size: 28px; flex-shrink: 0; }
    .desk-item-name { font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px; }
    .desk-item-desc { font-size: 12.5px; color: var(--text-muted); line-height: 1.5; }
    .desk-item-significance { font-size: 11px; font-weight: 600; color: var(--rose); margin-top: 4px; }

    /* ── Reviews Tab ── */
    .desk-review-card { background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 14px; }
    .desk-review-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
    .desk-review-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--rose-pale); border: 1.5px solid var(--rose-border); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 13px; font-weight: 700; color: var(--rose); flex-shrink: 0; }
    .desk-review-name { font-size: 14px; font-weight: 600; color: var(--text-dark); }
    .desk-review-meta { font-size: 12px; color: var(--text-muted); }
    .desk-review-stars { color: var(--gold); font-size: 13px; margin-left: auto; }
    .desk-review-text { font-size: 13.5px; color: var(--text-mid); line-height: 1.7; font-style: italic; }

    /* ── FAQ Tab ── */
    .desk-faq-item { border-bottom: 1px solid var(--border); }
    .desk-faq-q { padding: 14px 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 14px; font-weight: 500; color: var(--text-dark); gap: 10px; }
    .desk-faq-icon { font-size: 18px; color: var(--text-muted); flex-shrink: 0; transition: transform 0.2s; }
    .desk-faq-icon.open { transform: rotate(45deg); color: var(--rose); }
    .desk-faq-a { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; padding-bottom: 14px; }

    /* ── Promise ── */
    .desk-promise { background: var(--green-pale); border: 1px solid rgba(30,140,80,0.2); border-radius: 14px; padding: 18px; margin-top: 20px; }
    .desk-promise-title { display: flex; align-items: center; gap: 7px; font-family: 'Cormorant Garamond', serif; font-size: 19px; font-weight: 700; color: #0F4D28; margin-bottom: 7px; }
    .desk-promise-desc { font-size: 13.5px; color: #2D6B45; line-height: 1.65; margin-bottom: 12px; }
    .desk-promise-tags { display: flex; gap: 8px; flex-wrap: wrap; }
    .desk-promise-tag { background: #fff; border: 1px solid rgba(30,140,80,0.2); color: var(--green); font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 6px; }

    /* ── Right Sticky Panel ── */
    .desk-sticky-panel { position: sticky; top: 72px; }
    .desk-panel-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-rose); margin-bottom: 14px; }
    .desk-panel-header { background: linear-gradient(135deg, var(--rose-deep), var(--rose)); padding: 16px 18px; }
    .desk-panel-name { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 3px; line-height: 1.3; }
    .desk-panel-temple { font-size: 12px; color: rgba(255,255,255,0.5); }
    .desk-panel-body { padding: 18px; }
    .desk-panel-from { text-align: center; margin-bottom: 16px; }
    .desk-panel-from-label { font-size: 12px; color: var(--text-muted); margin-bottom: 3px; }
    .desk-panel-from-price { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 700; color: var(--rose); line-height: 1; }
    .desk-panel-from-sub { font-size: 11px; color: var(--text-muted); margin-top: 3px; }
    .desk-panel-includes { background: var(--rose-pale); border-radius: 10px; padding: 12px; margin-bottom: 16px; }
    .desk-panel-includes-item { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--text-mid); margin-bottom: 6px; }
    .desk-panel-includes-item:last-child { margin-bottom: 0; }
    .desk-panel-includes-item::before { content: '✓'; color: var(--green); font-weight: 700; font-size: 12px; }
    .desk-offer-btn { width: 100%; padding: 16px; background: var(--rose); color: #fff; font-size: 16px; font-weight: 700; border: none; border-radius: 10px; cursor: pointer; font-family: 'DM Sans', sans-serif; }
    .desk-offer-btn:hover { background: var(--rose-mid); }
    .desk-panel-secure { text-align: center; font-size: 11px; color: var(--text-muted); margin-top: 9px; }
    .desk-panel-note { background: linear-gradient(135deg, var(--rose-deep), var(--rose)); border-radius: 10px; padding: 12px 14px; margin-top: 12px; display: flex; align-items: flex-start; gap: 10px; }
    .desk-panel-note-icon { font-size: 22px; flex-shrink: 0; }
    .desk-panel-note-text { font-size: 12px; color: rgba(255,255,255,0.7); line-height: 1.5; }
    .desk-panel-note-text strong { color: var(--gold-light); display: block; margin-bottom: 1px; }

    /* ── Bottom Sheet Overlay ── */
    .bs-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: flex-end; }
    .bs-sheet { width: 100%; max-width: 520px; margin: 0 auto; background: var(--white); border-radius: 20px 20px 0 0; max-height: 92vh; overflow-y: auto; scrollbar-width: none; transform: translateY(0); }
    .bs-handle { width: 36px; height: 4px; background: var(--border); border-radius: 2px; margin: 12px auto 0; }
    .bs-header { display: flex; align-items: center; padding: 14px 18px; border-bottom: 1px solid var(--border); gap: 12px; }
    .bs-close { width: 30px; height: 30px; border-radius: 50%; background: var(--cream-dark); display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; flex-shrink: 0; border: none; }
    .bs-back { width: 30px; height: 30px; border-radius: 50%; background: var(--cream-dark); display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; flex-shrink: 0; border: none; }
    .bs-title { font-size: 16px; font-weight: 700; color: var(--text-dark); }
    .bs-step-indicator { display: flex; align-items: center; gap: 5px; margin-left: auto; }
    .bs-step-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border); }
    .bs-step-dot.active { background: var(--rose); width: 18px; border-radius: 4px; }
    .bs-step-dot.done { background: var(--green); }
    .bs-content { padding: 18px; }
    .bs-footer { padding: 12px 18px; border-top: 1px solid var(--border); background: var(--white); position: sticky; bottom: 0; }
    .bs-total-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
    .bs-total-label { font-size: 12px; color: var(--text-muted); }
    .bs-total-price { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; color: var(--rose); }
    .bs-continue-btn { width: 100%; padding: 14px; background: var(--rose); color: #fff; font-size: 15px; font-weight: 700; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; cursor: pointer; }
    .bs-continue-btn:disabled { background: #ccc; cursor: not-allowed; }
    .bs-secure { text-align: center; font-size: 10px; color: var(--text-muted); margin-top: 7px; display: flex; align-items: center; justify-content: center; gap: 3px; }

    /* ── Step 1: Package Cards ── */
    .bs-pkg-intro { font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.55; }
    .bs-pkg-cards { display: flex; flex-direction: column; gap: 12px; }
    .bs-pkg-card { border: 2px solid var(--border); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.2s; display: flex; gap: 14px; align-items: flex-start; }
    .bs-pkg-card:hover { border-color: var(--rose); }
    .bs-pkg-card.selected { border-color: var(--rose); background: var(--rose-pale); }
    .bs-pkg-card.popular { border-color: var(--gold); }
    .bs-pkg-radio { width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(160,39,43,0.3); flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
    .bs-pkg-card.selected .bs-pkg-radio { border-color: var(--rose); background: var(--rose); }
    .bs-pkg-img { font-size: 32px; flex-shrink: 0; }
    .bs-pkg-info { flex: 1; min-width: 0; }
    .bs-pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px; display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
    .bs-popular-badge { background: var(--gold); color: #fff; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 4px; letter-spacing: 0.05em; }
    .bs-pkg-items { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 7px; }
    .bs-pkg-item-chip { background: var(--cream-dark); color: var(--text-mid); font-size: 10px; font-weight: 500; padding: 2px 7px; border-radius: 4px; }
    .bs-pkg-card.selected .bs-pkg-item-chip { background: rgba(160,39,43,0.1); }
    .bs-pkg-desc { font-size: 11.5px; color: var(--text-muted); line-height: 1.5; margin-bottom: 5px; }
    .bs-pkg-price { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--rose); }

    /* ── Step 2: WhatsApp ── */
    .bs-wa-icon { width: 52px; height: 52px; background: #25D366; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 26px; margin: 0 auto 16px; }
    .bs-wa-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 700; color: var(--text-dark); text-align: center; margin-bottom: 6px; }
    .bs-wa-desc { font-size: 13.5px; color: var(--text-muted); text-align: center; line-height: 1.6; margin-bottom: 20px; }
    .bs-wa-wrap { display: flex; gap: 8px; margin-bottom: 10px; }
    .bs-wa-prefix { background: var(--cream-dark); border: 1.5px solid var(--border); border-radius: 10px; padding: 13px 14px; font-size: 14px; color: var(--text-mid); font-weight: 500; white-space: nowrap; display: flex; align-items: center; gap: 5px; }
    .bs-wa-input { flex: 1; padding: 13px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: var(--text-dark); background: #fff; outline: none; }
    .bs-wa-input:focus { border-color: var(--rose); }
    .bs-wa-notice { background: linear-gradient(135deg, var(--rose-deep), var(--rose)); border-radius: 10px; padding: 12px 14px; display: flex; align-items: flex-start; gap: 10px; }
    .bs-wa-notice-icon { font-size: 18px; flex-shrink: 0; }
    .bs-wa-notice-text { font-size: 12px; color: rgba(255,255,255,0.75); line-height: 1.55; }
    .bs-wa-notice-text strong { color: var(--gold-light); display: block; margin-bottom: 2px; }
    .bs-tandc { font-size: 11px; color: var(--text-muted); text-align: center; margin-top: 10px; line-height: 1.5; }
    .bs-tandc a { color: var(--rose); text-decoration: underline; }

    /* ── Step 3: Upsells ── */
    .bs-upsell-intro { font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.55; }
    .bs-upsell-item { display: flex; align-items: center; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); }
    .bs-upsell-item:last-child { border-bottom: none; }
    .bs-upsell-img { width: 64px; height: 56px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 26px; flex-shrink: 0; }
    .bs-upsell-info { flex: 1; min-width: 0; }
    .bs-upsell-badge { font-size: 9px; font-weight: 700; color: var(--rose); background: var(--rose-pale); padding: 2px 7px; border-radius: 4px; letter-spacing: 0.04em; margin-bottom: 4px; display: inline-block; }
    .bs-upsell-name { font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 2px; }
    .bs-upsell-price { font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 700; color: var(--rose); }
    .bs-upsell-desc { font-size: 11px; color: var(--text-muted); line-height: 1.45; margin-top: 2px; }
    .bs-add-btn { background: transparent; border: 1.5px solid var(--rose); color: var(--rose); font-size: 13px; font-weight: 700; padding: 8px 14px; border-radius: 8px; cursor: pointer; flex-shrink: 0; font-family: 'DM Sans', sans-serif; transition: all 0.2s; white-space: nowrap; }
    .bs-add-btn.added { background: var(--rose); color: #fff; }
    .bs-skip-link { text-align: center; font-size: 13px; color: var(--text-muted); margin-top: 10px; cursor: pointer; text-decoration: underline; }

    /* ── Step 4: Payment ── */
    .bs-order-summary { background: var(--cream); border-radius: 12px; padding: 14px; margin-bottom: 16px; }
    .bs-order-title { font-size: 12px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 10px; }
    .bs-order-row { display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: var(--text-mid); margin-bottom: 7px; }
    .bs-order-row.total { font-weight: 700; color: var(--text-dark); border-top: 1px solid var(--border); padding-top: 8px; margin-top: 8px; font-size: 15px; }
    .bs-order-price { font-family: 'Cormorant Garamond', serif; font-weight: 700; color: var(--rose); font-size: 15px; }
    .bs-order-row.total .bs-order-price { font-size: 20px; }
    .bs-payment-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
    .bs-pay-method { border: 1.5px solid var(--border); border-radius: 10px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.2s; }
    .bs-pay-method.selected { border-color: var(--rose); background: var(--rose-pale); }
    .bs-pay-icon { font-size: 22px; margin-bottom: 5px; }
    .bs-pay-label { font-size: 12px; font-weight: 600; color: var(--text-dark); }
    .bs-coupon-row { display: flex; gap: 8px; margin-bottom: 14px; }
    .bs-coupon-input { flex: 1; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: var(--text-dark); background: #fff; outline: none; }
    .bs-coupon-btn { padding: 10px 14px; background: transparent; border: 1.5px solid var(--rose); color: var(--rose); font-size: 13px; font-weight: 600; border-radius: 8px; cursor: pointer; font-family: 'DM Sans', sans-serif; }

    /* ── Step 5: Post-payment Details ── */
    .bs-success-banner { background: var(--green-pale); border: 1px solid rgba(30,140,80,0.2); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
    .bs-success-icon { font-size: 28px; flex-shrink: 0; }
    .bs-success-title { font-size: 14px; font-weight: 700; color: #0F4D28; margin-bottom: 2px; }
    .bs-success-sub { font-size: 12px; color: #2D6B45; line-height: 1.45; }
    .bs-details-form { display: flex; flex-direction: column; gap: 14px; }
    .bs-field-label { font-size: 13px; font-weight: 600; color: var(--text-dark); margin-bottom: 3px; display: block; }
    .bs-field-hint { font-size: 11.5px; color: var(--text-muted); margin-bottom: 5px; display: block; }
    .bs-detail-input { width: 100%; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 9px; font-size: 14px; font-family: 'DM Sans', sans-serif; color: var(--text-dark); background: #fff; outline: none; }
    .bs-detail-input:focus { border-color: var(--rose); }
    .bs-gotra-check { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
    .bs-gotra-check input { accent-color: var(--rose); width: 15px; height: 15px; }
    .bs-gotra-check label { font-size: 12px; color: var(--text-muted); cursor: pointer; }
    .bs-photo-note { background: linear-gradient(135deg, var(--rose-deep), var(--rose)); border-radius: 12px; padding: 14px; display: flex; align-items: flex-start; gap: 10px; }
    .bs-photo-note-icon { font-size: 22px; flex-shrink: 0; }
    .bs-photo-note-title { font-size: 13px; font-weight: 600; color: var(--gold-light); margin-bottom: 3px; }
    .bs-photo-note-text { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5; }



/* Mobile responsiveness */

/* iPad Air / iPad Mini / iPad Pro */

@media screen and (min-width: 769px) and (max-width: 1024px) {

  .desk-layout {
    max-width: 100%;
    padding: 20px 32px;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) 300px;
  }

  .desk-sticky-panel {
    width: 100%;
  }

  .desk-panel-card {
    width: 100%;
  }

  .desk-img {
    height: 260px;
  }
}


@media screen and (max-width: 768px) {

  html,
  body,
  #root,
  .desk-page {
    width: 100%;
    overflow-x: hidden;
  }

  * {
    max-width: 100%;
    box-sizing: border-box;
  }

  .desk-layout {
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    padding: 12px;
    gap: 16px;
  }

  .desk-sticky-panel {
    position: static;
    top: unset;
    width: 100%;
  }

  .desk-nav {
    padding: 10px;
    min-height: auto;
    height: auto;
  }

   .desk-nav-inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}
  .desk-nav-right {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .desk-history-btn,
  .desk-offer-cta {
    font-size: 10px;
    padding: 6px 8px;
    white-space: nowrap;
  }

  .desk-breadcrumb {
    display: none;
  }

  .desk-logo-text {
    font-size: 18px;
  }

  .desk-nav-back {
    font-size: 12px;
    margin-left: 6px;
  }

  .desk-img {
    width: 100%;
    height: 140px;
    font-size: 40px;
  }

  .desk-img-tag {
    font-size: 10px;
  }

  .desk-img-offered {
    display: none;
  }

  .desk-chadava-type {
    font-size: 11px;
  }

  .desk-chadava-name {
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
  }

  .desk-meta-row {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 12px;
    line-height: 1.5;
    flex-wrap: wrap;
    word-break: break-word;
  }

  .desk-social {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px;
  }

  .desk-rating {
    margin-left: 0;
    width: 100%;
  }

  .desk-wyg {
    width: 100%;
  }

  .desk-wyg-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .desk-wyg-item {
    padding: 10px 6px;
  }

  .desk-wyg-label {
    font-size: 10px;
  }

  .desk-tabs {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
  }

  .desk-tabs::-webkit-scrollbar {
    display: none;
  }

  .desk-tab {
    font-size: 13px;
    padding: 10px 14px;
  }

  .desk-items-grid {
    grid-template-columns: 1fr;
  }

  .desk-item-box {
    padding: 12px;
  }

  .desk-item-name {
    font-size: 13px;
  }

  .desk-item-desc {
    font-size: 12px;
  }

  .desk-panel-card {
    width: 100%;
    margin-top: 16px;
  }

  .desk-panel-header {
    padding: 14px;
  }

  .desk-panel-name {
    font-size: 16px;
  }

  .desk-panel-body {
    padding: 14px;
  }

  .desk-panel-from-price {
    font-size: 30px;
  }

  .desk-offer-btn {
    width: 100%;
    font-size: 14px;
    padding: 14px;
  }

  .desk-promise-tags {
    flex-direction: column;
    align-items: flex-start;
  }
    .desk-img {
  width: 100%;
  max-width: 100%;
  margin: 0;
}

.desk-layout > div:first-child {
  min-width: 0;
}

.desk-layout {
  overflow: hidden;
}
}

/* Extra Small Devices */
@media screen and (max-width: 400px) {

  .desk-logo-text {
    font-size: 16px;
  }

  .desk-chadava-name {
    font-size: 14px;
  }

  .desk-history-btn,
  .desk-offer-cta {
    font-size: 10px;
    padding: 6px 8px;
  }

  .desk-img {
    height: 160px;
  }

  .desk-panel-from-price {
    font-size: 26px;
  }
}

`}</style>
);

// ─────────────────────────────────────────────
// SECTION: NAVBAR
// ─────────────────────────────────────────────
const Navbar = ({ onOfferClick }) => (
  <nav className="desk-nav">
    <div className="desk-nav-inner">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="desk-logo">
          <div className="desk-logo-icon">🪔</div>
          <div className="desk-logo-text">Sri Arpan</div>
        </div>
      {/*  <span className="desk-nav-back">← Back</span> */}
      <Link to="/" className="desk-nav-back" style={{ textDecoration: "none" }}>← Back</Link>
        <div className="desk-breadcrumb">
          <span>Chadhava</span> ›{" "}
          <span style={{ color: "rgba(255,255,255,0.85)" }}>
            Sindoor & Rose Garland · Hanuman Garhi
          </span>
        </div>
      </div>
      <div className="desk-nav-right">
        <div className="desk-history-btn">📋 My Offerings</div>
        <button className="desk-offer-cta" onClick={onOfferClick}>
          🌸 Offer Now
        </button>
      </div>
    </div>
  </nav>
);

// ─────────────────────────────────────────────
// SECTION: HERO IMAGE
// ─────────────────────────────────────────────
const HeroImage = () => (
  <div className="desk-img">
    🌺
    <div className="desk-img-tag">🌸 Bada Mangal Special</div>
    <div className="desk-img-petals">🌸🌺🌼</div>
    <div className="desk-img-offered">🙏 3,840+ offerings made</div>
    <div className="desk-img-dots">
      <div className="desk-img-dot active"></div>
      <div className="desk-img-dot"></div>
      <div className="desk-img-dot"></div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// SECTION: CHADAVA HEADER INFO
// ─────────────────────────────────────────────
const ChadavaHeader = () => (
  <>
    <div className="desk-chadava-type">Chadava · Hanuman Ji · Bada Mangal</div>
    <div className="desk-chadava-name">
      Sindoor & Rose Garland Chadava at Hanuman Garhi
    </div>
    <div className="desk-meta">
      <div className="desk-meta-row">
        🛕 Hanuman Garhi Temple, Ayodhya, Uttar Pradesh
      </div>
      <div className="desk-meta-row">
        📅 05 May 2025 · Bada Mangal · Offered at sunrise
      </div>
      <div className="desk-meta-row">
        📸 Photo confirmation sent within 24 hours of offering
      </div>
    </div>
    <div className="desk-social">
      <span className="desk-offered-count">
        3,840+ <span>offerings made this month</span>
      </span>
      <span className="desk-rating">
        <span className="desk-stars">★★★★★</span> 4.9 · (1,640 reviews)
      </span>
    </div>
  </>
);

// ─────────────────────────────────────────────
// SECTION: WHAT YOU'LL GET STRIP
// ─────────────────────────────────────────────
const WYGStrip = () => (
  <div className="desk-wyg">
    <div className="desk-wyg-title">What You'll Receive</div>
    <div className="desk-wyg-grid">
      {[
        { icon: "📸", label: "Photo Proof of Offering" },
        { icon: "🙏", label: "Your Name & Gotra Mentioned" },
        { icon: "📦", label: "Prasad Delivered" },
        { icon: "✅", label: "100% Verified Purohits" },
      ].map((item) => (
        <div className="desk-wyg-item" key={item.label}>
          <div className="desk-wyg-icon">{item.icon}</div>
          <div className="desk-wyg-label">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// SECTION: TABS — About / Items / Reviews / FAQs
// ─────────────────────────────────────────────
const TabAbout = () => (
  <>
    <p className="desk-about-desc">
      Offering Sindoor and a Rose Garland to Hanuman Ji on Bada Mangal is one
      of the most auspicious acts a devotee can perform. Sindoor is especially
      dear to Hanuman Ji — it is said that he applied sindoor all over his body
      out of devotion to Shri Ram. Offering it at Hanuman Garhi in Ayodhya, one
      of the most sacred Hanuman shrines, carries immense spiritual significance.
    </p>
    <p className="desk-about-desc">
      Our verified purohit at the temple makes the offering in your name and
      gotra, personally presenting each item before the deity. You receive a
      photo confirmation and your name is announced at the shrine during the
      offering.
    </p>
    <div className="desk-includes">
      <div className="desk-includes-title">✦ YOUR CHADAVA INCLUDES</div>
      {[
        "Name & Gotra announced at the shrine before offering",
        "Photo confirmation of offering at the deity's feet",
        "WhatsApp notification when photo is ready",
        "Prasad from the temple delivered to your doorstep",
      ].map((item) => (
        <div className="desk-includes-item" key={item}>{item}</div>
      ))}
    </div>
    <div className="desk-promise" style={{ marginTop: 20 }}>
      <div className="desk-promise-title">🛡 Sri Arpan Promise</div>
      <div className="desk-promise-desc">
        If the offering is not made or the photo proof is not delivered, we
        guarantee a 100% refund. Your devotion is completely safe with us.
      </div>
      <div className="desk-promise-tags">
        {["✓ 100% Refund", "✓ Guaranteed Photo", "✓ No Questions Asked"].map(
          (t) => (
            <span className="desk-promise-tag" key={t}>{t}</span>
          )
        )}
      </div>
    </div>
  </>
);

const TabItems = () => (
  <>
    <p className="desk-about-desc" style={{ marginBottom: 18 }}>
      Each item in this Chadava has deep Vedic significance. Understanding what
      is being offered and why makes the act of Chadava even more meaningful.
    </p>
    <div className="desk-items-grid">
      {[
        { icon: "🔴", name: "Sindoor", desc: "Offered in the exact manner Hanuman Ji applied it to himself as a symbol of devotion to Shri Ram.", sig: "✦ Invokes strength, protection & courage" },
        { icon: "🌹", name: "Rose Garland", desc: "Fresh roses woven into a garland, placed at the feet of Hanuman Ji as a symbol of love and devotion.", sig: "✦ Brings joy, positivity & blessings" },
        { icon: "🪔", name: "Diya (Lamp)", desc: "A lit diya placed before the deity as part of the offering — dispels darkness and negative energy.", sig: "✦ Removes obstacles & fear" },
        { icon: "🍬", name: "Boondi Prasad", desc: "Sweet boondi is Hanuman Ji's favourite prasad — offered to the deity and distributed among devotees.", sig: "✦ Earns divine grace & merit" },
      ].map((item) => (
        <div className="desk-item-box" key={item.name}>
          <div className="desk-item-icon">{item.icon}</div>
          <div>
            <div className="desk-item-name">{item.name}</div>
            <div className="desk-item-desc">{item.desc}</div>
            <div className="desk-item-significance">{item.sig}</div>
          </div>
        </div>
      ))}
    </div>
  </>
);

const TabReviews = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, background: "var(--cream)", borderRadius: 12, marginBottom: 18 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 700, color: "var(--text-dark)", lineHeight: 1 }}>4.9</div>
        <div style={{ color: "var(--gold)", fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>1,640 reviews</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
        {[{ star: 5, pct: "89%" }, { star: 4, pct: "9%" }].map((r) => (
          <div key={r.star} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)", width: 14 }}>{r.star}</span>
            <div style={{ flex: 1, height: 5, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: r.pct, height: "100%", background: "var(--gold)", borderRadius: 3 }}></div>
            </div>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{r.pct}</span>
          </div>
        ))}
      </div>
    </div>
    {[
      { initials: "RK", name: "Rajesh Kumar", meta: "London, UK · Apr 2025", text: "The photo of the sindoor being offered at Hanuman Garhi with my name announced — I felt so connected to Ayodhya from thousands of miles away. The prasad arrived within a week. Absolutely authentic." },
      { initials: "PS", name: "Priya Sharma", meta: "Bengaluru · Mar 2025", text: "I offer this every Bada Mangal for my husband's business. The photo is so clear — you can see the sindoor and garland at the deity's feet. I've recommended Sri Arpan to everyone in my circle." },
      { initials: "AM", name: "Anjali Mehta", meta: "Dubai, UAE · Feb 2025", text: "Knowing my gotra was announced at Hanuman Garhi during the offering gave me incredible peace. The experience is completely authentic — not just a photo but a real connection." },
    ].map((r) => (
      <div className="desk-review-card" key={r.name}>
        <div className="desk-review-header">
          <div className="desk-review-avatar">{r.initials}</div>
          <div>
            <div className="desk-review-name">{r.name}</div>
            <div className="desk-review-meta">{r.meta}</div>
          </div>
          <div className="desk-review-stars">★★★★★</div>
        </div>
        <div className="desk-review-text">"{r.text}"</div>
      </div>
    ))}
  </>
);

const TabFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "How will I receive proof of my Chadava?", a: "You receive a clear photo of your offering at the deity's feet, delivered inside the Sri Arpan app. A WhatsApp notification is sent when ready — typically within 24 hours of the offering date." },
    { q: "I don't know my Gotra. What should I do?", a: 'Tick the "I don\'t know my Gotra" checkbox in the details step. We will use "Kashyap" — the traditional universal Gotra. The offering is fully valid and equally auspicious.' },
    { q: "Are the items freshly offered on the day?", a: "Yes — all items are purchased fresh on the offering date and offered to the deity by our verified purohit on the same day. Nothing is reused or pre-offered." },
    { q: "When will the Prasad arrive?", a: "Prasad is dispatched within 2–3 days of the offering and typically arrives in 7–10 business days across India. International delivery may take 14–21 days." },
    { q: "What if the offering is not made?", a: "Sri Arpan guarantees a 100% refund if the Chadava is not offered or the photo proof is not delivered. No questions asked." },
    { q: "Can I choose a specific date for my Chadava?", a: "Each Chadava listing is tied to a specific auspicious date or occasion. If you want a specific date not shown, contact our team via WhatsApp and we will try our best to accommodate it." },
  ];
  return (
    <div>
      {faqs.map((faq, i) => (
        <div className="desk-faq-item" key={i}>
          <div className="desk-faq-q" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
            {faq.q}
            <span className={`desk-faq-icon${openIndex === i ? " open" : ""}`}>+</span>
          </div>
          {openIndex === i && <div className="desk-faq-a">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
};

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState("about");
  const tabs = [
    { id: "about", label: "About Chadava" },
    { id: "items", label: "Items Included" },
    { id: "reviews", label: "Reviews" },
    { id: "faqs", label: "FAQs" },
  ];
  return (
    <>
      <div className="desk-tabs">
        {tabs.map((t) => (
          <div
            key={t.id}
            className={`desk-tab${activeTab === t.id ? " active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </div>
        ))}
      </div>
      {activeTab === "about" && <TabAbout />}
      {activeTab === "items" && <TabItems />}
      {activeTab === "reviews" && <TabReviews />}
      {activeTab === "faqs" && <TabFAQs />}
    </>
  );
};

// ─────────────────────────────────────────────
// SECTION: RIGHT STICKY PANEL
// ─────────────────────────────────────────────
const StickyPanel = ({ onOfferClick }) => (
  <div className="desk-sticky-panel">
    <div className="desk-panel-card">
      <div className="desk-panel-header">
        <div className="desk-panel-name">Sindoor & Rose Garland Chadava</div>
        <div className="desk-panel-temple">🛕 Hanuman Garhi, Ayodhya · 05 May 2025</div>
      </div>
      <div className="desk-panel-body">
        <div className="desk-panel-from">
          <div className="desk-panel-from-label">Starting from</div>
          <div className="desk-panel-from-price">₹251</div>
          <div className="desk-panel-from-sub">Flowers · Grand · Festival offering sets available</div>
        </div>
        <div className="desk-panel-includes">
          {[
            "Photo Proof of Offering",
            "Your Name & Gotra Mentioned",
            "Prasad Delivered to Doorstep",
            "100% Verified Authentic Purohit",
          ].map((item) => (
            <div className="desk-panel-includes-item" key={item}>{item}</div>
          ))}
        </div>
        <button className="desk-offer-btn" onClick={onOfferClick}>
          🌸 Offer Now — from ₹251
        </button>
        <div className="desk-panel-secure">🔒 100% Secure · UPI · Cards · Net Banking</div>
      </div>
    </div>
    <div className="desk-panel-note">
      <div className="desk-panel-note-icon">📸</div>
      <div className="desk-panel-note-text">
        <strong>Photo delivered in Sri Arpan App</strong>
        Download the app & sign in with your booking number to receive your offering photo.
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step Indicator
// ─────────────────────────────────────────────
const StepDots = ({ current, total = 5 }) => (
  <div className="bs-step-indicator">
    {Array.from({ length: total }, (_, i) => {
      const cls = i + 1 < current ? "done" : i + 1 === current ? "active" : "";
      return <div key={i} className={`bs-step-dot${cls ? " " + cls : ""}`}></div>;
    })}
  </div>
);

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step 1 (Package Selection)
// ─────────────────────────────────────────────
const packages = [
  { id: "pkg-1", emoji: "🌸", name: "Flowers & Garland", chips: ["🌹 Rose Garland", "💐 Marigold", "🪔 Diya"], desc: "Fresh flowers and garland placed at Hanuman Ji's feet", price: 251, payLabel: "Flowers & Garland Chadava" },
  { id: "pkg-2", emoji: "🔴", name: "Sindoor & Rose Garland", chips: ["🔴 Sindoor", "🌹 Rose Garland", "🪔 Diya", "🍬 Boondi"], desc: "Most beloved Chadava for Hanuman Ji — complete with sindoor", price: 351, payLabel: "Sindoor + Rose Garland Chadava", popular: true },
  { id: "pkg-3", emoji: "🎁", name: "Grand Offering Set", chips: ["🔴 Sindoor", "🌹 Garland", "🍬 Sweets", "🍃 Bilwa Patra", "🪔 5 Diyas"], desc: "A complete grand offering — ideal for special occasions", price: 601, payLabel: "Grand Offering Chadava" },
  { id: "pkg-4", emoji: "✨", name: "Bada Mangal Festival Set", chips: ["🔴 Sindoor", "🌹 Garland", "🍬 Grand Sweets", "🍃 Bilwa", "🧡 Vastra", "🪔 11 Diyas"], desc: "Full festival offering with vastra & special prasad — maximum merit", price: 1001, payLabel: "Bada Mangal Festival Chadava" },
];

const Step1PackageSelection = ({ selectedPkg, onSelect, total, onNext, onClose }) => (
  <>
    <div className="bs-header">
      <button className="bs-close" onClick={onClose}>✕</button>
      <div className="bs-title">Select Chadava Set</div>
      <StepDots current={1} />
    </div>
    <div className="bs-content">
      <div className="bs-pkg-intro">Choose what you'd like to offer at the feet of Hanuman Ji. All items are offered fresh in your name & gotra.</div>
      <div className="bs-pkg-cards">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bs-pkg-card${pkg.popular ? " popular" : ""}${selectedPkg === pkg.id ? " selected" : ""}`}
            onClick={() => onSelect(pkg.id, pkg.name, pkg.price, pkg.payLabel)}
          >
            <div className="bs-pkg-radio"></div>
            <div className="bs-pkg-img">{pkg.emoji}</div>
            <div className="bs-pkg-info">
              <div className="bs-pkg-name">
                {pkg.name}
                {pkg.popular && <span className="bs-popular-badge">POPULAR</span>}
              </div>
              <div className="bs-pkg-items">
                {pkg.chips.map((c) => <span className="bs-pkg-item-chip" key={c}>{c}</span>)}
              </div>
              <div className="bs-pkg-desc">{pkg.desc}</div>
              <div className="bs-pkg-price">₹{pkg.price.toLocaleString("en-IN")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bs-footer">
      <div className="bs-total-row">
        <span className="bs-total-label">Total Amount</span>
        <span className="bs-total-price">₹{total.toLocaleString("en-IN")}</span>
      </div>
      <button className="bs-continue-btn" onClick={onNext}>Continue →</button>
      <div className="bs-secure">🔒 100% Safe & Secure</div>
    </div>
  </>
);

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step 2 (WhatsApp)
// ─────────────────────────────────────────────
const Step2WhatsApp = ({ waNum, onWaChange, total, onNext, onBack }) => (
  <>
    <div className="bs-header">
      <button className="bs-back" onClick={onBack}>←</button>
      <div className="bs-title">Your WhatsApp Number</div>
      <StepDots current={2} />
    </div>
    <div className="bs-content">
      <div className="bs-wa-icon">📲</div>
      <div className="bs-wa-title">Enter Your Number</div>
      <div className="bs-wa-desc">We'll send a WhatsApp notification as soon as your Chadava photo is ready in the Sri Arpan App.</div>
      <div className="bs-wa-wrap">
        <div className="bs-wa-prefix">📱 +91</div>
        <input className="bs-wa-input" type="tel" placeholder="Enter mobile number" value={waNum} onChange={(e) => onWaChange(e.target.value)} />
      </div>
      <div className="bs-wa-notice">
        <span className="bs-wa-notice-icon">📸</span>
        <div className="bs-wa-notice-text">
          <strong>Chadava photo in Sri Arpan App</strong>
          Download the app & sign in with this number to receive your photo proof of the offering anytime.
        </div>
      </div>
      <div className="bs-tandc">
        By proceeding you agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> of Sri Arpan
      </div>
    </div>
    <div className="bs-footer">
      <div className="bs-total-row">
        <span className="bs-total-label">Total Amount</span>
        <span className="bs-total-price">₹{total.toLocaleString("en-IN")}</span>
      </div>
      <button className="bs-continue-btn" onClick={onNext} disabled={waNum.length < 10}>Continue →</button>
      <div className="bs-secure">🔒 100% Safe & Secure</div>
    </div>
  </>
);

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step 3 (Add-ons / Upsells)
// ─────────────────────────────────────────────
const upsells = [
  { emoji: "🍬", bg: "linear-gradient(135deg, #1A4A3A, #2A6A55)", badge: "✦ Hanuman Ji's Favourite", name: "Panchamrit & Sweet Bhog", price: 201, desc: "Special sweet bhog offered before the deity" },
  { emoji: "🪔", bg: "linear-gradient(135deg, #4A3A0A, #8A6A20)", name: "108 Diya Deep Daan", price: 251, desc: "108 diyas lit before Hanuman Ji in your name" },
  { emoji: "🌾", bg: "linear-gradient(135deg, #5C1A2A, #8B2535)", name: "Anna Daan at Temple", price: 501, desc: "Feed 10 people at the temple langara in your name" },
  { emoji: "🐄", bg: "linear-gradient(135deg, #3A2A10, #6A4820)", name: "Gau Seva", price: 301, desc: "Feed sacred cows near the temple in your name" },
];

const Step3Addons = ({ addons, onToggle, total, onNext, onBack }) => (
  <>
    <div className="bs-header">
      <button className="bs-back" onClick={onBack}>←</button>
      <div className="bs-title">Add More Offerings</div>
      <StepDots current={3} />
    </div>
    <div className="bs-content">
      <div className="bs-upsell-intro">Enhance your Chadava with these additional offerings — each performed in your name & gotra with photo proof.</div>
      {upsells.map((u) => {
        const added = addons.some((a) => a.name === u.name);
        return (
          <div className="bs-upsell-item" key={u.name}>
            <div className="bs-upsell-img" style={{ background: u.bg }}>{u.emoji}</div>
            <div className="bs-upsell-info">
              {u.badge && <span className="bs-upsell-badge">{u.badge}</span>}
              <div className="bs-upsell-name">{u.name}</div>
              <div className="bs-upsell-price">₹{u.price}</div>
              <div className="bs-upsell-desc">{u.desc}</div>
            </div>
            <button className={`bs-add-btn${added ? " added" : ""}`} onClick={() => onToggle(u.name, u.price)}>
              {added ? "✓ Added" : "+ Add"}
            </button>
          </div>
        );
      })}
      <div className="bs-skip-link" onClick={onNext}>Skip and proceed to payment →</div>
    </div>
    <div className="bs-footer">
      <div className="bs-total-row">
        <span className="bs-total-label">Total Amount</span>
        <span className="bs-total-price">₹{total.toLocaleString("en-IN")}</span>
      </div>
      <button className="bs-continue-btn" onClick={onNext}>Proceed to Payment →</button>
      <div className="bs-secure">🔒 100% Safe & Secure</div>
    </div>
  </>
);

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step 4 (Payment)
// ─────────────────────────────────────────────
const payMethods = [
  { icon: "📱", label: "UPI / GPay" },
  { icon: "💳", label: "Credit / Debit" },
  { icon: "🏦", label: "Net Banking" },
  { icon: "💰", label: "Wallet" },
];

const Step4Payment = ({ pkgName, pkgPrice, addons, total, onNext, onBack }) => {
  const [selectedPay, setSelectedPay] = useState(0);
  const fmt = (n) => "₹" + n.toLocaleString("en-IN");
  return (
    <>
      <div className="bs-header">
        <button className="bs-back" onClick={onBack}>←</button>
        <div className="bs-title">Payment</div>
        <StepDots current={4} />
      </div>
      <div className="bs-content">
        <div className="bs-order-summary">
          <div className="bs-order-title">Offering Summary</div>
          <div className="bs-order-row">
            <span>{pkgName}</span>
            <span className="bs-order-price">{fmt(pkgPrice)}</span>
          </div>
          {addons.map((a) => (
            <div className="bs-order-row" key={a.name}>
              <span>{a.name}</span>
              <span className="bs-order-price">{fmt(a.price)}</span>
            </div>
          ))}
          <div className="bs-order-row total">
            <span>Total</span>
            <span className="bs-order-price">{fmt(total)}</span>
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-dark)", marginBottom: 10 }}>Choose Payment Method</div>
        <div className="bs-payment-methods">
          {payMethods.map((m, i) => (
            <div key={m.label} className={`bs-pay-method${selectedPay === i ? " selected" : ""}`} onClick={() => setSelectedPay(i)}>
              <div className="bs-pay-icon">{m.icon}</div>
              <div className="bs-pay-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="bs-coupon-row">
          <input className="bs-coupon-input" type="text" placeholder="Have a coupon code?" />
          <button className="bs-coupon-btn">Apply</button>
        </div>
      </div>
      <div className="bs-footer">
        <div className="bs-total-row">
          <span className="bs-total-label">Pay Now</span>
          <span className="bs-total-price">{fmt(total)}</span>
        </div>
        <button className="bs-continue-btn" onClick={onNext}>Pay Securely →</button>
        <div className="bs-secure">🔒 256-bit SSL · RazorPay</div>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Step 5 (Personalise Chadava)
// ─────────────────────────────────────────────
const Step5Details = ({ total, onConfirm }) => {
  const [gotraDisabled, setGotraDisabled] = useState(false);
  const [gotra, setGotra] = useState("");
  const toggleGotra = (checked) => {
    setGotraDisabled(checked);
    setGotra(checked ? "Kashyap (Default)" : "");
  };
  return (
    <>
      <div className="bs-header">
        <div style={{ width: 30 }}></div>
        <div className="bs-title">Personalise Your Chadava</div>
        <StepDots current={5} />
      </div>
      <div className="bs-content">
        <div className="bs-success-banner">
          <span className="bs-success-icon">✅</span>
          <div>
            <div className="bs-success-title">Payment Confirmed! 🙏</div>
            <div className="bs-success-sub">Now personalise your Chadava. Your name will be announced at the shrine during the offering.</div>
          </div>
        </div>
        <div className="bs-details-form">
          <div>
            <span className="bs-field-label">Your Full Name</span>
            <span className="bs-field-hint">Will be announced at the shrine before the Chadava is offered</span>
            <input className="bs-detail-input" type="text" placeholder="First and Last Name" />
          </div>
          <div>
            <span className="bs-field-label">Your Gotra</span>
            <span className="bs-field-hint">Will be recited along with your name at the shrine</span>
            <input className="bs-detail-input" type="text" placeholder="e.g. Kashyap, Bharadwaj, Atri..." value={gotra} disabled={gotraDisabled} onChange={(e) => setGotra(e.target.value)} style={gotraDisabled ? { color: "var(--text-muted)" } : {}} />
            <div className="bs-gotra-check">
              <input type="checkbox" id="gc" onChange={(e) => toggleGotra(e.target.checked)} />
              <label htmlFor="gc">I don't know my Gotra — use Kashyap</label>
            </div>
          </div>
          <div>
            <span className="bs-field-label">Occasion (Optional)</span>
            <span className="bs-field-hint">E.g. "For business success", "Son's birthday", "Mother's health"</span>
            <input className="bs-detail-input" type="text" placeholder="Enter occasion or intention" />
          </div>
          <div>
            <span className="bs-field-label">Prasad Delivery Address</span>
            <span className="bs-field-hint">Temple prasad will be delivered here</span>
            <input className="bs-detail-input" type="text" placeholder="House No, Street, City, Pincode" />
          </div>
          <div style={{ height: 14 }}></div>
          <div className="bs-photo-note">
            <span className="bs-photo-note-icon">📸</span>
            <div>
              <div className="bs-photo-note-title">Chadava Photo in Sri Arpan App</div>
              <div className="bs-photo-note-text">Your offering photo will be available in the app. Download it and sign in with your booking number to receive it anytime.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bs-footer">
        <button className="bs-continue-btn" style={{ background: "var(--rose)" }} onClick={onConfirm}>
          Confirm Chadava 🙏
        </button>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────
// SECTION: BOTTOM SHEET — Full Multi-Step Flow
// ─────────────────────────────────────────────
const BottomSheet = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedPkg, setSelectedPkg] = useState("pkg-2");
  const [pkgInfo, setPkgInfo] = useState({ name: "Sindoor & Rose Garland", price: 351, payLabel: "Sindoor + Rose Garland Chadava" });
  const [addons, setAddons] = useState([]);
  const [waNum, setWaNum] = useState("");

  const total = pkgInfo.price + addons.reduce((s, a) => s + a.price, 0);

  const selectPkg = (id, name, price, payLabel) => {
    setSelectedPkg(id);
    setPkgInfo({ name, price, payLabel });
  };

  const toggleAddon = (name, price) => {
    setAddons((prev) =>
      prev.some((a) => a.name === name)
        ? prev.filter((a) => a.name !== name)
        : [...prev, { name, price }]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="bs-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bs-sheet">
        <div className="bs-handle"></div>
        {step === 1 && <Step1PackageSelection selectedPkg={selectedPkg} onSelect={selectPkg} total={total} onNext={() => setStep(2)} onClose={onClose} />}
        {step === 2 && <Step2WhatsApp waNum={waNum} onWaChange={setWaNum} total={total} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3Addons addons={addons} onToggle={toggleAddon} total={total} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <Step4Payment pkgName={pkgInfo.payLabel} pkgPrice={pkgInfo.price} addons={addons} total={total} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
        {step === 5 && <Step5Details total={total} onConfirm={() => { alert("Chadava confirmed! 🙏 Jai Hanuman. Your offering will be made at Hanuman Garhi in your name & gotra."); onClose(); setStep(1); }} />}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// ROOT COMPONENT: SriArpanChadavaBooking
// ─────────────────────────────────────────────
export default function SriArpanChadavaBooking() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="desk-page">

        {/* ── Navbar ── */}
        <Navbar onOfferClick={() => setSheetOpen(true)} />

        <div className="desk-layout">
          {/* ── Left Column ── */}
          <div>
            {/* ── Hero Image ── */}
            <HeroImage />

            {/* ── Chadava Header Info ── */}
            <ChadavaHeader />

            {/* ── What You'll Get Strip ── */}
            <WYGStrip />

            {/* ── Content Tabs (About / Items / Reviews / FAQs) ── */}
            <ContentTabs />
          </div>

          {/* ── Right Sticky Panel ── */}
          <StickyPanel onOfferClick={() => setSheetOpen(true)} />
        </div>
      </div>

      {/* ── Bottom Sheet (5-Step Booking Flow) ── */}
      <BottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} />
    </>
  );
}


