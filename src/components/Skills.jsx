import { useState, useEffect, useRef } from "react";
import { SKILL_NODES, SKILL_LINKS } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });

  const tabs = [
    { id: "all", label: "All Skills", icon: "fa-solid fa-layer-group" },
    { id: "frontend", label: "Frontend", icon: "fa-solid fa-laptop-code" },
    { id: "backend", label: "Backend", icon: "fa-solid fa-server" },
    { id: "frameworks", label: "Frameworks", icon: "fa-solid fa-cubes" },
    { id: "tools", label: "Tools", icon: "fa-solid fa-screwdriver-wrench" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 600
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    const timeout = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  const getConnectedNodes = (nodeId) => {
    const connected = new Set([nodeId]);
    SKILL_LINKS.forEach((link) => {
      if (link.from === nodeId) connected.add(link.to);
      if (link.to === nodeId) connected.add(link.from);
    });
    return connected;
  };

  const isNodeActive = (node) => {
    if (activeTab === "all") {
      if (hoveredNode) {
        return getConnectedNodes(hoveredNode).has(node.id);
      }
      return true;
    }
    return node.category.includes(activeTab);
  };

  const isLinkActive = (link) => {
    const fromNode = SKILL_NODES.find((n) => n.id === link.from);
    const toNode = SKILL_NODES.find((n) => n.id === link.to);
    if (!fromNode || !toNode) return false;

    if (activeTab === "all") {
      if (hoveredNode) {
        return link.from === hoveredNode || link.to === hoveredNode;
      }
      return true;
    }
    return fromNode.category.includes(activeTab) && toNode.category.includes(activeTab);
  };

  const getPixelCoords = (node) => {
    return {
      x: (node.x / 100) * dimensions.width,
      y: (node.y / 100) * dimensions.height
    };
  };

  const getNodeSize = (node) => {
    if (!node) return 100;
    if (node.isCenter) return 140;
    const len = node.label.length;
    return len > 10 ? 130 : len >= 7 ? 115 : 100;
  };

  return (
    <section id="skills" className="skills-visualizer-section">
      <div className="section-header scroll-animate">
        <span className="section-label">Interactive Node Map</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      {/* Tabs */}
      <div className="visualizer-tabs scroll-animate" style={{ transitionDelay: "0.15s" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`vis-tab ${tab.id} ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={tab.icon} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Graph Visualizer */}
      <div className="graph-wrapper scroll-animate" style={{ transitionDelay: "0.3s" }}>
        <div className="graph-container" ref={containerRef}>
          {/* SVG Connection Lines */}
          <svg className="graph-svg">
            {SKILL_LINKS.map((link, idx) => {
              const fromNode = SKILL_NODES.find((n) => n.id === link.from);
              const toNode = SKILL_NODES.find((n) => n.id === link.to);
              if (!fromNode || !toNode) return null;

              const fromPixels = getPixelCoords(fromNode);
              const toPixels = getPixelCoords(toNode);
              const active = isLinkActive(link);

              // Quadratic curve calculations
              const dx = toPixels.x - fromPixels.x;
              const dy = toPixels.y - fromPixels.y;
              const dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const midX = (fromPixels.x + toPixels.x) / 2;
              const midY = (fromPixels.y + toPixels.y) / 2;

              const nx = -dy / dist;
              const ny = dx / dist;
              const offset = Math.min(30, dist * 0.18);
              const cx = midX + nx * offset;
              const cy = midY + ny * offset;

              let strokeColor = "rgba(255, 255, 255, 0.05)";
              if (active) {
                if (fromNode.category.includes("frontend") && toNode.category.includes("frontend")) {
                  strokeColor = "rgba(0, 237, 100, 0.55)";
                } else if (fromNode.category.includes("backend") && toNode.category.includes("backend")) {
                  strokeColor = "rgba(238, 155, 0, 0.55)";
                } else {
                  strokeColor = "rgba(56, 189, 248, 0.55)";
                }
              }

              return (
                <path
                  key={idx}
                  d={`M ${fromPixels.x} ${fromPixels.y} Q ${cx} ${cy} ${toPixels.x} ${toPixels.y}`}
                  fill="none"
                  className={`graph-line ${active ? "active" : "faded"}`}
                  style={{
                    stroke: strokeColor,
                    strokeWidth: active ? 1.8 : 1
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {SKILL_NODES.map((node) => {
            const pixels = getPixelCoords(node);
            const size = getNodeSize(node);
            const active = isNodeActive(node);
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                className={`graph-node ${active ? "active" : "faded"} ${isHovered ? "hovered" : ""} ${
                  node.isCenter ? "center-node" : ""
                }`}
                style={{
                  left: `${pixels.x}px`,
                  top: `${pixels.y}px`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: node.color,
                  boxShadow: active ? `0 0 25px ${node.color}60` : "none",
                  "--node-color": node.color,
                  animationDelay: `${(node.x + node.y) * 0.01}s`
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <span className="node-label">{node.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
