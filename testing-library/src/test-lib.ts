export function expect<T>(expected: T) {
  return {
    toBe(result: T) {
      if (result !== expected) {
        throw Error(`❌ Expected ${expected} but received ${result}`);
      }
    },
  };
}

export async function test(
  description: string,
  callback: () => void | Promise<void>
): Promise<void> {
  try {
    await callback();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(error);
  }
}
