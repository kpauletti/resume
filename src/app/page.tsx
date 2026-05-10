"use client";

import React, { useEffect, useRef, useState } from "react";

export const PROFILE = {
  name: "Kenneth Pauletti",
  role: "Full Stack Engineer",
  stack: "TypeScript · React",
  bio: "I build production web and mobile apps end-to-end — TypeScript on both sides.",
  links: [
    { kind: "site", label: "kennethpauletti.com", href: "https://kennethpauletti.com" },
    { kind: "github", label: "github.com/kpauletti", href: "https://github.com/kpauletti" },
    {
      kind: "linkedin",
      label: "linkedin.com/in/kpauletti",
      href: "https://linkedin.com/in/kpauletti",
    },
    { kind: "email", label: "hello@kennethpauletti.com", href: "mailto:hello@kennethpauletti.com" },
    { kind: "resume", label: "resume.pdf (deprecated)", href: "/resume.pdf" },
  ],
  skills: ["TYPESCRIPT", "REACT", "AWS", "REACT NATIVE", "NODEJS", "EXPRESS", "GRAPHQL", "DOCKER"],
};

const C = {
  bg: "#000",
  fg: "#dfeae5",
  dim: "#6a8580",
  accent: "#3dcab1",
  amber: "#f3c977",
  font: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
};

const BOOT_LINES_DESKTOP = [
  { d: 0, t: "[boot] kenneth.os v9.0 — initializing personal portfolio…" },
  { d: 240, t: "[ ok ] mounting /dev/typescript               read-write" },
  { d: 360, t: "[ ok ] mounting /dev/react                    read-write" },
  { d: 460, t: "[ ok ] mounting /dev/aws                      read-write" },
  { d: 540, t: "[ ok ] mounting /dev/react-native             read-write" },
  { d: 620, t: "[ ok ] starting node@20 …………………………………………… done" },
  { d: 740, t: "[ ok ] starting express …………………………………………… done" },
  { d: 820, t: "[ ok ] starting graphql …………………………………………… done" },
  { d: 900, t: "[ ok ] docker daemon up — 4 containers healthy" },
  { d: 1000, t: "[ ok ] checking inbox …………………………………………… 0 unread" },
  { d: 1100, t: "[ ok ] coffee.service     active (running)   since 07:14" },
  { d: 1240, t: "[warn] shipping.queue     deep — full stack engineer required" },
  { d: 1380, t: "[boot] resolving identity…" },
  { d: 1520, t: "  > whoami → kenneth pauletti" },
  { d: 1660, t: "  > role  → full stack engineer (typescript · react)" },
  { d: 1800, t: "  > status → open to work" },
  { d: 1960, t: "[boot] mounting profile.app …" },
  { d: 2120, t: "[ ok ] portfolio ready. press any link to continue." },
];

const BOOT_LINES_MOBILE = [
  { d: 0, t: "[boot] kenneth.os v9.0 …" },
  { d: 200, t: "[ ok ] /dev/typescript    rw" },
  { d: 320, t: "[ ok ] /dev/react         rw" },
  { d: 420, t: "[ ok ] /dev/aws           rw" },
  { d: 520, t: "[ ok ] /dev/react-native  rw" },
  { d: 620, t: "[ ok ] node@20           ok" },
  { d: 720, t: "[ ok ] express           ok" },
  { d: 820, t: "[ ok ] graphql           ok" },
  { d: 920, t: "[ ok ] docker · 4 healthy" },
  { d: 1020, t: "[ ok ] inbox · 0 unread" },
  { d: 1140, t: "[warn] queue deep — eng req'd" },
  { d: 1280, t: "[boot] resolving identity…" },
  { d: 1400, t: "  > kenneth pauletti" },
  { d: 1520, t: "  > full stack engineer" },
  { d: 1640, t: "  > open to work" },
  { d: 1780, t: "[boot] mounting profile.app …" },
  { d: 1920, t: "[ ok ] portfolio ready." },
];

function useContainerWidth(ref: React.RefObject<HTMLElement | null>) {
  const [w, setW] = useState(1200);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setW(e.contentRect.width);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return w;
}

function useLocalCursor(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: -9999, y: -9999, hover: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top, hover: true });
    };
    const onLeave = () => setPos(p => ({ ...p, hover: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
  return pos;
}

function useScramble(
  finalText: string,
  active: boolean,
  opts: { chars?: string; speed?: number } = {},
) {
  const chars = opts.chars ?? "!<>-_\\/[]{}—=+*^?#________";
  const speed = opts.speed ?? 38;
  const [scrambled, setScrambled] = useState(finalText);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const total = finalText.length;
    const start = performance.now();
    const tick = (t: number) => {
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / (total * speed));
      let s = "";
      for (let i = 0; i < total; i++) {
        const reveal = (i + 1) / total;
        s += progress >= reveal ? finalText[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      setScrambled(s);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, finalText, speed]); // eslint-disable-line react-hooks/exhaustive-deps
  return active ? scrambled : finalText;
}

function Marquee({
  items,
  sep = "▮",
  duration = 24,
  sepColor = "rgba(61,202,177,0.45)",
  style,
}: {
  items: string[];
  sep?: string;
  duration?: number;
  sepColor?: string;
  style?: React.CSSProperties;
}) {
  const all = [...items, ...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", ...style }}>
      <div
        style={{
          display: "inline-flex",
          gap: "2.4em",
          animation: `bp-marquee ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {all.map((s, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "2.4em" }}>
            {s}
            <span aria-hidden style={{ color: sepColor }}>
              {sep}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BootLink({
  href,
  label,
  kind,
  k,
  fs,
  pad,
}: {
  href: string;
  label: string;
  kind: string;
  k: number;
  fs: number;
  pad: string;
}) {
  const [h, setH] = useState(false);
  const text = useScramble(label, h, { speed: 18 });
  return (
    <a
      href={href}
      target={kind === "email" ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onTouchStart={() => setH(true)}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 10,
        alignItems: "baseline",
        padding: pad,
        textDecoration: "none",
        color: h ? C.accent : C.fg,
        background: h ? "rgba(61,202,177,0.1)" : "transparent",
        border: `1px solid ${h ? C.accent : "rgba(61,202,177,0.18)"}`,
        transition: "all 120ms",
        fontSize: fs,
        minWidth: 0,
      }}
    >
      <span style={{ color: h ? C.accent : C.dim }}>{String(k).padStart(2, "0")}</span>
      <span
        style={{
          letterSpacing: "0.02em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: h ? C.accent : C.dim,
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        {kind === "email" ? "mail" : kind === "resume" ? "pdf" : "↗"}
      </span>
    </a>
  );
}

export default function BootPortfolio({ profile = PROFILE }) {
  const ref = useRef(null);
  const cur = useLocalCursor(ref);
  const W = useContainerWidth(ref);
  const isMobile = W < 640;
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const LINES = isMobile ? BOOT_LINES_MOBILE : BOOT_LINES_DESKTOP;

  const [boot, setBoot] = useState({ shown: 0, done: false });
  const [tick, setTick] = useState(0);

  const bootVersion = `${tick}-${isMobile}`;
  const [prevBootVersion, setPrevBootVersion] = useState(bootVersion);
  if (prevBootVersion !== bootVersion) {
    setPrevBootVersion(bootVersion);
    setBoot({ shown: 0, done: false });
  }

  useEffect(() => {
    const ts = LINES.map((l, i) => setTimeout(() => setBoot(b => ({ ...b, shown: i + 1 })), l.d));
    const finish = setTimeout(
      () => setBoot(b => ({ ...b, done: true })),
      LINES[LINES.length - 1].d + 400,
    );
    return () => {
      ts.forEach(clearTimeout);
      clearTimeout(finish);
    };
  }, [tick, isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  const { shown, done } = boot;

  const sz = isMobile
    ? {
        bar: 30,
        marqueeFs: 11,
        logPad: "16px 18px",
        logFs: 11,
        logLh: 1.55,
        cardPad: "22px 20px 18px",
        cardW: "92%",
        nameFs: 26,
        bioFs: 12.5,
        bioMt: 14,
        bioMb: 16,
        metaFs: 10,
        linkFs: 11.5,
        linkPad: "9px 10px",
        grid: "1fr",
        gap: 6,
        footerFs: 10,
      }
    : {
        bar: 36,
        marqueeFs: 13,
        logPad: "20px 40px",
        logFs: 13,
        logLh: 1.65,
        cardPad: "32px 36px 24px",
        cardW: "min(720px, 92%)",
        nameFs: 38,
        bioFs: 13,
        bioMt: 20,
        bioMb: 22,
        metaFs: 11,
        linkFs: 12,
        linkPad: "8px 10px",
        grid: "1fr 1fr",
        gap: 8,
        footerFs: 11,
      };

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        background: C.bg,
        color: C.fg,
        fontFamily: C.font,
        cursor: isTouch ? "default" : "none",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 6,
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0 1px, transparent 1px 3px)",
        }}
      />
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        <filter id="bp-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bp-noise)" />
      </svg>

      {!isTouch && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: cur.x,
            top: cur.y,
            width: 10,
            height: 14,
            transform: "translate(-2px,-2px)",
            background: C.accent,
            boxShadow: `0 0 12px ${C.accent}`,
            opacity: cur.hover ? 0.85 : 0,
            pointerEvents: "none",
            zIndex: 50,
            mixBlendMode: "screen",
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: sz.bar,
          background: "rgba(61,202,177,0.06)",
          borderBottom: "1px solid rgba(61,202,177,0.22)",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
          color: C.accent,
          letterSpacing: "0.22em",
          fontWeight: 700,
          fontSize: sz.marqueeFs,
        }}
      >
        <Marquee items={profile.skills} sep="▮" duration={isMobile ? 18 : 24} style={{ flex: 1 }} />
      </div>

      <div
        style={{
          position: "absolute",
          inset: `${sz.bar}px 0 0 0`,
          padding: sz.logPad,
          opacity: done ? 0.18 : 1,
          transition: "opacity 700ms ease",
          zIndex: 4,
          fontSize: sz.logFs,
          lineHeight: sz.logLh,
          overflow: "hidden",
        }}
      >
        {LINES.slice(0, shown).map((l, i) => {
          const isOk = l.t.startsWith("[ ok ]");
          const isWarn = l.t.startsWith("[warn]");
          const isBoot = l.t.startsWith("[boot]");
          const color = isOk ? C.accent : isWarn ? C.amber : isBoot ? C.fg : C.dim;
          return (
            <div
              key={i}
              style={{ color, animation: "bp-line 200ms ease-out both", whiteSpace: "pre" }}
            >
              {l.t}
            </div>
          );
        })}
        {!done && shown < LINES.length && (
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: sz.logFs + 1,
              background: C.accent,
              marginTop: 4,
              animation: "bp-blink 1s steps(2) infinite",
            }}
          />
        )}
      </div>

      <div
        style={{
          position: "absolute",
          inset: `${sz.bar}px 0 0 0`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? 16 : 40,
          opacity: done ? 1 : 0,
          transform: done ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 600ms ease 120ms, transform 700ms cubic-bezier(.2,.8,.2,1) 120ms",
          pointerEvents: done ? "auto" : "none",
          zIndex: 8,
        }}
      >
        <div
          style={{
            width: sz.cardW,
            maxHeight: "100%",
            overflow: "auto",
            border: "1px solid rgba(61,202,177,0.35)",
            background: "rgba(6,18,15,0.82)",
            padding: sz.cardPad,
            boxShadow: "0 0 40px rgba(61,202,177,0.18), inset 0 0 0 1px rgba(61,202,177,0.08)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              fontSize: sz.metaFs,
              letterSpacing: "0.28em",
              color: C.dim,
              textTransform: "uppercase",
            }}
          >
            ./portfolio.app — ready
          </div>
          <h1
            style={{
              margin: "10px 0 4px",
              color: C.accent,
              fontSize: sz.nameFs,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              textShadow: "0 0 18px rgba(61,202,177,0.5)",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </h1>
          <div style={{ color: C.fg, fontSize: isMobile ? 12.5 : 14 }}>
            {profile.role}
            <span style={{ color: C.dim }}> · </span>
            <span style={{ color: C.dim }}>{profile.stack}</span>
          </div>

          <p
            style={{
              margin: `${sz.bioMt}px 0 ${sz.bioMb}px`,
              color: C.fg,
              lineHeight: 1.6,
              fontSize: sz.bioFs,
            }}
          >
            {profile.bio}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: sz.grid, gap: sz.gap }}>
            {profile.links.map((l, i) => (
              <BootLink key={l.kind} {...l} k={i + 1} fs={sz.linkFs} pad={sz.linkPad} />
            ))}
          </div>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: C.dim,
              fontSize: sz.footerFs,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              gap: 12,
            }}
          >
            <span>uptime · 9y</span>
            <button
              onClick={() => setTick(t => t + 1)}
              style={{
                background: "transparent",
                border: `1px solid ${C.dim}`,
                color: C.fg,
                font: "inherit",
                fontSize: sz.footerFs,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              ↻ replay boot
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bp-marquee { from { transform: translateX(0) } to { transform: translateX(-25%) } }
        @keyframes bp-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes bp-line { from { opacity: 0; transform: translateX(-4px) } to { opacity: 1; transform: translateX(0) } }
      `}</style>
    </div>
  );
}
