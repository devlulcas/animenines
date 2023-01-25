export function logError(error: unknown) {
  if (typeof error === "string") {
    console.log("😥 Error: " + error);
    return;
  }

  if (error instanceof Error) {
    console.log("😥 Error: " + error.message);
    return;
  }

  console.log("😥 Error: " + error);
}
