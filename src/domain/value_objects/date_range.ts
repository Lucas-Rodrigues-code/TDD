export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    if (endDate < startDate) {
      throw new Error(
        "A data de término deve ser maior ou igual a data de início"
      );
    }

    this.startDate = startDate;
    this.endDate = endDate;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  getTotalNights(): number {
    const timeDiff = Math.abs(
      this.endDate.getTime() - this.startDate.getTime()
    );
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
}
