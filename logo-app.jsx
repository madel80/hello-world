// logo-app.jsx — ThunderSpoon logo exploration on the design canvas
const { useState } = React;

// ---- shared geometry ----------------------------------------------------
// Bolt that forms the handle (viewBox 0 0 240 400)
const BOLT = "M104 148 L146 148 L126 236 L168 236 L92 384 L114 252 L78 252 Z";

// Primary: egg bowl + bold bolt, upright
function MarkPrimary({ size = 200, className = "mark" }) {
  return (
    <svg className={className} width={size} height={size * (400/240)} viewBox="0 0 240 400">
      <ellipse cx="120" cy="82" rx="50" ry="72" />
      <path d={BOLT} />
    </svg>
  );
}

// Scoop: bowl carries a crescent cut to read as a concave spoon
function MarkScoop({ size = 200, className = "mark" }) {
  return (
    <svg className={className} width={size} height={size * (400/240)} viewBox="0 0 240 400">
      <path fillRule="evenodd" d="M120 10 C156 10 176 46 176 86 C176 126 152 158 120 158 C88 158 64 126 64 86 C64 46 84 10 120 10 Z
        M118 32 C100 34 88 54 88 80 C88 98 98 112 110 118 C95 106 87 90 95 68 C101 50 112 40 126 38 C124 34 121 32 118 32 Z" />
      <path d="M106 152 L144 152 L126 236 L168 236 L92 384 L114 252 L78 252 Z" />
    </svg>
  );
}

// Dynamic: tilted for energy
function MarkDynamic({ size = 200, className = "mark" }) {
  return (
    <svg className={className} width={size} height={size * (400/240)} viewBox="0 0 240 400">
      <g transform="rotate(9 120 200)">
        <ellipse cx="120" cy="82" rx="50" ry="72" />
        <path d={BOLT} />
      </g>
    </svg>
  );
}

// Fluid: handle flows from a curve into the bolt — single sweeping form
function MarkFluid({ size = 200, className = "mark" }) {
  return (
    <svg className={className} width={size} height={size * (400/240)} viewBox="0 0 240 400">
      <ellipse cx="120" cy="80" rx="48" ry="70" />
      <path d="M108 144 L140 144 C140 178 120 190 126 216 L160 216 L92 384 L116 252 L84 250 C100 214 116 196 108 144 Z" />
    </svg>
  );
}

// Wordmark
function Wordmark({ fontSize = 56, className = "" }) {
  return (
    <span className={`wm ${className}`} style={{ fontSize }}>
      <span className="t">Thunder</span><span className="s">Spoon</span>
    </span>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection id="marks" title="The mark" subtitle="Solid black silhouette · spoon bowl + lightning handle · transparent ground">
        <DCArtboard id="primary" label="01 · Primary" width={260} height={360}>
          <div className="ab-frame"><MarkPrimary size={150} /></div>
        </DCArtboard>
        <DCArtboard id="scoop" label="02 · Scoop cut" width={260} height={360}>
          <div className="ab-frame"><MarkScoop size={150} /></div>
        </DCArtboard>
        <DCArtboard id="dynamic" label="03 · Dynamic tilt" width={260} height={360}>
          <div className="ab-frame"><MarkDynamic size={150} /></div>
        </DCArtboard>
        <DCArtboard id="fluid" label="04 · Fluid handle" width={260} height={360}>
          <div className="ab-frame"><MarkFluid size={150} /></div>
        </DCArtboard>
      </DCSection>

      <DCSection id="appicon" title="App icon" subtitle="Squircle, both polarities — bowl + bolt centered with safe-area padding">
        <DCArtboard id="ic-light" label="Light" width={260} height={300}>
          <div className="ab-frame">
            <div className="tile light" style={{ width: 200, height: 200 }}>
              <MarkPrimary size={108} />
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="ic-dark" label="Dark" width={260} height={300}>
          <div className="ab-frame">
            <div className="tile dark" style={{ width: 200, height: 200 }}>
              <MarkPrimary size={108} />
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="ic-scoop" label="Scoop · dark" width={260} height={300}>
          <div className="ab-frame">
            <div className="tile dark" style={{ width: 200, height: 200 }}>
              <MarkScoop size={108} />
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      <DCSection id="lockups" title="Lockups" subtitle="Icon + wordmark — Space Grotesk">
        <DCArtboard id="horiz" label="Horizontal lockup" width={560} height={240}>
          <div className="ab-frame">
            <div className="lockup">
              <MarkPrimary size={92} />
              <Wordmark fontSize={62} />
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="stacked" label="Stacked lockup" width={320} height={400}>
          <div className="ab-frame">
            <div className="lockup stack">
              <MarkScoop size={104} />
              <Wordmark fontSize={42} />
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="tag" label="With tagline" width={560} height={260}>
          <div className="ab-frame">
            <div className="lockup stack" style={{ gap: 16 }}>
              <div className="lockup">
                <MarkPrimary size={70} />
                <Wordmark fontSize={48} />
              </div>
              <div className="tag" style={{ fontSize: 13 }}>Fast food, charged up</div>
            </div>
          </div>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
