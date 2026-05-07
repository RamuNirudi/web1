// IndiaMap.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OFFICE_LOCATIONS } from "@/lib/constants";
import { X, Globe, Zap, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function QRCodeSVG({ value, size = 160 }) {
  // Simple QR-like visual using a Google Charts QR API image
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`}
      alt="QR Code"
      width={size}
      height={size}
      className="rounded-lg"
    />
  );
}

export default function IndiaMap() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Our National Presence
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Serving Clients
              <br />
              Across India
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Click any active office location to scan QR code and open
              directions instantly.
            </p>

            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Engineering Reach.
            </h3>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              Local Accessibility.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Principle ACS supports clients across telecom, railway, energy,
              infrastructure and environmental sectors through strategically
              located offices across India.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  label: "Pan India",
                  sub: "Operational Presence",
                },
                { icon: Zap, label: "Fast Regional", sub: "Support" },
                {
                  icon: Building2,
                  label: "Multi-Sector",
                  sub: "Execution Capability",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Real Leaflet Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-border shadow-xl"
              style={{ height: "480px", zIndex: 0 }}
            >
              <MapContainer
                center={[22.5, 80.5]}
                zoom={4}
                style={{ height: "100%", width: "100%", zIndex: 0 }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                />
                {OFFICE_LOCATIONS.map((loc) => (
                  <Marker
                    key={loc.name}
                    position={[loc.lat, loc.lng]}
                    eventHandlers={{
                      click: () =>
                        setSelected(selected?.name === loc.name ? null : loc),
                    }}
                  >
                    <Popup>
                      <strong>Principle ACS — {loc.name}</strong>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* QR Popup overlay */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 10 }}
                    className="absolute bottom-6 right-6 z-[999] bg-card border border-border rounded-xl shadow-2xl p-5 w-56"
                  >
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-heading font-bold text-sm text-foreground">
                        {selected.name}
                      </span>
                    </div>
                    <div className="flex justify-center mb-3">
                      <QRCodeSVG
                        value={`${window.location.origin}/office/${selected.name.toLowerCase()}`}
                        size={140}
                      />
                    </div>
                    <p className="text-[10px] text-center text-muted-foreground mb-2">
                      Scan to view office location
                    </p>
                    <Link
                      to={`/office/${selected.name.toLowerCase()}`}
                      className="block text-center text-xs text-primary font-semibold hover:underline"
                    >
                      View Office Page →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground justify-center">
              <MapPin className="w-3 h-3" />
              Click any pin to view QR code
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
