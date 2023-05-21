const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("0. Declare two variables", () => {
  test("The variable `isDogBetter` must be declared with the value of `true`", () => {
    const isDogBetter = rewire("../solution").__get__("isDogBetter");
    expect(isDogBetter).toBeDefined() && expect(isDogBetter).toBe(true);
  });
  test("The variable `isCatBetter` must be declared with the value of `false`", () => {
    const isCatBetter = rewire("../solution").__get__("isCatBetter");
    expect(isCatBetter).toBeDefined() && expect(isCatBetter).toBe(false);
  });
});

describe("1. Check the result of:", () => {
  test("a) `isDogBetter` `AND` `isCatBetter`", () => {
    const solution = require("../solution");
    const isDogBetter = rewire("../solution").__get__("isDogBetter");
    const isCatBetter = rewire("../solution").__get__("isCatBetter");
    (isDogBetter === true && isCatBetter === false)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*1.*a.*false/i))
      : fail();
  });

  test("b) `isDogBetter` `OR` `isCatBetter`", () => {
    const solution = require("../solution");
    const isDogBetter = rewire("../solution").__get__("isDogBetter");
    const isCatBetter = rewire("../solution").__get__("isCatBetter");
    (isDogBetter === true || isCatBetter === false)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*1.*b.*true/i))
      : fail();
  });

  test("c) `NOT` (`isDogBetter` `AND` `isCatBetter`)", () => {
    const solution = require("../solution");
    const isDogBetter = rewire("../solution").__get__("isDogBetter");
    const isCatBetter = rewire("../solution").__get__("isCatBetter");
    (isDogBetter === true && isCatBetter === false)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*1.*c.*true/i))
      : fail();
  });
});

describe("2. Declare three more variables", () => {
  test("The variable `atoms` must be declared and assigned a number as value", () => {
    const atoms = rewire("../solution").__get__("atoms");
    expect(atoms).toBeDefined() && expect(typeof atoms).toBe("number");
  });
  test("The variable `sandGrains` must be declared and assigned a number as value", () => {
    const sandGrains = rewire("../solution").__get__("sandGrains");
    expect(sandGrains).toBeDefined() && expect(typeof sandGrains).toBe("number");
  });
  test("The variable `starsInSky` must be declared and assigned a number as value", () => {
    const starsInSky = rewire("../solution").__get__("starsInSky");
    expect(starsInSky).toBeDefined() && expect(typeof starsInSky).toBe("number");
  });
});

describe("3. Check the result of whether:", () => {
  test("a) `atoms` is greater than `starsInSky` `AND` `atoms` is greater than `sandGrains`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    const starsInSky = rewire("../solution").__get__("starsInSky");
    (atoms > starsInSky && atoms > sandGrains)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*a.*true/i))
      : fail();
  });

  test("b) `atoms` is `NOT` equal to `sandGrains`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    atoms !== sandGrains
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*b.*true/i))
      : fail();
  });

  test("c) `starsInSky` is less than `sandGrains` `OR` `starsInSky` is greater than `atoms`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    const starsInSky = rewire("../solution").__get__("starsInSky");
    (starsInSky < sandGrains || starsInSky > atoms)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*c.*true/i))
      : fail();
  });

  test("d) `atoms` is equal to `starsInSky` `OR` `atoms` is `NOT` equal to `sandGrains`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    const starsInSky = rewire("../solution").__get__("starsInSky");
    (atoms === starsInSky || atoms !== sandGrains)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*d.*true/i))
      : fail();
  });

  test("e) `atoms` is greater than or equal to `10` `AND` `sandGrains` is less than or equal to `10`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    (atoms >= 10 && sandGrains <= 10)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*e.*true/i))
      : fail();
  });
  test("f) `atoms` multiplied by `starsInSky` is less than `100` `OR` `atoms` multiplied by `sandGrains` is greater than `100`", () => {
    const solution = require("../solution");
    const atoms = rewire("../solution").__get__("atoms");
    const sandGrains = rewire("../solution").__get__("sandGrains");
    const starsInSky = rewire("../solution").__get__("starsInSky");
    (atoms * starsInSky < 100 || atoms * sandGrains > 100)
      ? expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/q.*3.*f.*true/i))
      : fail();
  });
}); 