import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const REPO = "https://github.com/sandeep9526/securitywatch";
const NPM = "https://www.npmjs.com/package/securitywatch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "securitywatch — Runtime security middleware for Express" },
      {
        name: "description",
        content:
          "securitywatch is a score-based security middleware for Express. It detects SQL injection, XSS, brute force, and rate limit abuse, and scores threats instead of blocking blindly.",
      },
      { property: "og:title", content: "securitywatch — Runtime security middleware for Express" },
      {
        property: "og:description",
        content:
          "Score-based threat detection for Express: SQL injection, XSS, brute force, rate limiting, and suspicious behavior. Warn, throttle, or block based on a cumulative score.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "securitywatch — Runtime security middleware for Express" },
      {
        name: "twitter:description",
        content:
          "Score-based threat detection for Express: SQL injection, XSS, brute force, rate limiting, and suspicious behavior.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: "securitywatch",
          description:
            "Score-based runtime security middleware for Express with SQL injection, XSS, brute-force, rate-limit, and suspicious-behavior detection.",
          codeRepository: REPO,
          programmingLanguage: "TypeScript",
          runtimePlatform: "Node.js",
          license: "https://opensource.org/licenses/MIT",
          isPartOf: {
            "@type": "WebSite",
            name: "securitywatch",
            url: "/",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install securitywatch";

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border bg-code px-4 py-2.5 font-mono text-sm">
      <span className="select-none text-muted-foreground">$</span>
      <code className="text-code-foreground">{cmd}</code>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(cmd);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="ml-1 rounded border px-2 py-0.5 text-xs text-muted-foreground hover:bg-background"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border bg-code p-4 text-[13px] leading-6 text-code-foreground">
      <code>{children}</code>
    </pre>
  );
}

function RuleTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b bg-muted text-foreground">
            <th className="px-4 py-2 font-medium">Pattern</th>
            <th className="px-4 py-2 font-medium">Score</th>
            <th className="px-4 py-2 font-medium">Example</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([pattern, score, example]) => (
            <tr key={pattern} className="border-b last:border-0">
              <td className="px-4 py-2 text-foreground">{pattern}</td>
              <td className="px-4 py-2">{score}</td>
              <td className="px-4 py-2 font-mono text-xs">{example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md"
      >
        Skip to content
      </a>
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <span className="font-mono text-sm font-semibold">securitywatch</span>
          <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground">How it works</a>
            <a href="#rules" className="hidden hover:text-foreground sm:inline">Rules</a>
            <a href="#config" className="hidden hover:text-foreground sm:inline">Config</a>
            <a href={NPM} target="_blank" rel="noreferrer" className="hover:text-foreground">npm</a>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border px-3 py-1.5 font-medium text-foreground hover:bg-muted"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Express middleware · TypeScript · MIT
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Runtime security for Express, scored not guessed
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          securitywatch inspects every incoming request with multiple detection rules,
          adds up a threat score, and decides whether to allow, warn, throttle, or block —
          so you get fewer false positives than binary blocking.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <InstallCommand />
          <div className="flex gap-3">
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              View on GitHub
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              How it works
            </a>
          </div>
        </div>
        </section>

        {/* 30-second setup */}
        <Section id="setup" title="Set up in 30 seconds">
        <Code>{`import express from "express";
import { securityWatch } from "securitywatch";

const app = express();
app.use(securityWatch());
app.listen(3000);`}</Code>
        <p>
          That's it. Every route is now protected by SQL injection and XSS detection,
          rate limiting, brute-force protection, and suspicious-behavior scoring — with
          sensible defaults.
        </p>
        </Section>

        <hr className="mx-auto max-w-3xl" />

        {/* How it works */}
        <Section id="how-it-works" title="How it works">
        <p>
          Each request is checked by several detection rules. Every rule returns a
          numeric score instead of a binary yes/no. Scores are summed, multiplied by the
          route's sensitivity, and compared against thresholds:
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-muted text-foreground">
                <th className="px-4 py-2 font-medium">Score</th>
                <th className="px-4 py-2 font-medium">Action</th>
                <th className="px-4 py-2 font-medium">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">0–4</td>
                <td className="px-4 py-2">Allow</td>
                <td className="px-4 py-2">Request passes normally</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">5–9</td>
                <td className="px-4 py-2">Warn</td>
                <td className="px-4 py-2">Passes; threat info on <code className="font-mono text-xs">req.securityWatch</code></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">10–14</td>
                <td className="px-4 py-2">Throttle</td>
                <td className="px-4 py-2">429 response</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">15+</td>
                <td className="px-4 py-2">Block</td>
                <td className="px-4 py-2">403 response</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A single weak signal won't lock out a real user — but several signals together
          will. Scores also accumulate per IP with automatic decay, so repeat offenders
          get blocked faster while normal users stay unaffected.
        </p>
        </Section>

        <hr className="mx-auto max-w-3xl" />

        {/* Detection rules */}
        <Section id="rules" title="Detection rules">
        <h3 className="text-base font-semibold text-foreground">SQL injection — 10 patterns</h3>
        <RuleTable
          rows={[
            ["Tautology", "5", "' OR 1=1"],
            ["UNION SELECT", "5", "1 UNION SELECT * FROM users"],
            ["Stacked queries", "6", "1; DROP TABLE users"],
            ["Comment bypass + keyword", "4", "-- SELECT * FROM"],
            ["Encoded injection", "4", "CHAR(0x75)"],
            ["Time-based blind", "5", "SLEEP(5)"],
            ["NoSQL operators", "4", '{"$gt": ""}'],
            ["Command execution", "6", "xp_cmdshell, cmd.exe"],
            ["Schema manipulation", "6", "DROP TABLE, ALTER TABLE"],
            ["Mass data export", "5", "INTO OUTFILE, mysqldump"],
          ]}
        />
        <h3 className="pt-4 text-base font-semibold text-foreground">XSS — 7 patterns</h3>
        <RuleTable
          rows={[
            ["Script tag", "6", "<script>alert(1)</script>"],
            ["javascript: protocol", "5", "javascript:alert(1)"],
            ["Event handlers (20+ types)", "4", "onerror=, onfocusin="],
            ["Dangerous tags", "4", "<iframe>, <svg>, <object>"],
            ["Data URI", "4", "data:text/html,..."],
            ["eval / Function", "3", "eval(...)"],
            ["Template injection", "3", "${...}"],
          ]}
        />
        <h3 className="pt-4 text-base font-semibold text-foreground">Suspicious behavior</h3>
        <RuleTable
          rows={[
            ["Sensitive path probing (/.env, /.git, /wp-admin)", "5", "GET /.env"],
            ["Directory traversal (8 encoding variants)", "6", "../../etc/passwd"],
            ["Endpoint scanning (20+ routes/min)", "5", "crawling unknown paths"],
            ["Suspicious file extensions", "4", ".sql, .bak, .env"],
            ["Unusual methods on auth routes", "3", "DELETE /login"],
          ]}
        />
        <p className="pt-2">
          Plus per-route rate limiting with spike detection, progressive brute-force
          blocking that resets on successful login, and payload anomaly checks
          (oversized bodies, null bytes, character density, nesting depth).
        </p>
        </Section>

        <hr className="mx-auto max-w-3xl" />

        {/* Configuration */}
        <Section id="config" title="Configure what you need">
        <p>Everything is optional. Turn rules on or off, set route sensitivity, and hook alerts:</p>
        <Code>{`app.use(securityWatch({
  bruteForce: {
    maxAttempts: 5,
    windowMs: 5 * 60_000,
    blockDurationMs: 15 * 60_000,
    authRoutes: ["/login", "/auth"],
  },
  rateLimit: {
    windowMs: 60_000,
    maxRequests: 100,
    routes: { "/login": 5, "/api": 60 },
  },

  // low=0.5x, medium=1x, high=1.5x, critical=2x
  routeSensitivity: {
    "/admin": "critical",
    "/login": "high",
    "/search": "low",
  },

  thresholds: { warn: 5, throttle: 10, block: 15 },
  whitelist: ["127.0.0.1"],

  alerts: {
    console: true,
    slackWebhookUrl: "https://hooks.slack.com/services/...",
  },

  onBlock: (req, info) => console.log(\`Blocked: \${info.ip}\`),
  onWarn: (req, info) => console.log(\`Warning: \${info.ip}\`),
}));`}</Code>
        </Section>

        <hr className="mx-auto max-w-3xl" />

        {/* Use rules individually */}
        <Section id="individual" title="Use rules individually">
        <p>Each detector is exported on its own if you only need one piece:</p>
        <Code>{`import { detectSQLInjection, detectXSS } from "securitywatch";

detectSQLInjection("' OR 1=1--");
// { triggered: true, score: 5,
//   rule: "sql-injection",
//   reason: "SQL injection: tautology attack" }`}</Code>
        </Section>

        <hr className="mx-auto max-w-3xl" />

        {/* Safety */}
        <Section id="safety" title="Built to be safe in production">
        <ul className="list-disc space-y-2 pl-5">
          <li>All regexes use bounded quantifiers; input is truncated to 20K chars before scanning.</li>
          <li>Internal errors are caught and logged — requests proceed normally (fail-open).</li>
          <li><code className="font-mono text-xs">X-Forwarded-For</code> is ignored by default; enable <code className="font-mono text-xs">trustProxy</code> only behind a trusted proxy.</li>
          <li>Memory is bounded: 10K tracked IPs, 100 routes per IP, normalized rate-limit keys.</li>
          <li>Slack webhook URLs are validated against <code className="font-mono text-xs">hooks.slack.com</code> over HTTPS only.</li>
        </ul>
        <p className="pt-2">
          Requires Node.js 18+ and Express 5+.
        </p>
        </Section>

        {/* CTA */}
        <section className="border-t bg-muted">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Add it to your Express app</h2>
          <p className="mt-3 text-muted-foreground">One dependency. No external services. Nothing leaves your server.</p>
          <div className="mt-6 flex justify-center">
            <InstallCommand />
          </div>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              GitHub
            </a>
            <a
              href={NPM}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              npm package
            </a>
          </div>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono">securitywatch</span>
          <span>MIT License · Node.js ≥ 18 · Express ≥ 5</span>
        </div>
      </footer>
    </div>
  );
}
