import { SplitText } from '@/components/motion/split-text';
import { Magnetic } from '@/components/motion/magnetic';
import { Reveal, StaggerReveal } from '@/components/motion/reveal';
import { Marquee } from '@/components/motion/marquee';

const topologyNodes = [
  { label: 'AGENT RUNTIME', detail: 'planner / executor', className: 'topology-agent' },
  { label: 'ORCHESTRATION', detail: 'routing / memory', className: 'topology-orchestrator' },
  { label: 'MCP TOOLS', detail: 'systems / APIs', className: 'topology-tools' },
  { label: 'KNOWLEDGE', detail: 'retrieval / evidence', className: 'topology-knowledge' },
  { label: 'POLICY ENGINE', detail: 'guardrails / approval', className: 'topology-policy' },
  { label: 'OBSERVABILITY', detail: 'traces / verification', className: 'topology-observe' },
];

const integrations = ['MCP SERVERS', 'REST APIs', 'SQL SYSTEMS', 'VECTOR STORES', 'CLOUD RUNTIMES', 'HUMAN TEAMS'];

function Arrow() {
  return <span aria-hidden="true" className="text-[#648BFF]">↗</span>;
}

function Topology() {
  return (
    <div className="topology-panel" aria-label="Illustrative AEGIS infrastructure topology">
      <div className="topology-label">LIVE SYSTEM TOPOLOGY <span className="status-dot" /> DEMO DATA</div>
      <div className="topology-grid-lines" />
      <div className="topology-line line-one" />
      <div className="topology-line line-two" />
      <div className="topology-line line-three" />
      <div className="topology-line line-four" />
      {topologyNodes.map((node, index) => (
        <div key={node.label} className={`topology-node ${node.className}`}>
          <div className="node-index">0{index + 1}</div>
          <div>
            <div className="text-[10px] font-mono tracking-[0.16em] text-[#e8edf5]">{node.label}</div>
            <div className="mt-1 text-[10px] text-[#778196]">{node.detail}</div>
          </div>
          <span className="node-pulse" />
        </div>
      ))}
      <div className="topology-core"><span>AEGIS</span><small>CONTROL PLANE</small></div>
      <div className="topology-caption">Signals move through a governed execution loop.</div>
    </div>
  );
}

function SectionMarker({ number, label }: { number: string; label: string }) {
  return <div className="section-marker"><span>{number}</span><span>{label}</span></div>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="AEGIS home"><span className="brand-cross">+</span> AEGIS</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#operations" className="nav-link">Operations</a>
          <a href="#architecture" className="nav-link">Architecture</a>
        </nav>
        <Magnetic strength={8}><a href="#contact" className="header-cta">Request briefing <Arrow /></a></Magnetic>
      </header>

      <main id="top">
        <section className="hero-section layout-grid">
          <div className="hero-copy">
            <Reveal y={10}><p className="eyebrow">ENTERPRISE AGENT INFRASTRUCTURE &amp; OPERATIONS</p></Reveal>
            <SplitText as="h1" text="INTELLIGENCE NEEDS INFRASTRUCTURE." className="hero-title" delay={0.1} stagger={0.025} />
            <Reveal delay={0.75} y={14}><p className="hero-lede">Build, orchestrate, investigate and govern intelligent agents through one unified operational platform.</p></Reveal>
            <Reveal delay={0.9} y={12}><div className="hero-actions">
              <Magnetic><a className="button-primary" href="#platform">Explore the platform <Arrow /></a></Magnetic>
              <a className="button-text" href="#architecture">View architecture <Arrow /></a>
            </div></Reveal>
            <Reveal delay={1.1} y={10}><div className="hero-footnote"><span className="status-dot" /> SYSTEM STATUS <strong>OPERATIONAL</strong><span className="divider" /> v.1.4.0 / EU-WEST</div></Reveal>
          </div>
          <Reveal delay={0.35} y={18} className="hero-visual"><Topology /></Reveal>
        </section>

        <section id="platform" className="section-block layout-grid">
          <div><SectionMarker number="01" label="INFRASTRUCTURE TOPOLOGY" /></div>
          <div className="section-content"><h2>One control plane for every intelligent system.</h2><p className="section-intro">AEGIS makes the hidden complexity of agent systems visible, governable and ready to operate at enterprise scale.</p><div className="signal-row"><span>INGEST</span><i /> <span>REASON</span><i /> <span>ACT</span><i /> <span>VERIFY</span></div></div>
        </section>

        <section id="operations" className="section-block layout-grid bordered-top">
          <div><SectionMarker number="02" label="AGENT OPERATIONS" /></div>
          <div className="section-content"><div className="feature-split"><div><h2>From first prompt to dependable operation.</h2><p className="section-intro">Compose multi-step agents, route work across tools, and promote proven runs into resilient production workflows.</p><a className="inline-link" href="#contact">Explore agent operations <Arrow /></a></div><div className="operation-list"><div><span>01</span><b>BUILD</b><em>Define capabilities and context</em></div><div><span>02</span><b>ORCHESTRATE</b><em>Coordinate tools and handoffs</em></div><div><span>03</span><b>DEPLOY</b><em>Release with policy controls</em></div></div></div></div>
        </section>

        <section className="product-section bordered-top"><div className="product-heading layout-grid"><SectionMarker number="03" label="OPERATIONAL CONTROL" /><div><h2>A clear view of work in motion.</h2><p className="section-intro">Illustrative workspace data. See the system, the evidence and the decisions behind every execution.</p></div></div><div className="control-panel"><div className="control-topbar"><span className="brand-mark"><span className="brand-cross">+</span> AEGIS / CONTROL</span><span className="demo-badge">ILLUSTRATIVE DATA</span><span className="control-time">14:32:08 UTC</span></div><div className="control-body"><aside><div className="aside-label">ACTIVE AGENTS</div><div className="agent-item active"><span className="status-dot" /><div><b>Atlas / Research</b><small>investigation · running</small></div><strong>82%</strong></div><div className="agent-item"><span className="status-dot amber" /><div><b>Sentinel / Policy</b><small>approval · waiting</small></div><strong>—</strong></div><div className="agent-item"><span className="status-dot violet" /><div><b>Relay / Deploy</b><small>verification · queued</small></div><strong>—</strong></div></aside><div className="timeline"><div className="aside-label">INVESTIGATION TIMELINE <span>RUN-2048</span></div><div className="timeline-event"><span className="event-time">14:31:42</span><div><b>Retrieval complete</b><p>12 evidence sources ranked · confidence 0.94</p></div></div><div className="timeline-event"><span className="event-time">14:31:48</span><div><b>Policy evaluation passed</b><p>Scope: production-read · approval not required</p></div></div><div className="timeline-event current"><span className="event-time">14:32:08</span><div><b>Agent reasoning</b><p>Comparing deployment manifests across 3 regions</p></div></div><div className="timeline-event"><span className="event-time">NEXT</span><div><b>Human verification</b><p>Awaiting operator confirmation</p></div></div></div><div className="health"><div className="aside-label">INFRASTRUCTURE HEALTH</div><div className="health-number">99.98<span>%</span></div><div className="health-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="health-row"><span>RUNTIME</span><b>STABLE</b></div><div className="health-row"><span>TOOL LATENCY</span><b>128 MS</b></div><div className="health-row"><span>POLICY CHECKS</span><b>100%</b></div></div></div></div></section>

        <section className="section-block layout-grid bordered-top"><div><SectionMarker number="04" label="INVESTIGATION ENGINE" /></div><div className="section-content"><h2>Evidence before action.</h2><p className="section-intro">Give agents a rigorous path from question to conclusion. AEGIS traces retrieval, reasoning and sources so teams can trust the outcome.</p><div className="quote-block"><span>“</span><p>Every decision carries its context, its constraints and its proof.</p></div></div></section>

        <section className="section-block layout-grid bordered-top"><div><SectionMarker number="05" label="GOVERNANCE" /></div><div className="section-content"><h2>Autonomy with a boundary.</h2><p className="section-intro">Encode policy once. Enforce it at every tool call, approval gate and deployment boundary.</p><div className="governance-grid"><div><b>POLICY EVALUATION</b><span>Real-time checks before execution</span></div><div><b>HUMAN APPROVAL</b><span>Escalation when judgment matters</span></div><div><b>AUDITABILITY</b><span>Immutable record of system action</span></div></div></div></section>

        <section className="integration-section bordered-top"><SectionMarker number="06" label="INTEGRATION ECOSYSTEM" /><h2>Connect the systems that matter.</h2><Marquee duration={34}><div className="integration-track">{integrations.map((item) => <span key={item}>{item} <Arrow /></span>)}</div></Marquee></section>

        <section className="section-block layout-grid bordered-top"><div><SectionMarker number="07" label="OBSERVABILITY" /></div><div className="section-content"><h2>Understand the system behaviour.</h2><p className="section-intro">Follow every signal from intent to outcome. Operational intelligence for the people responsible for intelligent systems.</p><div className="observability-lines"><div><span>TRACE COVERAGE</span><b>100%</b><i style={{ width: '100%' }} /></div><div><span>DECISION LATENCY</span><b>142ms</b><i style={{ width: '68%' }} /></div><div><span>VERIFICATION RATE</span><b>94.2%</b><i style={{ width: '94%' }} /></div></div></div></section>

        <section id="architecture" className="architecture-section bordered-top"><div className="layout-grid"><SectionMarker number="08" label="ARCHITECTURE" /><div><h2>Built in layers.<br /><em>Operated as one.</em></h2><p className="section-intro">A modular foundation for teams moving from experimental agents to dependable infrastructure.</p></div></div><div className="architecture-stack"><div><span>01</span><b>INTERFACE LAYER</b><small>Web console · API · SDK</small></div><div><span>02</span><b>CONTROL PLANE</b><small>Orchestration · policy · identity</small></div><div><span>03</span><b>EXECUTION FABRIC</b><small>Runtimes · tools · retrieval</small></div><div><span>04</span><b>OBSERVATION LAYER</b><small>Traces · events · verification</small></div></div></section>

        <section id="contact" className="closing-section"><p className="eyebrow">AEGIS / ENTERPRISE AGENT INFRASTRUCTURE</p><h2>Intelligence needs infrastructure.</h2><p>Build the operational layer your agents deserve.</p><Magnetic><a className="button-primary" href="mailto:briefing@aegis.example">Request a briefing <Arrow /></a></Magnetic></section>
      </main>
      <footer className="site-footer"><span>© 2026 AEGIS SYSTEMS</span><span>INTELLIGENCE NEEDS INFRASTRUCTURE.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
