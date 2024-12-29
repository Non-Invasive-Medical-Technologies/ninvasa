import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

type Location = {
  name: string;
  coordinates: [number, number]; // This explicitly types coordinates as a tuple of two numbers
};

const GlobalPresence = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const locations: Location[] = [
    { name: 'UAE', coordinates: [54.3773, 24.4539] },
    { name: 'Saudi Arabia', coordinates: [45.0792, 23.8859] },
    { name: 'Qatar', coordinates: [51.1839, 25.3548] },
    { name: 'Kuwait', coordinates: [47.4818, 29.3117] },
    { name: 'Ukraine', coordinates: [30.5234, 50.4501] },
    { name: 'China', coordinates: [116.4074, 39.9042] },
    { name: 'Russia', coordinates: [37.6173, 55.7558] },
    { name: 'USA', coordinates: [-95.7129, 37.0902] }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHM0Z2F1NWowMWd4MmptbGVwOWs5NXd4In0.Ac1p6RrM9mQ-GoRzF6RV8g';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [20, 30],
      zoom: 1.5,
    });

    // Add markers for each location
    locations.forEach(location => {
      const marker = document.createElement('div');
      marker.className = 'w-4 h-4 bg-teal-500 rounded-full pulse-animation';
      
      new mapboxgl.Marker(marker)
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3 class="font-bold">${location.name}</h3>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Global Presence</h2>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Present in 15+ countries with ongoing expansion
      </div>
    </motion.div>
  );
};

export default GlobalPresence;