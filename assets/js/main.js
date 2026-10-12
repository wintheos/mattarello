/* Mattarello — интерактив сайта. Без зависимостей. */
(function () {
  'use strict';

  var IMG = 'assets/img/';

  /* ---------- Данные ---------- */

  var PAIRS = [
    { id: 'tagliatelle', short: 'Тальятелле', name: 'Tagliatelle al ragù', desc: 'Тальятелле с говяжьим рагу, томлённым 6 часов, и пармезаном', price: '790 ₽', wine: 'Санджовезе, Тоскана', wPrice: '450 ₽', why: 'Кислотность вина освежает насыщенное рагу', img: 'pasta-tagliatelle.jpg', alt: 'Тальятелле с рагу в кремовой миске' },
    { id: 'cacio', short: 'Качо э пепе', name: 'Tonnarelli cacio e pepe', desc: 'Толстые спагетти с пекорино и свежемолотым перцем', price: '650 ₽', wine: 'Фраскати, Лацио', wPrice: '380 ₽', why: 'Лёгкое белое из того же региона, что и паста', img: 'pasta-cacio-e-pepe.jpg', alt: 'Тоннарелли качо э пепе в кремовой миске' },
    { id: 'ravioli', short: 'Равиоли', name: 'Ravioli ricotta e spinaci', desc: 'Равиоли с рикоттой и шпинатом в шалфейном масле', price: '720 ₽', wine: 'Верментино, Сардиния', wPrice: '420 ₽', why: 'Травянистые ноты вина вторят шалфею', img: 'pasta-ravioli.jpg', alt: 'Равиоли с рикоттой в шалфейном масле' },
    { id: 'pappardelle', short: 'Паппарделле', name: 'Pappardelle ai funghi', desc: 'Широкая лента с лесными грибами и тимьяном', price: '760 ₽', wine: 'Неббиоло, Пьемонт', wPrice: '590 ₽', why: 'Землистые тона вина — пара к грибам', img: 'pasta-pappardelle.jpg', alt: 'Паппарделле с лесными грибами' }
  ];

  var MENU = [
    { id: 'antipasti', label: 'Антипасти', it: 'antipasti', ru: 'Закуски', note: 'Удобно брать на компанию — по одной на двоих.', food: true, items: [
      { name: 'Burrata', desc: 'Буррата, печёные томаты, базилик, оливковое масло', price: '690 ₽', veg: true },
      { name: 'Vitello tonnato', desc: 'Тонко нарезанная телятина под соусом из тунца и каперсов', price: '720 ₽' },
      { name: 'Bruschette miste', desc: 'Три брускетты: томаты, рикотта с мёдом, грибы', price: '490 ₽', veg: true },
      { name: 'Tagliere', desc: 'Доска сыров и салюми с фокаччей и джемом из инжира', price: '1190 ₽' },
      { name: 'Olive e focaccia', desc: 'Тёплая фокачча из нашей печи и маринованные оливки', price: '350 ₽', veg: true }
    ]},
    { id: 'pasta', label: 'Паста', it: 'pasta fresca', ru: 'Свежая паста', note: 'Раскатываем каждое утро. Половинная порция — минус 30%.', food: true, items: [
      { name: 'Tagliatelle al ragù', desc: 'Говяжье рагу, томлённое 6 часов, пармезан', price: '790 ₽', pair: 'Санджовезе', img: 'pasta-tagliatelle.jpg', alt: 'Тальятелле с рагу' },
      { name: 'Tonnarelli cacio e pepe', desc: 'Пекорино романо, свежемолотый чёрный перец', price: '650 ₽', veg: true, pair: 'Фраскати', img: 'pasta-cacio-e-pepe.jpg', alt: 'Тоннарелли качо э пепе' },
      { name: 'Ravioli ricotta e spinaci', desc: 'Рикотта и шпинат, шалфейное масло', price: '720 ₽', veg: true, pair: 'Верментино', img: 'pasta-ravioli.jpg', alt: 'Равиоли с рикоттой и шпинатом' },
      { name: 'Pappardelle ai funghi', desc: 'Лесные грибы, тимьян, сливочное масло', price: '760 ₽', veg: true, pair: 'Неббиоло', img: 'pasta-pappardelle.jpg', alt: 'Паппарделле с грибами' },
      { name: 'Spaghetti alle vongole', desc: 'Вонголе, белое вино, чеснок, петрушка', price: '890 ₽', pair: 'Фалангина', img: 'pasta-vongole.jpg', alt: 'Спагетти с вонголе' },
      { name: 'Pasta del giorno', desc: 'Сегодня — тальолини с лимоном и боттаргой', price: '690 ₽' }
    ]},
    { id: 'dolci', label: 'Десерты', it: 'dolci', ru: 'Десерты', note: 'Готовим сами, в небольших количествах.', food: true, items: [
      { name: 'Tiramisù', desc: 'Савоярди, маскарпоне, эспрессо', price: '450 ₽', veg: true },
      { name: 'Panna cotta', desc: 'Ванильная панна-котта с вишней в вине', price: '390 ₽', veg: true },
      { name: 'Cannolo', desc: 'Хрустящая трубочка с рикоттой и фисташкой', price: '320 ₽', veg: true }
    ]},
    { id: 'vino', label: 'Вино', it: 'al calice', ru: 'Вино по бокалам', note: 'Бокал 150 мл. Бутылку откроем для компании.', items: [
      { name: 'Vino del giorno', desc: 'Сегодня — Rosso di Montalcino, Тоскана', price: '390 ₽' },
      { name: 'Sangiovese', desc: 'Тоскана · красное, сухое, вишня и травы', price: '450 ₽' },
      { name: 'Nebbiolo', desc: 'Пьемонт · красное, роза, земля, танины', price: '590 ₽' },
      { name: 'Vermentino', desc: 'Сардиния · белое, цитрус и средиземноморские травы', price: '420 ₽' },
      { name: 'Frascati', desc: 'Лацио · белое, лёгкое, миндаль и груша', price: '380 ₽' },
      { name: 'Lambrusco', desc: 'Эмилия-Романья · игристое красное', price: '390 ₽' }
    ]},
    { id: 'aperitivo', label: 'Аперитиво', it: 'aperitivo', ru: 'Аперитиво', note: 'По пятницам с 18:00 до 20:00 — с брускеттой.', items: [
      { name: 'Spritz', desc: 'Классический или с лимончелло', price: '550 ₽' },
      { name: 'Negroni', desc: 'Джин, красный вермут, биттер', price: '650 ₽' },
      { name: 'Limonata', desc: 'Домашний лимонад с розмарином, без алкоголя', price: '290 ₽' }
    ]}
  ];

  /* ---------- Утилиты ---------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- Мобильная навигация ---------- */

  function initNav() {
    var panel = $('#mobile-nav');
    var openBtn = $('[data-nav-open]');
    if (!panel || !openBtn) return;

    function open() {
      panel.hidden = false;
      document.body.classList.add('nav-open');
      openBtn.setAttribute('aria-expanded', 'true');
      var first = $('.mobile-nav__links a', panel);
      if (first) first.focus();
    }
    function close(returnFocus) {
      panel.hidden = true;
      document.body.classList.remove('nav-open');
      openBtn.setAttribute('aria-expanded', 'false');
      if (returnFocus) openBtn.focus();
    }
    openBtn.addEventListener('click', open);
    $all('[data-nav-close]', panel).forEach(function (n) {
      n.addEventListener('click', function () { close(n.tagName === 'BUTTON'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) close(true);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900 && !panel.hidden) close(false);
    });
  }

  /* ---------- Подбор вина к пасте ---------- */

  function initPairing() {
    var chipsBox = $('[data-pair-chips]');
    if (!chipsBox) return;
    var out = {};
    $all('[data-pair]').forEach(function (n) { out[n.getAttribute('data-pair')] = n; });
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var chips = PAIRS.map(function (p, i) {
      var b = el('button', 'chip', p.short);
      b.type = 'button';
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      b.addEventListener('click', function () { select(i); });
      chipsBox.appendChild(b);
      return b;
    });

    // предзагрузка фото, чтобы переключение было мгновенным
    PAIRS.forEach(function (p) { var im = new Image(); im.src = IMG + p.img; });

    function select(i) {
      var p = PAIRS[i];
      chips.forEach(function (c, j) { c.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
      ['name', 'desc', 'price', 'wine', 'wPrice', 'why'].forEach(function (k) {
        if (out[k]) out[k].textContent = p[k];
      });
      var img = out.img;
      if (!img) return;
      var apply = function () { img.src = IMG + p.img; img.alt = p.alt; img.style.opacity = 1; };
      if (reduce) { apply(); return; }
      img.style.opacity = 0;
      setTimeout(apply, 180);
    }
  }

  /* ---------- Бронирование ---------- */

  function initBooking() {
    var form = $('[data-booking]');
    if (!form) return;
    var guests = '2';
    $all('[data-guests] .guest', form).forEach(function (b, _, all) {
      b.addEventListener('click', function () {
        all.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        guests = b.getAttribute('data-value');
      });
    });

    var date = form.elements.date;
    if (date) {
      var d = new Date();
      var iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      date.min = iso;
      date.value = iso;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['name', 'phone', 'date', 'time'].forEach(function (k) {
        var f = form.elements[k];
        var bad = !f.value.trim() || (k === 'phone' && f.value.replace(/\D/g, '').length < 10);
        f.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad && ok) { f.focus(); ok = false; }
      });
      if (!ok) return;
      var when = new Date(form.elements.date.value + 'T00:00');
      var dateText = isNaN(when) ? form.elements.date.value : when.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
      var done = $('[data-booking-done]', form);
      $('[data-booking-summary]', form).textContent =
        form.elements.name.value.trim() + ', ждём вас ' + dateText + ' в ' + form.elements.time.value +
        ', гостей: ' + guests + '. Перезвоним на ' + form.elements.phone.value.trim() + ', чтобы подтвердить. ' +
        '(Это демо-сайт — заявка никуда не отправляется.)';
      done.hidden = false;
      done.focus();
    });
  }

  /* ---------- Страница меню ---------- */

  function initMenu() {
    var topTabs = $('[data-menu-tabs]');
    var sideTabs = $('[data-side-tabs]');
    if (!topTabs || !sideTabs) return;

    var state = { cat: 1, veg: false };
    var fromHash = MENU.map(function (c) { return c.id; }).indexOf(location.hash.slice(1));
    if (fromHash >= 0) state.cat = fromHash;

    var photoBox = $('[data-dishes-photo]');
    var listBox = $('[data-dishes-list]');
    var empty = $('[data-empty]');
    var vegBtns = $all('[data-veg]');
    var catFields = {};
    $all('[data-cat]').forEach(function (n) { catFields[n.getAttribute('data-cat')] = n; });

    function makeTab(c, i, side) {
      var b = el('button', side ? 'side-tab' : 'menu-tab');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'menu-panel');
      b.appendChild(el('span', null, c.label));
      if (side) b.appendChild(el('small', null, String(c.items.length)));
      b.addEventListener('click', function () { state.cat = i; render(true); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        state.cat = (state.cat + d + MENU.length) % MENU.length;
        render(true);
        (side ? sideList : topList)[state.cat].focus();
      });
      return b;
    }
    var topList = MENU.map(function (c, i) { var b = makeTab(c, i, false); topTabs.appendChild(b); return b; });
    var sideList = MENU.map(function (c, i) { var b = makeTab(c, i, true); sideTabs.appendChild(b); return b; });

    vegBtns.forEach(function (b) {
      b.addEventListener('click', function () { state.veg = !state.veg; render(false); });
    });

    function dishNode(d) {
      var art = el('article', 'dish' + (d.img ? '' : ' dish--plain'));
      if (d.img) {
        var im = el('img', 'dish__img');
        im.src = IMG + d.img; im.alt = d.alt || d.name; im.loading = 'lazy'; im.width = 720; im.height = 720;
        art.appendChild(im);
      }
      var body = el('div', 'dish__body');
      var line = el('div', 'dish__line');
      line.appendChild(el('h3', null, d.name));
      line.appendChild(el('span', 'dish__price', d.price));
      body.appendChild(line);
      body.appendChild(el('p', null, d.desc));
      if (d.veg || d.pair || d.img) {
        var tags = el('div', 'tags');
        if (d.veg) tags.appendChild(el('span', 'tag--veg', 'Вегетарианское'));
        if (d.pair) tags.appendChild(el('span', 'tag--pair', 'Пара: ' + d.pair));
        body.appendChild(tags);
      }
      art.appendChild(body);
      return art;
    }

    function render(updateHash) {
      var c = MENU[state.cat];
      [topList, sideList].forEach(function (list) {
        list.forEach(function (b, i) {
          b.setAttribute('aria-selected', i === state.cat ? 'true' : 'false');
          b.tabIndex = i === state.cat ? 0 : -1;
        });
      });
      var active = topList[state.cat];
      if (active && active.scrollIntoView && topTabs.scrollWidth > topTabs.clientWidth) {
        topTabs.scrollTo({ left: active.offsetLeft - 20, behavior: 'smooth' });
      }
      vegBtns.forEach(function (b) { b.setAttribute('aria-pressed', state.veg ? 'true' : 'false'); });
      catFields.it.textContent = c.it;
      catFields.ru.textContent = c.ru;
      catFields.note.textContent = c.note;

      var items = c.items.filter(function (d) { return !state.veg || !c.food || d.veg; });
      photoBox.textContent = '';
      listBox.textContent = '';
      items.forEach(function (d) { (d.img ? photoBox : listBox).appendChild(dishNode(d)); });
      photoBox.hidden = !photoBox.children.length;
      listBox.hidden = !listBox.children.length;
      empty.hidden = items.length > 0;

      if (updateHash && history.replaceState) history.replaceState(null, '', '#' + c.id);
    }
    render(false);

    window.addEventListener('hashchange', function () {
      var i = MENU.map(function (c) { return c.id; }).indexOf(location.hash.slice(1));
      if (i >= 0 && i !== state.cat) { state.cat = i; render(false); }
    });
  }

  /* ---------- Появление при скролле ---------- */

  function initReveal() {
    var items = $all('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    items.forEach(function (n) { io.observe(n); });
  }

  initNav();
  initPairing();
  initBooking();
  initMenu();
  initReveal();
})();
