// OfficePage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { OFFICE_LOCATIONS } from "@/lib/constants";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ArrowLeft, MapPin, Navigation, Building2, Phone } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker icon
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function OfficePage() {
  const { city } = useParams();
  const office = OFFICE_LOCATIONS.find(
    (loc) => loc.name.toLowerCase() === city?.toLowerCase(),
  );

  if (!office) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
            Office Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">
                Office Location
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                {office.name} Office
              </h1>
            </div>
          </div>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-white/70 max-w-xl">
            Principle ACS {office.name} — strategically located to serve clients
            across telecom, railway, energy and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Map + Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]"
            >
              <MapContainer
                center={[office.lat, office.lng]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[office.lat, office.lng]}>
                  <Popup>
                    <strong>Principle ACS — {office.name}</strong>
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-2xl text-foreground">
                Office Details
              </h2>
              {[
                {
                  icon: Building2,
                  label: "Office Name",
                  value: `Principle ACS — ${office.name}`,
                },
                {
                  icon: MapPin,
                  label: "Coordinates",
                  value: `${office.lat}°N, ${office.lng}°E`,
                },
                {
                  icon: Navigation,
                  label: "Get Directions",
                  value: "Open in Google Maps",
                  href: `https://www.google.com/maps?q=${office.lat},${office.lng}`,
                },
                {
                  icon: Phone,
                  label: "Contact",
                  value: "+91 120 456 7800",
                  href: "tel:+911204567800",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
