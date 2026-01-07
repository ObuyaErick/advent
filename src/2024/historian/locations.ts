import readInput from "../../assets/read-input.js";

export default function () {
  console.log("--- Day 11: Reactor ---\n");
  // const { left, right } = readInput("2024/location-ids/location_ids.txt")
    const { left, right } = readInput("2024/location-ids/location_ids.test.txt")
    .split("\n")
    .reduce(
      (acc, curr) => {
        const [l, r] = curr.split(/\s+/).map((n) => Number(n));
        acc.left.push(l);
        acc.right.push(r);
        return acc;
      },
      { left: [] as number[], right: [] as number[] }
    );

  left.sort();
  right.sort();

  let summation = 0;

  for (let i = 0; i < left.length; i++) {
    summation += Math.abs(left[i] - right[i]);
  }

  console.log("Summation: %d", summation);
}
