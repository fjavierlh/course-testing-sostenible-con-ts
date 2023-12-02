export function expect<T>(expected: T) {
  return {
    toBe(result: T) {
      if (result !== expected) {
        throw Error(`❌ Expected ${expected} but received ${result}`);
      }
    },
  };
}

export function test(description: string, callback: () => void): void {
  try {
    callback();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(error);
  }
}
