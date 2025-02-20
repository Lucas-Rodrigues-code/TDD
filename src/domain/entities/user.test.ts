import User from "./user";
describe("User entity", () => {
  it("dece criar uma instância de User com Id e nome", () => {
    const user = new User("1", "John Doe");
    expect(user.getId()).toBe("1");
    expect(user.getName()).toBe("John Doe");
  });

  it("deve lançar um erro se o nome do usuário for vazio", () => {
    expect(() => {
      new User("1", "");
    }).toThrowError("O nome do usuário não pode ser vazio");
  });
});
