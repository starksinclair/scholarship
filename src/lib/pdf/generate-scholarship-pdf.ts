import { jsPDF } from "jspdf";
import type { ScholarshipSpec, FocusArea } from "@/lib/types";

const COLORS = {
  darkBg: [10, 13, 18] as const,
  cream: [242, 230, 216] as const,
  amber: [214, 147, 93] as const,
  muted: [157, 167, 183] as const,
  white: [255, 255, 255] as const,
  steel: [49, 67, 86] as const,
  line: [40, 48, 60] as const,
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 24;
const CONTENT_W = PAGE_W - MARGIN * 2;

function rgb(color: readonly [number, number, number]) {
  return { r: color[0], g: color[1], b: color[2] };
}

function drawPageBg(doc: jsPDF) {
  const c = rgb(COLORS.darkBg);
  doc.setFillColor(c.r, c.g, c.b);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
}

function drawRule(doc: jsPDF, y: number) {
  const c = rgb(COLORS.line);
  doc.setDrawColor(c.r, c.g, c.b);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > PAGE_H - MARGIN) {
    doc.addPage();
    drawPageBg(doc);
    return MARGIN;
  }
  return y;
}

function drawLabel(doc: jsPDF, text: string, y: number): number {
  const c = rgb(COLORS.muted);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(c.r, c.g, c.b);
  doc.text(text.toUpperCase(), MARGIN, y);
  return y + 6;
}

function drawSectionTitle(doc: jsPDF, text: string, y: number): number {
  const c = rgb(COLORS.cream);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(c.r, c.g, c.b);
  const lines = doc.splitTextToSize(text, CONTENT_W);
  doc.text(lines, MARGIN, y);
  return y + lines.length * 7 + 4;
}

function drawBody(doc: jsPDF, text: string, y: number): number {
  const c = rgb(COLORS.white);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(c.r, c.g, c.b, 0.78);
  const lines = doc.splitTextToSize(text, CONTENT_W);

  for (const line of lines) {
    y = ensureSpace(doc, y, 6);
    doc.text(line, MARGIN, y);
    y += 5;
  }
  return y + 3;
}

function drawBullets(doc: jsPDF, items: string[], y: number): number {
  const c = rgb(COLORS.white);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(c.r, c.g, c.b, 0.78);

  for (const item of items) {
    const wrapped = doc.splitTextToSize(item, CONTENT_W - 10);
    y = ensureSpace(doc, y, wrapped.length * 5 + 3);

    const ac = rgb(COLORS.amber);
    doc.setFillColor(ac.r, ac.g, ac.b);
    doc.circle(MARGIN + 2, y - 1.4, 1.2, "F");

    doc.setTextColor(c.r, c.g, c.b, 0.78);
    for (let i = 0; i < wrapped.length; i++) {
      doc.text(wrapped[i], MARGIN + 8, y + i * 5);
    }
    y += wrapped.length * 5 + 3;
  }
  return y;
}

function drawNumberedList(doc: jsPDF, items: string[], y: number): number {
  const wc = rgb(COLORS.white);
  const ac = rgb(COLORS.amber);

  for (let i = 0; i < items.length; i++) {
    const wrapped = doc.splitTextToSize(items[i], CONTENT_W - 14);
    y = ensureSpace(doc, y, wrapped.length * 5 + 3);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(ac.r, ac.g, ac.b);
    doc.text(`${i + 1}.`, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(wc.r, wc.g, wc.b, 0.78);
    for (let j = 0; j < wrapped.length; j++) {
      doc.text(wrapped[j], MARGIN + 10, y + j * 5);
    }
    y += wrapped.length * 5 + 3;
  }
  return y;
}

export function generateScholarshipPdf(
  spec: ScholarshipSpec,
  focusAreas: FocusArea[]
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  drawPageBg(doc);

  // --- Cover ---
  let y = 60;
  const mc = rgb(COLORS.muted);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(mc.r, mc.g, mc.b);
  doc.text("SCHOLARSHIP OVERVIEW", MARGIN, y);
  y += 14;

  const cc = rgb(COLORS.cream);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(cc.r, cc.g, cc.b);
  doc.text(spec.name, MARGIN, y);
  y += 16;

  drawRule(doc, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const wc = rgb(COLORS.white);
  doc.setTextColor(wc.r, wc.g, wc.b, 0.72);
  const thesisLines = doc.splitTextToSize(spec.thesis, CONTENT_W);
  doc.text(thesisLines, MARGIN, y);
  y += thesisLines.length * 6 + 12;

  // Quick stats
  const stats = [
    { label: "Annual cohort", value: `${spec.annualCohortSize} scholars` },
    {
      label: "Seed funding",
      value: `$${spec.seedAmountUsd.toLocaleString()} USD`,
    },
  ];
  const ac = rgb(COLORS.amber);
  for (const stat of stats) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(mc.r, mc.g, mc.b);
    doc.text(stat.label.toUpperCase(), MARGIN, y);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(ac.r, ac.g, ac.b);
    doc.text(stat.value, MARGIN, y);
    y += 10;
  }

  // --- What the scholarship funds ---
  y += 6;
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "What the scholarship provides", y);
  y = drawSectionTitle(doc, "Benefits for each scholar", y);
  y = drawBullets(doc, spec.benefits, y);

  // --- Eligibility ---
  y += 4;
  y = ensureSpace(doc, y, 40);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Who can apply", y);
  y = drawSectionTitle(doc, "Eligibility requirements", y);
  y = drawBullets(doc, spec.eligibility, y);

  // --- Focus areas ---
  y += 4;
  y = ensureSpace(doc, y, 40);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Areas of focus", y);
  y = drawSectionTitle(doc, "What we're looking for builders to solve", y);

  for (const area of focusAreas) {
    y = ensureSpace(doc, y, 24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(cc.r, cc.g, cc.b);
    doc.text(area.title, MARGIN, y);
    y += 5;
    y = drawBody(doc, area.description, y);
    y += 2;
  }

  // --- Selection criteria ---
  y += 4;
  y = ensureSpace(doc, y, 40);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Judging criteria", y);
  y = drawSectionTitle(doc, "How applications are evaluated", y);
  y = drawBullets(doc, spec.selectionCriteria, y);

  // --- Cohort flow ---
  y += 4;
  y = ensureSpace(doc, y, 40);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Selection & cohort process", y);
  y = drawSectionTitle(doc, "From application to impact", y);
  y = drawNumberedList(doc, spec.cohortFlow, y);

  // --- Essay prompt ---
  y += 4;
  y = ensureSpace(doc, y, 30);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Application essay question", y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(ac.r, ac.g, ac.b);
  const qLines = doc.splitTextToSize(
    `"${spec.proposalQuestion}"`,
    CONTENT_W
  );
  doc.text(qLines, MARGIN, y);
  y += qLines.length * 7 + 6;

  // --- Success metric ---
  y = ensureSpace(doc, y, 30);
  drawRule(doc, y);
  y += 10;
  y = drawLabel(doc, "Success metric", y);
  y = drawBody(doc, spec.successMetric, y);

  // --- Footer ---
  y = ensureSpace(doc, y, 20);
  y += 8;
  drawRule(doc, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(mc.r, mc.g, mc.b);
  doc.text(
    `Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    MARGIN,
    y
  );

  return doc;
}
