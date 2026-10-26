const test = require("node:test");
const assert = require("node:assert/strict");
const {
  summarizeEquipment,
  validateEquipment,
} = require("../src/equipment");

const equipment = [
  {
    id: "EQ-1",
    name: "Scanner",
    location: "Building 1",
    status: "Ready",
    nextMaintenance: "2026-11-04",
  },
  {
    id: "EQ-2",
    name: "Freezer",
    location: "Building 2",
    status: "Maintenance",
    nextMaintenance: "2026-10-29",
  },
  {
    id: "EQ-3",
    name: "Imager",
    location: "Building 2",
    status: "Offline",
    nextMaintenance: "2026-10-28",
  },
];

test("validates and copies equipment records", () => {
  const result = validateEquipment(equipment);
  assert.deepEqual(result, equipment);
  assert.notStrictEqual(result[0], equipment[0]);
});

test("summarizes readiness status", () => {
  assert.deepEqual(summarizeEquipment(equipment), {
    total: 3,
    Ready: 1,
    Maintenance: 1,
    Offline: 1,
  });
});

test("rejects unsupported status values", () => {
  const invalid = [{ ...equipment[0], status: "Unknown" }];
  assert.throws(() => validateEquipment(invalid), /Unsupported equipment status/);
});
