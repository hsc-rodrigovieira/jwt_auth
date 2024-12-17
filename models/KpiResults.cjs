const mongoose = require("mongoose");

const KpiResultsSchema = new mongoose.Schema({
  organization_cnes: { type: Int32Array, required: true },
  year: { type: Int32Array, required: true },
  month: { type: Int32Array, required: true },
  createdAt: { type: Date, default: Date.now },
  rkpi1: { type: Float64Array, required: true, default: null },
  rkpi2_clinico: { type: Float64Array, required: true, default: null },
  rkpi2_cirurgico: { type: Float64Array, required: true, default: null },
  rkpi2_geral: { type: Float64Array, required: true, default: null },
  rkpi3: { type: Float64Array, required: true, default: null },
  rkpi4_cli_neo_precoce: { type: Float64Array, required: true, default: null },
  rkpi4_cli_neo_tardio: { type: Float64Array, required: true, default: null },
  rkpi4_cli_pedi: { type: Float64Array, required: true, default: null },
  rkpi4_cli_ad: { type: Float64Array, required: true, default: null },
  rkpi4_cli_idoso: { type: Float64Array, required: true, default: null },
  rkpi4_cir_neo_precoce: { type: Float64Array, required: true, default: null },
  rkpi4_cir_neo_tardio: { type: Float64Array, required: true, default: null },
  rkpi4_cir_pedi: { type: Float64Array, required: true, default: null },
  rkpi4_cir_ad: { type: Float64Array, required: true, default: null },
  rkpi4_cir_idoso: { type: Float64Array, required: true, default: null },
  rkpi4_clinico: { type: Float64Array, required: true, default: null },
  rkpi4_cirurgico: { type: Float64Array, required: true, default: null },
  rkpi4_neo_precoce: { type: Float64Array, required: true, default: null },
  rkpi4_neo_tardio: { type: Float64Array, required: true, default: null },
  rkpi4_pedi: { type: Float64Array, required: true, default: null },
  rkpi4_ad: { type: Float64Array, required: true, default: null },
  rkpi4_idoso: { type: Float64Array, required: true, default: null },
  rkpi4_geral: { type: Float64Array, required: true, default: null },
  rkpi5_cli_pedi: { type: Float64Array, required: true, default: null },
  rkpi5_cli_ad: { type: Float64Array, required: true, default: null },
  rkpi5_cli_idoso: { type: Float64Array, required: true, default: null },
  rkpi5_cir_pedi: { type: Float64Array, required: true, default: null },
  rkpi5_cir_ad: { type: Float64Array, required: true, default: null },
  rkpi5_cir_idoso: { type: Float64Array, required: true, default: null },
  rkpi5_clinico: { type: Float64Array, required: true, default: null },
  rkpi5_cirurgico: { type: Float64Array, required: true, default: null },
  rkpi5_pedi: { type: Float64Array, required: true, default: null },
  rkpi5_ad: { type: Float64Array, required: true, default: null },
  rkpi5_idoso: { type: Float64Array, required: true, default: null },
  rkpi5_geral: { type: Float64Array, required: true, default: null },
  rkpi6: { type: Float64Array, required: true, default: null },
  rkpi7_nvl2: { type: Float64Array, required: true, default: null },
  rkpi7_nvl3: { type: Float64Array, required: true, default: null },
  rkpi7_geral: { type: Float64Array, required: true, default: null },
  rkpi8: { type: Float64Array, required: true, default: null },
  rkpi9: { type: Float64Array, required: true, default: null },
  rkpi10_ui_neo: { type: Float64Array, required: true, default: null },
  rkpi10_ui_pedi: { type: Float64Array, required: true, default: null },
  rkpi10_ui_ad: { type: Float64Array, required: true, default: null },
  rkpi10_uti_neo: { type: Float64Array, required: true, default: null },
  rkpi10_uti_pedi: { type: Float64Array, required: true, default: null },
  rkpi10_uti_ad: { type: Float64Array, required: true, default: null },
  rkpi10_neo: { type: Float64Array, required: true, default: null },
  rkpi10_pedi: { type: Float64Array, required: true, default: null },
  rkpi10_ad: { type: Float64Array, required: true, default: null },
  rkpi10_ui: { type: Float64Array, required: true, default: null },
  rkpi10_uti: { type: Float64Array, required: true, default: null },
  rkpi10_geral: { type: Float64Array, required: true, default: null },
  rkpi11_ui_neo: { type: Float64Array, required: true, default: null },
  rkpi11_ui_pedi: { type: Float64Array, required: true, default: null },
  rkpi11_ui_ad: { type: Float64Array, required: true, default: null },
  rkpi11_uti_neo: { type: Float64Array, required: true, default: null },
  rkpi11_uti_pedi: { type: Float64Array, required: true, default: null },
  rkpi11_uti_ad: { type: Float64Array, required: true, default: null },
  rkpi11_neo: { type: Float64Array, required: true, default: null },
  rkpi11_pedi: { type: Float64Array, required: true, default: null },
  rkpi11_ad: { type: Float64Array, required: true, default: null },
  rkpi11_ui: { type: Float64Array, required: true, default: null },
  rkpi11_uti: { type: Float64Array, required: true, default: null },
  rkpi11_geral: { type: Float64Array, required: true, default: null },
  rkpi12_cir_orto: { type: Float64Array, required: true, default: null },
  rkpi12_cir_n_orto: { type: Float64Array, required: true, default: null },
  rkpi12_cirurgico: { type: Float64Array, required: true, default: null },
  rkpi12_geral: { type: Float64Array, required: true, default: null },
  rkpi13: { type: Float64Array, required: true, default: null },
  rkpi14: { type: Float64Array, required: true, default: null }
});

module.exports = mongoose.model("kpi_results", KpiResultsSchema);

