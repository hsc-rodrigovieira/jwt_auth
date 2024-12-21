const mongoose = require("mongoose");

const KpiResultsSchema = new mongoose.Schema({
  organization_cnes: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  rkpi1: { type: Number, required: true, default: null },
  rkpi2_clinico: { type: Number, required: true, default: null },
  rkpi2_cirurgico: { type: Number, required: true, default: null },
  rkpi2_geral: { type: Number, required: true, default: null },
  rkpi3: { type: Number, required: true, default: null },
  rkpi4_cli_neo_precoce: { type: Number, required: true, default: null },
  rkpi4_cli_neo_tardio: { type: Number, required: true, default: null },
  rkpi4_cli_pedi: { type: Number, required: true, default: null },
  rkpi4_cli_ad: { type: Number, required: true, default: null },
  rkpi4_cli_idoso: { type: Number, required: true, default: null },
  rkpi4_cir_neo_precoce: { type: Number, required: true, default: null },
  rkpi4_cir_neo_tardio: { type: Number, required: true, default: null },
  rkpi4_cir_pedi: { type: Number, required: true, default: null },
  rkpi4_cir_ad: { type: Number, required: true, default: null },
  rkpi4_cir_idoso: { type: Number, required: true, default: null },
  rkpi4_clinico: { type: Number, required: true, default: null },
  rkpi4_cirurgico: { type: Number, required: true, default: null },
  rkpi4_neo_precoce: { type: Number, required: true, default: null },
  rkpi4_neo_tardio: { type: Number, required: true, default: null },
  rkpi4_pedi: { type: Number, required: true, default: null },
  rkpi4_ad: { type: Number, required: true, default: null },
  rkpi4_idoso: { type: Number, required: true, default: null },
  rkpi4_geral: { type: Number, required: true, default: null },
  rkpi5_cli_pedi: { type: Number, required: true, default: null },
  rkpi5_cli_ad: { type: Number, required: true, default: null },
  rkpi5_cli_idoso: { type: Number, required: true, default: null },
  rkpi5_cir_pedi: { type: Number, required: true, default: null },
  rkpi5_cir_ad: { type: Number, required: true, default: null },
  rkpi5_cir_idoso: { type: Number, required: true, default: null },
  rkpi5_clinico: { type: Number, required: true, default: null },
  rkpi5_cirurgico: { type: Number, required: true, default: null },
  rkpi5_pedi: { type: Number, required: true, default: null },
  rkpi5_ad: { type: Number, required: true, default: null },
  rkpi5_idoso: { type: Number, required: true, default: null },
  rkpi5_geral: { type: Number, required: true, default: null },
  rkpi6: { type: Number, required: true, default: null },
  rkpi7_nvl2: { type: Number, required: true, default: null },
  rkpi7_nvl3: { type: Number, required: true, default: null },
  rkpi7_geral: { type: Number, required: true, default: null },
  rkpi8: { type: Number, required: true, default: null },
  rkpi9: { type: Number, required: true, default: null },
  rkpi10_ui_neo: { type: Number, required: true, default: null },
  rkpi10_ui_pedi: { type: Number, required: true, default: null },
  rkpi10_ui_ad: { type: Number, required: true, default: null },
  rkpi10_uti_neo: { type: Number, required: true, default: null },
  rkpi10_uti_pedi: { type: Number, required: true, default: null },
  rkpi10_uti_ad: { type: Number, required: true, default: null },
  rkpi10_neo: { type: Number, required: true, default: null },
  rkpi10_pedi: { type: Number, required: true, default: null },
  rkpi10_ad: { type: Number, required: true, default: null },
  rkpi10_ui: { type: Number, required: true, default: null },
  rkpi10_uti: { type: Number, required: true, default: null },
  rkpi10_geral: { type: Number, required: true, default: null },
  rkpi11_ui_neo: { type: Number, required: true, default: null },
  rkpi11_ui_pedi: { type: Number, required: true, default: null },
  rkpi11_ui_ad: { type: Number, required: true, default: null },
  rkpi11_uti_neo: { type: Number, required: true, default: null },
  rkpi11_uti_pedi: { type: Number, required: true, default: null },
  rkpi11_uti_ad: { type: Number, required: true, default: null },
  rkpi11_neo: { type: Number, required: true, default: null },
  rkpi11_pedi: { type: Number, required: true, default: null },
  rkpi11_ad: { type: Number, required: true, default: null },
  rkpi11_ui: { type: Number, required: true, default: null },
  rkpi11_uti: { type: Number, required: true, default: null },
  rkpi11_geral: { type: Number, required: true, default: null },
  rkpi12_cir_orto: { type: Number, required: true, default: null },
  rkpi12_cir_n_orto: { type: Number, required: true, default: null },
  rkpi12_cirurgico: { type: Number, required: true, default: null },
  rkpi12_geral: { type: Number, required: true, default: null },
  rkpi13: { type: Number, required: true, default: null },
  rkpi14: { type: Number, required: true, default: null }
});

module.exports = mongoose.model("kpi_results", KpiResultsSchema);

