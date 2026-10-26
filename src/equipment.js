(function attachEquipmentModule(root) {
  const allowedStatuses = new Set(["Ready", "Maintenance", "Offline"]);

  function validateEquipment(items) {
    if (!Array.isArray(items)) {
      throw new TypeError("Equipment data must be an array.");
    }

    return items.map((item) => {
      if (!item || typeof item !== "object") {
        throw new TypeError("Each equipment record must be an object.");
      }

      const required = ["id", "name", "location", "status", "nextMaintenance"];
      for (const field of required) {
        if (typeof item[field] !== "string" || item[field].trim() === "") {
          throw new TypeError(`Equipment field '${field}' must be a non-empty string.`);
        }
      }

      if (!allowedStatuses.has(item.status)) {
        throw new RangeError(`Unsupported equipment status '${item.status}'.`);
      }

      if (Number.isNaN(Date.parse(`${item.nextMaintenance}T00:00:00Z`))) {
        throw new RangeError(`Invalid maintenance date '${item.nextMaintenance}'.`);
      }

      return { ...item };
    });
  }

  function summarizeEquipment(items) {
    const records = validateEquipment(items);
    return records.reduce(
      (summary, item) => {
        summary.total += 1;
        summary[item.status] += 1;
        return summary;
      },
      { total: 0, Ready: 0, Maintenance: 0, Offline: 0 }
    );
  }

  const api = { validateEquipment, summarizeEquipment };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.EquipmentReadiness = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
