// https://adventofcode.com/2023/day/8

const rawDirAndCoordinateMap1 = "RL\n\nAAA = (BBB, CCC)\nBBB = (DDD, EEE)\nCCC = (ZZZ, GGG)\nDDD = (DDD, DDD)\nEEE = (EEE, EEE)\nGGG = (GGG, GGG)\nZZZ = (ZZZ, ZZZ)"

const rawDirAndCoordinateMap2 = "LLR\n\nAAA = (BBB, BBB)\nBBB = (AAA, ZZZ)\nZZZ = (ZZZ, ZZZ)"

const rawDirAndCoordinateMap3 = "LR\n\n11A = (11B, XXX)\n11B = (XXX, 11Z)\n11Z = (11B, XXX)\n22A = (22B, XXX)\n22B = (22C, 22C)\n22C = (22Z, 22Z)\n22Z = (22B, 22B)\nXXX = (XXX, XXX)"

const hauntedWasteland = require('../../lib/2023/d08-hauntedWasteland');

describe('hauntedWasteland', () => {
  describe('calculateStepsToZZZ', () => {
    it(`returns 2 when given \n"${rawDirAndCoordinateMap1}"`, () => {
      expect(hauntedWasteland.calculateStepsToZZZ(rawDirAndCoordinateMap1)).toBe(2);
    });
    it(`returns 6 when given \n"${rawDirAndCoordinateMap2}"`, () => {
      expect(hauntedWasteland.calculateStepsToZZZ(rawDirAndCoordinateMap2)).toBe(6);
    });
    it(`returns 2 when given \n"${rawDirAndCoordinateMap1 + '\n'}"`, () => {
      expect(hauntedWasteland.calculateStepsToZZZ(rawDirAndCoordinateMap1 + "\n")).toBe(2);
    });
    it(`returns 6 when given \n"${rawDirAndCoordinateMap2 + '\n'}"`, () => {
      expect(hauntedWasteland.calculateStepsToZZZ(rawDirAndCoordinateMap2 + "\n")).toBe(6);
    });
  });
  describe('calculateStepsToxxZ', () => {
    it(`returns 6 when given \n"${rawDirAndCoordinateMap3}"`, () => {
      expect(hauntedWasteland.calculateStepsToxxZ(rawDirAndCoordinateMap3)).toBe(6);
    });
    it(`returns 6 when given \n"${rawDirAndCoordinateMap3 + '\n'}"`, () => {
      expect(hauntedWasteland.calculateStepsToxxZ(rawDirAndCoordinateMap3 + "\n")).toBe(6);
    });
  });

  describe('support functions', () => {
    describe('followDirectionsCountingSteps', () => {
      it('can return number of steps from a dirCoordinateMap1', () => {
        const dirCoordinateMap1 = hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap1)
        expect(
          hauntedWasteland.followDirectionsCountingSteps(dirCoordinateMap1)
        ).toBe(2)
      })
      it('can return number of steps from a dirCoordinateMap2', () => {
        const dirCoordinateMap2 = hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap2)
        expect(
          hauntedWasteland.followDirectionsCountingSteps(dirCoordinateMap2)
        ).toBe(6)
      })
    })
    describe('followDirectionsCountingSteps2', () => {
      it('can return number of steps from a dirCoordinateMap3', () => {
        const dirCoordinateMap3 = hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap3)
        expect(
          hauntedWasteland.followDirectionsCountingSteps2(dirCoordinateMap3)
        ).toBe(6)
      })
    })
    describe('parseDirAndCoordinateMap', () => {
      it('can create coordinateMap from raw coordinate map 1', () => {
        expect(
          hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap1).coordinateMap
        ).toEqual({
          AAA: {L: 'BBB', R: 'CCC'},
          BBB: {L: 'DDD', R: 'EEE'},
          CCC: {L: 'ZZZ', R: 'GGG'},
          DDD: {L: 'DDD', R: 'DDD'},
          EEE: {L: 'EEE', R: 'EEE'},
          GGG: {L: 'GGG', R: 'GGG'},
          ZZZ: {L: 'ZZZ', R: 'ZZZ'},
        })
      })
      it('can create directions from raw coordinate map 1', () => {
        expect(
          hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap1).directions
        ).toEqual('RL')
      })
      it('can create coordinateMap from raw coordinate map 2', () => {
        expect(
          hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap2).coordinateMap
        ).toEqual({
          AAA: {L: 'BBB', R: 'BBB'},
          BBB: {L: 'AAA', R: 'ZZZ'},
          ZZZ: {L: 'ZZZ', R: 'ZZZ'},
        })
      })
      it('can create directions from raw coordinate map 2', () => {
        expect(
          hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap2).directions
        ).toEqual('LLR')
      })
    })
  })
});
