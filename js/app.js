// ============================================================
// Pacific Loop — App Render Logic
// Reads from window.stops, window.postcards, window.budgetTiers
// ============================================================

(function() {
  'use strict';

  // Track currently expanded stop
  let activeStop = null;

  // ============================================================
  // Render the stops list
  // ============================================================
  function renderStops() {
    const container = document.getElementById('stops');
    if (!container) return;

    container.innerHTML = window.stops.map((s, i) => {
      const foodRows = s.food.map(f => {
        if (f[0]) {
          return `<li class="pick">
            <div>
              <div class="pick-name">${escapeHtml(f[1])}</div>
              <div class="pick-detail">${escapeHtml(f[2])}</div>
            </div>
            <span class="pick-tag ${f[0]}">${f[0]}</span>
          </li>`;
        } else {
          return `<li class="pick">
            <div>
              <div class="pick-name">${escapeHtml(f[1])}</div>
              <div class="pick-detail">${escapeHtml(f[2])}</div>
            </div>
          </li>`;
        }
      }).join('');

      const stayRows = s.stay.map(f => {
        const tag = f[0] ? `<span class="pick-tag ${f[0]}">${f[0]}</span>` : '';
        return `<li class="pick">
          <div>
            <div class="pick-name">${escapeHtml(f[1])}</div>
            <div class="pick-detail">${escapeHtml(f[2])}</div>
          </div>
          ${tag}
        </li>`;
      }).join('');

      const isRest = s.badges.some(b => b[0] === 'rest');
      const badges = s.badges.map(b => `<span class="badge ${b[0]}">${escapeHtml(b[1])}</span>`).join('');
      const postcardSvg = window.postcards[s.art] || '';

      return `<div class="stop-card ${isRest ? 'rest' : ''}" data-stop="${i}">
        <div class="stop-header">
          <div>
            <div class="stop-day">${escapeHtml(s.day)}</div>
            <div class="stop-name">${escapeHtml(s.name)}</div>
          </div>
          <div class="stop-stats">
            <div class="stop-stat-row">${escapeHtml(s.drive)}</div>
            <div class="stop-stat-row" style="opacity: 0.7;">${escapeHtml(s.arrival)}</div>
          </div>
        </div>
        <div class="stop-tagline">${escapeHtml(s.tagline)}</div>
        <div class="stop-badges">${badges}</div>
        <div class="stop-detail">
          <div class="postcard-wrap">${postcardSvg}</div>
          <div class="postcard-caption">${escapeHtml(s.caption)}</div>
          <div class="section">
            <div class="section-label">The Bo Zone</div>
            <div class="section-content">${escapeHtml(s.bowie)}</div>
          </div>
          <div class="section">
            <div class="section-label">Food + drink</div>
            <ul class="pick-list">${foodRows}</ul>
          </div>
          <div class="section">
            <div class="section-label">Where to sleep</div>
            <ul class="pick-list">${stayRows}</ul>
          </div>
          ${s.clark ? `<div class="clark-quote">${escapeHtml(s.clark)}</div>` : ''}
        </div>
      </div>`;
    }).join('');

    // Wire up click handlers (avoiding inline onclick for cleaner code)
    container.querySelectorAll('.stop-card').forEach(card => {
      card.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-stop'), 10);
        selectStop(idx);
      });
    });
  }

  // ============================================================
  // Render budget tiers footer
  // ============================================================
  function renderBudget() {
    const grid = document.getElementById('budget-grid');
    if (!grid || !window.budgetTiers) return;

    grid.innerHTML = window.budgetTiers.map(b => {
      const rows = b.rows.map(r =>
        `<div class="budget-row"><span>${escapeHtml(r[0])}</span><span>${escapeHtml(r[1])}</span></div>`
      ).join('');
      const stamp = b.featured ? '<div class="featured-stamp">Your target</div>' : '';
      return `<div class="budget-card ${b.featured ? 'featured' : ''}">
        ${stamp}
        <div class="budget-tier">${escapeHtml(b.tier)}</div>
        <div class="budget-amount">${escapeHtml(b.amount)}</div>
        ${rows}
        <div class="budget-vibe">${escapeHtml(b.vibe)}</div>
      </div>`;
    }).join('');
  }

  // ============================================================
  // Render meta strip from tripMeta
  // ============================================================
  function renderMeta() {
    const strip = document.getElementById('meta-strip');
    if (!strip || !window.tripMeta) return;

    const items = [
      ['Departing', window.tripMeta.departing],
      ['Returning', window.tripMeta.returning],
      ['Distance', window.tripMeta.distance],
      ['Duration', window.tripMeta.duration],
      ['The vessel', window.tripMeta.vehicle]
    ];
    strip.innerHTML = items.map(([label, value]) =>
      `<div class="meta-item"><div class="label">${escapeHtml(label)}</div><div class="value">${escapeHtml(value)}</div></div>`
    ).join('');
  }

  // ============================================================
  // Wire up map markers
  // ============================================================
  function wireMapMarkers() {
    document.querySelectorAll('.stop-marker').forEach(marker => {
      marker.addEventListener('click', function(e) {
        e.stopPropagation();
        const idx = parseInt(this.getAttribute('data-stop'), 10);
        selectStop(idx);
      });
    });
  }

  // ============================================================
  // Select / toggle a stop (expands card and highlights map marker)
  // ============================================================
  function selectStop(i) {
    document.querySelectorAll('.stop-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.stop-marker').forEach(m => m.classList.remove('active'));

    if (activeStop === i) {
      activeStop = null;
      return;
    }

    const card = document.querySelector(`.stop-card[data-stop="${i}"]`);
    const marker = document.querySelector(`.stop-marker[data-stop="${i}"]`);
    if (card) card.classList.add('active');
    if (marker) marker.classList.add('active');
    activeStop = i;

    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ============================================================
  // HTML escape helper (safety + correctness)
  // ============================================================
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ============================================================
  // Boot when DOM is ready
  // ============================================================
  function init() {
    renderMeta();
    renderStops();
    renderBudget();
    wireMapMarkers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
