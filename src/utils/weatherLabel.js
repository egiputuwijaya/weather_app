import React from "react";

export function getConditionLabel(condition) {
  switch (condition) {
    case "Sunny":
      return "Panas";
    case "Partly Cloudy ":
      return "Berawan";
    case "Patchy rain nearby":
      return "Gerimis";
    case "Patchy light drizzle":
    case "Light rain shower":
      return "Gerimis";
    case "Rainy":
    case "Rain":
    case "Moderate rain":
    case "Showers":
      return "Hujan";
    default:
      return condition;
  }
}

export function getUVLevel(uv) {
  if (uv <= 2) return "Rendah";
  if (uv <= 6) return "Sedang";
  if (uv >= 8) return "Tinggi";
  return "Sangat Tinggi";
}

export function getUVSuggest(uv) {
  if (uv <= 2) return "Gunakan kacamata hitam jika di luar.";
  if (uv <= 6) return "Hindari matahari siang";
  if (uv >= 8) return "Batasi aktivitas di luar ";
  return "Tinggal di dalam ruangan jika memungkinkan.";
}

export function getWind(km) {
  if (km <= 10) return "Sepoi-sepoi";
  if (km <= 20) return "Sedang";
  if (km <= 30) return "Kencang";
  return "Sangat Kencang";
}

export function getWindSuggest(km) {
  if (km <= 10) return "Aman untuk aktivitas diluar";
  if (km <= 20) return "Waspadai benda beterbangan.";
  if (km <= 30) return "Batasi aktivitas di luar";
  return "Tetap di dalam ruangan. Hindari bepergian, terutama ke wilayah terbuka";
}

export function getRainfall(mm) {
  if (mm <= 20) return "Tetap aman untuk beraktivitas di luar";
  if (mm <= 50) return "Kurangi aktivitas luar";
  if (mm <= 100) return "Hindari bepergian";
  return "Hindari aliran sungai";
}

export function getVisibility(km) {
  if (km >= 10) return "Aman untuk berkendara";
  if (km >= 5) return "Tetap aman";
  if (km <= 1) return "Berbahaya untuk berkendara";
}

export function getHumadity(a) {
  if (a <= 30) return "Sangat Kering";
  if (a <= 60) return "Kelembapan Ideal";
  if (a <= 80) return "Sangat Lembab";
  return "Sangat Lembab";
}
