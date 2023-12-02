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
    console.log(`✅ ${description}`);
    await Promise.resolve(callback());
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(error);
  }
}

export const it = test;

export async function describe(
  description: string,
  callback: () => Promise<void> | void
): Promise<void> {
  console.log(description);
  await Promise.resolve(callback());
}
