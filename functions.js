export const FUNCTION_LIST = [
  `setDroneType(type: "Fixed-wing" | "Rotary-wing"): void`,
  `setMissionPurpose(purpose: "Surveillance" | "Photography" | "Delivery" | "Mapping" | "Other"): void`,
  `setMissionRequirements(payloadKg: number, flightTimeMin: number, maxRangeKm: number): void`,
  `selectMotor(model: "Leopard LC3542 1250KV" | "Sunnysky X2814 1000KV"): void`,
  `selectFlightController(model: "CUAV X7 Pro" | "Matek H743-WING"): void`,
  `setBladeRootSection(params: {
  width: number,
  alpha: number,
  beta: number,
  leadingEdgeRadius: number,
  trailingEdgeRadius: number,
  thickness: number,
  maxThicknessPosition: number,
  depth: number}): void`,
  `setBladeMiddleSection(params: {
  width: number,
  alpha: number,
  beta: number,
  leadingEdgeRadius: number,
  trailingEdgeRadius: number,
  thickness: number,
  maxThicknessPosition: number,
  depth: number
  }): void`,
  `setBladeSideSection(params: {
    width: number,
    alpha: number,
    beta: number,
    leadingEdgeRadius: number,
    trailingEdgeRadius: number,
    thickness: number,
    maxThicknessPosition: number,
    depth: number
  }): void`,
  `setRotationAxis(params: {
  hubOuterRadius: number,
  hubInnerRadius: number,
  hubHeight: number
  }): void`,
  `resetConfiguration(): void`
];
