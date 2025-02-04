import { DateRange } from "./date_range";

describe("DateRange value object", () => {
  it("deve criar uma instância de DateRange com  a data de início e data de término e verificar retorno de datas", () => {
    const startDate = new Date("2025-02-03");
    const endDate = new Date("2025-02-04");
    const dateRange = new DateRange(startDate, endDate);
    expect(dateRange.getStartDate()).toBe(startDate);
    expect(dateRange.getEndDate()).toBe(endDate);
  });

  it("deve lançar um erro se a data de término for antes da data de início", () => {
    expect(() => {
      new DateRange(new Date("2025-02-04"), new Date("2025-02-03"));
    }).toThrowError(
      "A data de término deve ser maior ou igual a data de início"
    );
  });

  it("deve calcular o total de noites corretamente", () => {
    const startDate = new Date("2025-02-03");
    const endDate = new Date("2025-02-04");
    const dateRange = new DateRange(startDate, endDate);
    expect(dateRange.getTotalNights()).toBe(1);
  });
});
